import type {Section} from '../components/GuideSection'

export const compoundComponentsSection: Section = {
  id: 'compound-components',
  title: '1. Compound Components Pattern',
  description:
    'Birbiriyle ilişkili component\'leri tek bir API altında birleştirin. shadcn/ui ve Radix UI bu pattern\'i kullanır.',
  level: 'advanced',
  lessons: [
    {
      id: 'compound-basics',
      title: 'Compound Components Nedir?',
      blocks: [
        {
          type: 'text',
          content:
            'Compound Components, birbirine bağlı component\'lerin implicit state paylaşarak çalışmasıdır. HTML\'deki <select> + <option> ilişkisi gibi. Parent, state\'i yönetir; child\'lar Context üzerinden erişir. shadcn/ui\'daki Tabs, Accordion, Dialog hep bu pattern\'dir.',
        },
        {
          type: 'code',
          title: 'Compound Component Örneği: Accordion',
          language: 'tsx',
          content: `import {createContext, useContext, useState, type ReactNode} from 'react'

// 1. Shared Context
interface AccordionContextType {
  openItems: Set<string>
  toggle: (id: string) => void
}
const AccordionContext = createContext<AccordionContextType | null>(null)

const useAccordion = () => {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error('Accordion.Item must be inside Accordion')
  return ctx
}

// 2. Root Component (state yönetimi)
function Accordion({children, multiple = false}: {
  children: ReactNode
  multiple?: boolean
}) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpenItems(prev => {
      const next = new Set(multiple ? prev : [])
      if (prev.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <AccordionContext.Provider value={{openItems, toggle}}>
      <div className="divide-y">{children}</div>
    </AccordionContext.Provider>
  )
}

// 3. Child Components (Context'ten state okur)
function AccordionItem({id, children}: {id: string; children: ReactNode}) {
  return <div data-id={id}>{children}</div>
}

function AccordionTrigger({id, children}: {id: string; children: ReactNode}) {
  const {openItems, toggle} = useAccordion()
  const isOpen = openItems.has(id)

  return (
    <button onClick={() => toggle(id)} className="w-full text-left p-4">
      {children}
      <span className={isOpen ? 'rotate-180' : ''}>▼</span>
    </button>
  )
}

function AccordionContent({id, children}: {id: string; children: ReactNode}) {
  const {openItems} = useAccordion()
  if (!openItems.has(id)) return null
  return <div className="p-4">{children}</div>
}

// 4. API'yi birleştir
Accordion.Item = AccordionItem
Accordion.Trigger = AccordionTrigger
Accordion.Content = AccordionContent

// 5. Kullanım — çok temiz ve esnek!
function FAQ() {
  return (
    <Accordion multiple>
      <Accordion.Item id="q1">
        <Accordion.Trigger id="q1">React nedir?</Accordion.Trigger>
        <Accordion.Content id="q1">
          React bir UI kütüphanesidir...
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item id="q2">
        <Accordion.Trigger id="q2">JSX nedir?</Accordion.Trigger>
        <Accordion.Content id="q2">
          JSX, JavaScript içinde HTML yazmayı sağlar...
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}`,
        },
        {
          type: 'tip',
          content:
            'Bu projede shadcn/ui component\'leri (Tabs, Dialog, Sidebar, Accordion) hep Compound Components pattern\'ini kullanır. Radix UI altyapısıyla gelir.',
        },
      ],
    },
  ],
}

