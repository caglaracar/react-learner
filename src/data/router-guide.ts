import type {Section} from '../components/GuideSection'

export const routerGuideSection: Section = {
  id: 'tanstack-router',
  title: '5. TanStack Router',
  description:
    'Code-based routing, route context, guards, loader ve search params gibi router kavramlarını öğrenin.',
  level: 'intermediate',
  lessons: [
    {
      id: 'router-basics',
      title: 'TanStack Router Temelleri',
      blocks: [
        {
          type: 'text',
          content:
            'TanStack Router, type-safe bir React router\'dır. Bu projede CODE-BASED routing kullanılır (file-based değil). Route\'lar manuel olarak tanımlanır ve router.tsx\'de birleştirilir.',
        },
        {
          type: 'code',
          title: 'Route Oluşturma',
          language: 'tsx',
          content: `import {createRoute, lazyRouteComponent} from '@tanstack/react-router'
import type {AnyRoute} from '@tanstack/react-router'

// Her route bir factory fonksiyonu ile oluşturulur
export const createUsersRoute = (parentRoute: AnyRoute) => {
  return createRoute({
    getParentRoute: () => parentRoute,
    path: '/users',
    component: lazyRouteComponent(() => import('./UsersPage')),
  })
}

// lazyRouteComponent → code splitting sağlar
// Sayfa yüklenene kadar bundle'a dahil olmaz`,
        },
        {
          type: 'code',
          title: 'Router Tree Oluşturma (router.tsx)',
          language: 'tsx',
          content: `import {createRootRouteWithContext, createRouter} from '@tanstack/react-router'

// 1. Root route + context tanımı
const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Outlet />  {/* Child route'lar buraya render olur */}
      <Toaster />
    </>
  ),
  errorComponent: GlobalError,
  notFoundComponent: GlobalNotFound,
})

// 2. Gate route'lar (layout + guard)
const AuthGateRoute = createAuthGateRoute(rootRoute)
const AppGateRoute = createAppGateRoute(rootRoute)

// 3. Feature route'ları parent'a bağla
const users = createUsersRoute(AppGateRoute)
const dashboard = createDashboardRoute(AppGateRoute)

// 4. Route tree'yi oluştur
const routeTree = rootRoute.addChildren([
  AuthGateRoute.addChildren([...authPublicRoutes]),
  AppGateRoute.addChildren([dashboard, users, ...]),
])

// 5. Router instance'ı
export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',  // Link hover'da prefetch
  context: {queryClient, user: null},
})`,
        },
      ],
    },
    {
      id: 'router-context',
      title: 'Router Context',
      blocks: [
        {
          type: 'text',
          content:
            'Router context, tüm route\'lara paylaşılan veridir. Bu projede queryClient ve user bilgisi context üzerinden paylaşılır. beforeLoad ve loader fonksiyonlarında kullanılır.',
        },
        {
          type: 'code',
          title: 'Router Context Tanımı ve Kullanımı',
          language: 'tsx',
          content: `// types.ts - Context tipi
interface RouterContext {
  queryClient: QueryClient
  user: AuthUser | null
}

// AppProviders.tsx - Context'i sağlama
<RouterProvider
  router={router}
  context={{queryClient, user}}
/>

// Route'da kullanım (beforeLoad)
createRoute({
  path: '/admin',
  beforeLoad: ({context}) => {
    // context.user ve context.queryClient erişilebilir
    if (!context.user) {
      throw redirect({to: '/login'})
    }
  },
})

// Route'da kullanım (loader)
createRoute({
  path: '/users/$userId',
  loader: ({context, params}) => {
    // Sayfaya gitmeden veriyi yükle
    return context.queryClient.ensureQueryData(
      userDetailQueryOptions(Number(params.userId))
    )
  },
})`,
        },
      ],
    },
    {
      id: 'route-guards',
      title: 'Route Guards (beforeLoad)',
      blocks: [
        {
          type: 'text',
          content:
            'beforeLoad, route yüklenmeden önce çalışan bir fonksiyondur. Auth kontrolü, yetki kontrolü ve redirect işlemleri için kullanılır. throw redirect() ile yönlendirme yapılır.',
        },
        {
          type: 'code',
          title: 'Auth Guard Örneği',
          language: 'tsx',
          content: `// guards.ts
import {redirect} from '@tanstack/react-router'

export function requireAuth(context: RouterContext) {
  if (!context.user) {
    throw redirect({to: '/login'})
  }
}

export function requireGuest(context: RouterContext) {
  if (context.user) {
    throw redirect({to: '/'})
  }
}

// Gate route'da kullanım
export function createAppGateRoute(rootRoute: AnyRoute) {
  return createRoute({
    getParentRoute: () => rootRoute,
    id: 'app',
    component: AppShell, // Layout wrapper
    beforeLoad: ({context}) => requireAuth(context as RouterContext),
  })
}

// Bu gate'in altındaki TÜM route'lar auth gerektirir
// AppGateRoute.addChildren([dashboard, users, ...])`,
        },
        {
          type: 'tip',
          content:
            'Gate pattern: Layout + Guard birleşimi. Auth gate altındaki tüm sayfalar AppShell layout\'u ile render olur VE auth kontrolünden geçer. İç içe gate\'ler de mümkündür.',
        },
      ],
    },
    {
      id: 'search-params',
      title: 'Search Params (URL State)',
      blocks: [
        {
          type: 'text',
          content:
            'TanStack Router, URL search parametrelerini type-safe olarak yönetir. Zod ile validasyon yapabilirsiniz. Filtre, sıralama ve pagination state\'ini URL\'de tutmak için idealdir.',
        },
        {
          type: 'code',
          title: 'Search Params Kullanımı',
          language: 'tsx',
          content: `import {createRoute} from '@tanstack/react-router'
import {z} from 'zod'

// Route tanımında search params şeması
const usersRoute = createRoute({
  getParentRoute: () => appGateRoute,
  path: '/users',
  validateSearch: z.object({
    page: z.number().optional().default(1),
    search: z.string().optional(),
    status: z.enum(['active', 'inactive']).optional(),
    sortBy: z.string().optional(),
  }),
  component: lazyRouteComponent(() => import('./UsersPage')),
})

// Component'te kullanım
function UsersPage() {
  // Type-safe search params
  const {page, search, status} = usersRoute.useSearch()

  const navigate = useNavigate()

  // Search params güncelleme
  const handlePageChange = (newPage: number) => {
    navigate({
      search: (prev) => ({...prev, page: newPage}),
    })
  }

  const handleFilter = (newStatus: string) => {
    navigate({
      search: (prev) => ({...prev, status: newStatus, page: 1}),
    })
  }

  // Query'de kullanım
  const {data} = useQuery(usersQueryOptions({page, search, status}))
}`,
        },
        {
          type: 'tip',
          content:
            'URL\'deki search params değiştiğinde queryKey de değişir → TanStack Query otomatik olarak yeni veriyi çeker. Bu sayede filtre + pagination + query entegrasyonu seamless çalışır.',
        },
      ],
    },
    {
      id: 'navigation',
      title: 'Link ve Navigation',
      blocks: [
        {
          type: 'text',
          content:
            'TanStack Router\'da navigasyon Link componenti veya useNavigate hook\'u ile yapılır. Type-safe\'dir - olmayan bir route\'a link vermeye çalışırsanız TypeScript hata verir.',
        },
        {
          type: 'code',
          title: 'Link ve useNavigate',
          language: 'tsx',
          content: `import {Link, useNavigate} from '@tanstack/react-router'

// 1. Link component (declarative)
<Link to="/users">Kullanıcılar</Link>

// 2. Parametreli link
<Link to="/users/$userId" params={{userId: 5}}>
  Kullanıcı Detay
</Link>

// 3. Search params ile link
<Link to="/users" search={{page: 2, status: 'active'}}>
  Aktif Kullanıcılar (Sayfa 2)
</Link>

// 4. Active state
<Link
  to="/users"
  activeProps={{className: 'font-bold text-blue-500'}}
  inactiveProps={{className: 'text-gray-500'}}>
  Kullanıcılar
</Link>

// 5. useNavigate (imperative)
const navigate = useNavigate()

const handleClick = () => {
  navigate({to: '/users/$userId', params: {userId: 5}})
}

// 6. Programmatic redirect
navigate({to: '/login', replace: true}) // history'ye ekleme`,
        },
      ],
    },
  ],
}