export const renderPropsHocSection: Section = {
  id: 'render-props-hoc',
  title: '2. Render Props & HOC Pattern\'leri',
  description:
    'Component mantığını paylaşmanın iki klasik yolu. Modern alternatifleri ile birlikte öğrenin.',
  level: 'advanced',
  lessons: [
    {
      id: 'render-props',
      title: 'Render Props Pattern',
      blocks: [
        {
          type: 'text',
          content:
            'Render props, bir component\'e fonksiyon geçerek render mantığını dışarıdan kontrol etmenizi sağlar. Hook\'lardan önce çok yaygındı. Hâlâ bazı durumlarda faydalıdır (özellikle 3rd party kütüphanelerde).',
        },
        {
          type: 'code',
          title: 'Render Props Örneği',
          language: 'tsx',
          content: `// Mouse pozisyonunu takip eden component
interface MousePosition {
  x: number
  y: number
}

function MouseTracker({render}: {render: (pos: MousePosition) => ReactNode}) {
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({x: e.clientX, y: e.clientY})
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return <>{render(position)}</>
}

// Kullanım - render mantığı tamamen dışarıda
function App() {
  return (
    <MouseTracker
      render={({x, y}) => (
        <div>
          <p>Mouse: {x}, {y}</p>
          <div style={{
            position: 'absolute',
            left: x,
            top: y,
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: 'red',
          }} />
        </div>
      )}
    />
  )
}

// ✅ Modern alternatif: Custom Hook
function useMousePosition() {
  const [position, setPosition] = useState({x: 0, y: 0})
  useEffect(() => {
    const handleMove = (e: MouseEvent) => setPosition({x: e.clientX, y: e.clientY})
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])
  return position
}

// Hook ile kullanım — çok daha temiz
function App() {
  const {x, y} = useMousePosition()
  return <p>Mouse: {x}, {y}</p>
}`,
        },
      ],
    },
    {
      id: 'hoc-pattern',
      title: 'Higher-Order Component (HOC)',
      blocks: [
        {
          type: 'text',
          content:
            'HOC, bir component alıp geliştirilmiş yeni bir component döndüren fonksiyondur. Eski React\'te yaygındı. Artık hook\'lar çoğu HOC ihtiyacını karşılar, ama bazı durumlarda hâlâ faydalıdır.',
        },
        {
          type: 'code',
          title: 'HOC Örneği: withAuth',
          language: 'tsx',
          content: `// HOC: Component'i sararak yetki kontrolü ekler
function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  requiredRole?: string,
) {
  return function AuthenticatedComponent(props: P) {
    const {user} = useSessionStore()

    if (!user) return <Navigate to="/login" />
    if (requiredRole && user.role !== requiredRole) {
      return <div>Yetkiniz yok</div>
    }

    return <WrappedComponent {...props} />
  }
}

// Kullanım
const ProtectedDashboard = withAuth(Dashboard)
const AdminPanel = withAuth(AdminPage, 'admin')

// ✅ Bu projede HOC yerine route guard kullanılır:
createRoute({
  path: '/admin',
  component: AdminPage,
  beforeLoad: ({context}) => requireAuth(context), // ← Guard
})

// HOC hâlâ faydalı olduğu yerler:
// - Analytics wrapper (her sayfaya tracking ekle)
// - Error boundary wrapper
// - Feature flag wrapper`,
        },
        {
          type: 'tip',
          content:
            'Modern React\'te Hook\'lar > HOC > Render Props sıralaması geçerlidir. Yeni kod yazarken önce Hook düşünün. HOC ve Render Props sadece Hook\'un yetersiz kaldığı durumlarda (component sarmalama gerektiğinde) kullanın.',
        },
      ],
    },
  ],
}

export const performanceSection: Section = {
  id: 'performance-deep',
  title: '3. Performans Optimizasyonu (İleri)',
  description:
    'React Profiler, bundle analizi, virtualization ve render optimizasyon teknikleri.',
  level: 'expert',
  lessons: [
    {
      id: 'react-profiler',
      title: 'React DevTools Profiler ile Analiz',
      blocks: [
        {
          type: 'code',
          title: 'Performans Analiz Adımları',
          language: 'text',
          content: `React DevTools Profiler Kullanımı:

1. Chrome DevTools → "Profiler" tab'ı açın
2. "Record" butonuna tıklayın
3. Uygulamada etkileşim yapın
4. "Stop" ile kaydı durdurun

Bakılacaklar:
━━━━━━━━━━━━
• Flame Graph: Hangi component ne kadar sürede render oldu?
• Ranked: En yavaş component'ler sıralı
• "Why did this render?": Re-render sebebini gösterir

Kırmızı Bayraklar 🚩:
━━━━━━━━━━━━━━━━
• 16ms üzeri render (60fps'i kaçırır)
• Unnecessary re-render (prop değişmeden render)
• Büyük liste render (100+ item → virtualization gerek)`,
        },
        {
          type: 'code',
          title: 'Programmatic Profiler',
          language: 'tsx',
          content: `import {Profiler, type ProfilerOnRenderCallback} from 'react'

const onRender: ProfilerOnRenderCallback = (
  id,           // "UserList"
  phase,        // "mount" | "update"
  actualDuration, // Bu render ne kadar sürdü (ms)
  baseDuration,   // Memoize olmadan ne kadar sürerdi
  startTime,
  commitTime,
) => {
  if (actualDuration > 16) {
    console.warn(\`⚠️ Slow render: \${id} took \${actualDuration.toFixed(1)}ms\`)
  }
}

function App() {
  return (
    <Profiler id="UserList" onRender={onRender}>
      <UserList />
    </Profiler>
  )
}`,
        },
      ],
    },
    {
      id: 'virtualization',
      title: 'Liste Virtualization',
      blocks: [
        {
          type: 'text',
          content:
            'Büyük listelerde (100+ item) tüm öğeleri render etmek yerine, sadece ekranda görünen öğeleri render edin. TanStack Virtual veya react-window kullanılır.',
        },
        {
          type: 'code',
          title: 'TanStack Virtual ile Virtualization',
          language: 'tsx',
          content: `import {useVirtualizer} from '@tanstack/react-virtual'
import {useRef} from 'react'

function VirtualList({items}: {items: Item[]}) {
  const parentRef = useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: items.length,      // Toplam item sayısı
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,   // Her satırın tahmini yüksekliği (px)
    overscan: 5,              // Ekran dışında kaç item render edilsin
  })

  return (
    <div ref={parentRef} style={{height: '600px', overflow: 'auto'}}>
      <div style={{height: virtualizer.getTotalSize(), position: 'relative'}}>
        {virtualizer.getVirtualItems().map(virtualRow => (
          <div
            key={virtualRow.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: virtualRow.size,
              transform: \`translateY(\${virtualRow.start}px)\`,
            }}>
            {items[virtualRow.index].name}
          </div>
        ))}
      </div>
    </div>
  )
}

// 10.000 item olsa bile sadece ~20 tanesi DOM'da!
// Scroll performansı mükemmel`,
        },
        {
          type: 'code',
          title: 'Bundle Analizi',
          language: 'bash',
          content: `# Vite bundle analizi
npx vite-bundle-visualizer

# Sonuç: treemap görselinde hangi paket ne kadar yer kaplıyor
# Büyük paketler → lazy loading ile bölün
# Gereksiz paketler → kaldırın

# Tipik optimizasyonlar:
# 1. lodash → lodash-es (tree-shakeable)
# 2. moment → dayjs (çok daha küçük)
# 3. Büyük component'ler → React.lazy
# 4. Icon kütüphanesi → sadece kullanılanları import edin
#    import {House} from 'lucide-react'  ✅
#    import * as Icons from 'lucide-react' ❌`,
        },
        {
          type: 'tip',
          content:
            'Erken optimizasyon yapmayın! Önce doğru çalışsın, sonra Profiler ile ölçün, sonra optimize edin. "Premature optimization is the root of all evil." — Donald Knuth',
        },
      ],
    },
  ],
}

export const typescriptReactSection: Section = {
  id: 'typescript-react',
  title: '4. TypeScript + React İleri Teknikler',
  description:
    'Generic components, discriminated unions, template literal types ve type-safe event handling.',
  level: 'expert',
  lessons: [
    {
      id: 'generic-components',
      title: 'Generic Components',
      blocks: [
        {
          type: 'text',
          content:
            'Generic component\'ler, farklı veri tipleriyle çalışabilen yeniden kullanılabilir component\'lerdir. Tablo, liste, select gibi veri agnostik component\'ler için kritiktir.',
        },
        {
          type: 'code',
          title: 'Generic Component Örnekleri',
          language: 'tsx',
          content: `// 1. Generic Select Component
interface SelectProps<T> {
  items: T[]
  value: T | null
  onChange: (item: T) => void
  getLabel: (item: T) => string
  getKey: (item: T) => string | number
}

function Select<T>({items, value, onChange, getLabel, getKey}: SelectProps<T>) {
  return (
    <select
      value={value ? String(getKey(value)) : ''}
      onChange={e => {
        const item = items.find(i => String(getKey(i)) === e.target.value)
        if (item) onChange(item)
      }}>
      <option value="">Seçiniz</option>
      {items.map(item => (
        <option key={getKey(item)} value={String(getKey(item))}>
          {getLabel(item)}
        </option>
      ))}
    </select>
  )
}

// Kullanım - TypeScript tipi otomatik çıkarılır
interface City {
  id: number
  name: string
  population: number
}

<Select<City>
  items={cities}
  value={selectedCity}
  onChange={setSelectedCity}    // (city: City) => void
  getLabel={c => c.name}       // TypeScript c'nin City olduğunu bilir
  getKey={c => c.id}
/>

// 2. Generic DataTable Component
interface Column<T> {
  key: keyof T
  header: string
  render?: (value: T[keyof T], row: T) => ReactNode
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  onRowClick?: (row: T) => void
}

function DataTable<T extends {id: string | number}>({
  data, columns, onRowClick,
}: DataTableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={String(col.key)}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id} onClick={() => onRowClick?.(row)}>
            {columns.map(col => (
              <td key={String(col.key)}>
                {col.render
                  ? col.render(row[col.key], row)
                  : String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}`,
        },
      ],
    },
    {
      id: 'discriminated-unions',
      title: 'Discriminated Unions ile Props',
      blocks: [
        {
          type: 'code',
          title: 'Type-Safe Variant Props',
          language: 'tsx',
          content: `// Discriminated union: "type" alanına göre diğer alanlar değişir
type NotificationProps =
  | {type: 'success'; message: string}
  | {type: 'error'; message: string; retryAction: () => void}
  | {type: 'loading'; progress: number}

function Notification(props: NotificationProps) {
  switch (props.type) {
    case 'success':
      return <div className="text-green-500">{props.message}</div>

    case 'error':
      // TypeScript props.retryAction'ın var olduğunu bilir!
      return (
        <div className="text-red-500">
          {props.message}
          <button onClick={props.retryAction}>Tekrar Dene</button>
        </div>
      )

    case 'loading':
      // TypeScript props.progress'in var olduğunu bilir!
      return <ProgressBar value={props.progress} />
  }
}

// Kullanım - TypeScript yanlış prop geçmeyi engeller
<Notification type="success" message="Kaydedildi" />
<Notification type="error" message="Hata!" retryAction={() => retry()} />
<Notification type="loading" progress={75} />

// ❌ TypeScript HATA verir:
<Notification type="success" retryAction={() => {}} />
// 'retryAction' does not exist on type '{type: "success"; message: string}'

// Bu projede API response'ları için benzer pattern:
type ApiResponse<T> =
  | {success: true; data: T}
  | {success: false; error: {code: string; message: string}}`,
        },
        {
          type: 'tip',
          content:
            'Discriminated union, component API\'nizi type-safe yapar. Yanlış prop kombinasyonu derleme zamanında yakalanır. Button (variant + size), Alert (type + action), Modal (mode + content) gibi component\'lerde kullanın.',
        },
      ],
    },
  ],
}

export const architectureSection: Section = {
  id: 'architecture-patterns',
  title: '5. Proje Mimarisi & Best Practices',
  description:
    'Feature-based architecture, separation of concerns ve bu projede uygulanan mimari kararlar.',
  level: 'expert',
  lessons: [
    {
      id: 'feature-architecture',
      title: 'Feature-Based Mimari',
      blocks: [
        {
          type: 'text',
          content:
            'Bu projede domain-driven, feature-based mimari kullanılır. Her feature kendi API, component, hook, query, schema ve type tanımlarını içerir. Bu yapı, büyük projelerde kodu organize tutmanın en etkili yoludur.',
        },
        {
          type: 'code',
          title: 'Bu Projenin Klasör Yapısı',
          language: 'text',
          content: `src/
├── app/
│   ├── routes/           # Sayfa component'leri
│   │   └── users/
│   │       ├── route.tsx         # Route tanımı
│   │       └── UsersPage.tsx     # Sayfa component'i
│   ├── router/           # Router konfigürasyonu
│   │   ├── router.tsx            # Route tree
│   │   └── types.ts              # RouterContext tipi
│   ├── layout/           # AppShell, Sidebar, Header
│   └── errors/           # GlobalError, GlobalNotFound
│
├── features/             # Feature modülleri (DOMAIN-DRIVEN)
│   └── users/
│       ├── api/          # API fonksiyonları (axios calls)
│       │   └── users-api.ts
│       ├── components/   # Domain'e özel component'ler
│       │   ├── UserTable.tsx
│       │   ├── CreateUserDialog.tsx
│       │   └── UserFilters.tsx
│       ├── hooks/        # Custom hooks
│       │   └── use-users.ts
│       ├── queries/      # TanStack Query options
│       │   └── users-queries.ts
│       ├── schemas/      # Zod validation schemas
│       │   └── user-schema.ts
│       └── types/        # TypeScript type tanımları
│           └── user-types.ts
│
├── common/               # Paylaşılan kodlar
│   ├── components/       # Reusable UI components
│   │   └── ui/           # shadcn/ui components
│   ├── hooks/            # Global hooks
│   ├── lib/              # Utility libraries (query-client, axios)
│   ├── utils/            # Helper fonksiyonlar
│   └── i18n/             # Çeviri dosyaları`,
        },
        {
          type: 'code',
          title: 'Feature Modülü: Tam Akış Örneği',
          language: 'tsx',
          content: `// 1. types/user-types.ts — Tip tanımları
export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
  status: 'active' | 'inactive'
}

export interface CreateUserDto {
  name: string
  email: string
  role: 'admin' | 'user'
}

// 2. schemas/user-schema.ts — Zod validasyon
export const createUserSchema = z.object({
  name: z.string().min(2, 'En az 2 karakter'),
  email: z.string().email('Geçersiz email'),
  role: z.enum(['admin', 'user']),
})

// 3. api/users-api.ts — API çağrıları
export const getUsers = (params: UserFilters) =>
  api.get<PaginatedResponse<User>>('/users', {params})

export const createUser = (data: CreateUserDto) =>
  api.post<User>('/users', data)

// 4. queries/users-queries.ts — Query options
export const usersQueryOptions = (filters: UserFilters) =>
  queryOptions({
    queryKey: ['users', filters],
    queryFn: () => getUsers(filters),
  })

// 5. hooks/use-users.ts — Mutation hooks
export const useCreateUser = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      qc.invalidateQueries({queryKey: ['users']})
      toast.success('Kullanıcı oluşturuldu')
    },
  })
}

// 6. components/CreateUserDialog.tsx — UI
// React Hook Form + Zod + useMutation

// 7. routes/users/UsersPage.tsx — Sayfa
// useQuery + DataTable + Filters + CreateDialog`,
        },
        {
          type: 'warning',
          content:
            'features/ içindeki bir modül, başka bir feature\'ı DOĞRUDAN import etmemelidir. Ortak kod common/ altında olmalıdır. Bu kural, feature\'lar arası bağımlılığı (coupling) önler.',
        },
      ],
    },
    {
      id: 'clean-code-react',
      title: 'Clean Code Kuralları (React)',
      blocks: [
        {
          type: 'code',
          title: 'Component Tasarım Kuralları',
          language: 'tsx',
          content: `// ✅ KURAL 1: Component küçük olmalı (~100-150 satır max)
// Büyüdüyse → bölün

// ✅ KURAL 2: Single Responsibility — her component tek iş yapmalı
// ❌ UserPageWithTableAndFiltersAndDialogAndExport
// ✅ UsersPage → UserTable + UserFilters + CreateUserDialog

// ✅ KURAL 3: İsimlendirme
// Component: PascalCase → UserCard, CreateUserDialog
// Hook: camelCase, "use" prefix → useUsers, useCreateUser
// Event handler: "handle" prefix → handleSubmit, handleDelete
// Boolean prop: "is/has/should" prefix → isOpen, hasError, shouldRefresh

// ✅ KURAL 4: Props Destructuring (ilk satırda)
// ❌ function UserCard(props) { return <p>{props.name}</p> }
// ✅ function UserCard({name, email}: UserCardProps) { ... }

// ✅ KURAL 5: Early Return ile guard clause
function UserDetail({user}: {user: User | null}) {
  if (!user) return <NotFound />  // Guard clause İLK
  // Ana mantık SONRA

  return <div>{user.name}</div>
}

// ✅ KURAL 6: Derived state — gereksiz useState kullanmayın
// ❌ YANLIŞ
const [fullName, setFullName] = useState('')
useEffect(() => {
  setFullName(user.firstName + ' ' + user.lastName)
}, [user])

// ✅ DOĞRU — hesaplanmış değer, state değil
const fullName = user.firstName + ' ' + user.lastName

// ✅ KURAL 7: İmport sırası
// 1. React / framework imports
// 2. Third-party imports
// 3. Local imports (absolute paths)
// 4. Types (import type)`,
        },
        {
          type: 'tip',
          content:
            'En önemli kural: "Derived state useState ile tutulmaz." Eğer bir değer başka state\'lerden hesaplanabiliyorsa, direkt hesaplayın. Gereksiz useState + useEffect = bug kaynağı.',
        },
      ],
    },
  ],
}

export const testingSection: Section = {
  id: 'testing-patterns',
  title: '6. Test Yazma Stratejileri',
  description: 'React component\'leri ve hook\'lar için test yazma yaklaşımları ve best practices.',
  level: 'expert',
  lessons: [
    {
      id: 'testing-philosophy',
      title: 'Test Piramidi ve React Testing',
      blocks: [
        {
          type: 'code',
          title: 'Test Stratejisi',
          language: 'text',
          content: `React Test Piramidi:

         /\\
        /  \\
       / E2E \\          ← Cypress/Playwright (az ama kritik akışlar)
      /________\\
     /          \\
    / Integration \\     ← React Testing Library (çoğu test burası)
   /______________\\
  /                \\
 /    Unit Tests    \\   ← Vitest (utils, hooks, pure functions)
/____________________\\

Kural: "Test implementation değil, behavior test edin."

❌ YANLIŞ: "setCount çağrıldı mı?"
✅ DOĞRU:  "Butona tıklayınca sayaç 1 arttı mı?"

❌ YANLIŞ: "useState 5 kez çağrıldı mı?"
✅ DOĞRU:  "Form submit edilince success mesajı göründü mü?"`,
        },
        {
          type: 'code',
          title: 'Component Test Örnekleri',
          language: 'tsx',
          content: `import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import {describe, it, expect, vi} from 'vitest'

// 1. Basit render testi
describe('UserCard', () => {
  it('should display user name and email', () => {
    render(<UserCard name="Ali" email="ali@mail.com" />)

    expect(screen.getByText('Ali')).toBeInTheDocument()
    expect(screen.getByText('ali@mail.com')).toBeInTheDocument()
  })
})

// 2. Event handler testi
describe('Counter', () => {
  it('should increment on button click', () => {
    render(<Counter />)

    const button = screen.getByRole('button', {name: /artır/i})
    fireEvent.click(button)
    fireEvent.click(button)

    expect(screen.getByText('Sayaç: 2')).toBeInTheDocument()
  })
})

// 3. Async testi (API çağrısı)
describe('UserList', () => {
  it('should load and display users', async () => {
    // Mock API
    vi.spyOn(api, 'getUsers').mockResolvedValue([
      {id: 1, name: 'Ali'},
      {id: 2, name: 'Veli'},
    ])

    render(
      <QueryClientProvider client={queryClient}>
        <UserList />
      </QueryClientProvider>
    )

    // Loading state
    expect(screen.getByText('Yükleniyor...')).toBeInTheDocument()

    // Data loaded
    await waitFor(() => {
      expect(screen.getByText('Ali')).toBeInTheDocument()
      expect(screen.getByText('Veli')).toBeInTheDocument()
    })
  })
})

// 4. Custom hook testi
import {renderHook, act} from '@testing-library/react'

describe('useToggle', () => {
  it('should toggle value', () => {
    const {result} = renderHook(() => useToggle(false))

    expect(result.current.value).toBe(false)

    act(() => result.current.toggle())
    expect(result.current.value).toBe(true)

    act(() => result.current.toggle())
    expect(result.current.value).toBe(false)
  })
})`,
        },
        {
          type: 'tip',
          content:
            'getByRole > getByText > getByTestId sırasıyla tercih edin. Role-based query\'ler accessibility\'yi de test eder. data-testid son çaredir.',
        },
      ],
    },
  ],
}

export const reactProfessionalSections: Section[] = [
  compoundComponentsSection,
  renderPropsHocSection,
  performanceSection,
  typescriptReactSection,
  architectureSection,
  testingSection,
]
