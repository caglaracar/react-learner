import type {Section} from '../components/GuideSection'

import introData from './content/react-basics/00-react-intro.json'
import jsxData from './content/react-basics/01-jsx.json'
import propsData from './content/react-basics/02-props.json'
import conditionalData from './content/react-basics/03-conditional-rendering.json'
import eventData from './content/react-basics/04-event-handling.json'
import useStateData from './content/react-basics/05-usestate.json'
import useEffectData from './content/react-basics/06-useeffect.json'
import useRefData from './content/react-basics/07-useref.json'

const reactIntroSection = introData as Section
const jsxBasicsSection = jsxData as Section
const propsChildrenSection = propsData as Section
const conditionalRenderingSection = conditionalData as Section
const eventHandlingSection = eventData as Section
const useStateSection = useStateData as Section
const useEffectSection = useEffectData as Section
const useRefSection = useRefData as Section

export const reactFundamentalsSections: Section[] = [
  reactIntroSection,
  jsxBasicsSection,
  propsChildrenSection,
  conditionalRenderingSection,
  eventHandlingSection,
  useStateSection,
  useEffectSection,
  useRefSection,
]

export const useMemoCallbackSection: Section = {
  id: 'memo-callback',
  title: '1. useMemo & useCallback - Performans',
  description:
    'Gereksiz hesaplamaları ve re-render\'ları önleyin. Ne zaman kullanılmalı, ne zaman kullanılmamalı.',
  level: 'intermediate',
  lessons: [
    {
      id: 'useMemo-basics',
      title: 'useMemo - Değer Memoize Etme',
      blocks: [
        {
          type: 'text',
          content:
            'useMemo, pahalı hesaplamaların sonucunu cache\'ler. Dependency\'ler değişmedikçe aynı sonucu döndürür. Her render\'da çalışan ağır işlemleri optimize eder.',
        },
        {
          type: 'code',
          title: 'useMemo Kullanımı',
          language: 'tsx',
          content: `import {useMemo} from 'react'

function UserStats({users}: {users: User[]}) {
  // ❌ Her render'da filtreleme + sıralama yapılır
  const activeUsers = users
    .filter(u => u.status === 'active')
    .sort((a, b) => a.name.localeCompare(b.name))

  // ✅ Sadece users değiştiğinde hesaplanır
  const activeUsers = useMemo(
    () => users
      .filter(u => u.status === 'active')
      .sort((a, b) => a.name.localeCompare(b.name)),
    [users],
  )

  // ✅ Birden fazla dependency
  const filteredUsers = useMemo(
    () => users.filter(u =>
      u.name.includes(search) && u.role === selectedRole
    ),
    [users, search, selectedRole],
  )

  return <UserTable data={activeUsers} />
}`,
        },
        {
          type: 'warning',
          content:
            'useMemo\'yu her yerde kullanmayın! Basit hesaplamalar için useMemo overhead\'i, hesaplamanın kendisinden daha pahalı olabilir. Sadece gerçekten ağır işlemlerde veya referans eşitliği gereken yerlerde kullanın.',
        },
      ],
    },
    {
      id: 'useCallback-basics',
      title: 'useCallback - Fonksiyon Memoize Etme',
      blocks: [
        {
          type: 'text',
          content:
            'useCallback, bir fonksiyonun referansını sabitler. Dependency\'ler değişmedikçe aynı fonksiyon referansı döner. Genellikle React.memo ile sarılmış child component\'lere prop olarak geçilen fonksiyonlarda kullanılır.',
        },
        {
          type: 'code',
          title: 'useCallback Kullanımı',
          language: 'tsx',
          content: `import {useCallback, memo} from 'react'

// Child component - memo ile sarılı
const ExpensiveList = memo(({ items, onItemClick }: Props) => {
  console.log('ExpensiveList render oldu')
  return items.map(item => (
    <div key={item.id} onClick={() => onItemClick(item.id)}>
      {item.name}
    </div>
  ))
})

// Parent component
function Parent() {
  const [count, setCount] = useState(0)
  const [items] = useState(generateItems())

  // ❌ Her render'da yeni fonksiyon → ExpensiveList tekrar render olur
  const handleClick = (id: number) => {
    console.log('Clicked:', id)
  }

  // ✅ Fonksiyon referansı sabit → ExpensiveList render olmaz
  const handleClick = useCallback((id: number) => {
    console.log('Clicked:', id)
  }, []) // Dependency boş = fonksiyon hiç değişmez

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      {/* count değişince Parent render olur ama
          ExpensiveList'e geçen props aynı kalır */}
      <ExpensiveList items={items} onItemClick={handleClick} />
    </div>
  )
}`,
        },
        {
          type: 'tip',
          content:
            'useCallback = useMemo(() => fn, deps) kısaltmasıdır. useCallback(fn, deps) ile useMemo(() => fn, deps) aynı şeydir. useCallback fonksiyon için, useMemo değer için kullanılır.',
        },
      ],
    },
    {
      id: 'react-memo',
      title: 'React.memo - Component Memoize',
      blocks: [
        {
          type: 'text',
          content:
            'React.memo, component\'i sararak props değişmedikçe re-render olmasını engeller. useCallback ve useMemo ile birlikte kullanılır.',
        },
        {
          type: 'code',
          title: 'React.memo Kullanımı',
          language: 'tsx',
          content: `import {memo} from 'react'

// Basit kullanım
const UserCard = memo(({user}: {user: User}) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  )
})

// Custom comparison function ile
const UserCard = memo(
  ({user}: {user: User}) => {
    return <div>{user.name}</div>
  },
  (prevProps, nextProps) => {
    // true dönerse RE-RENDER OLMAZ
    // false dönerse RE-RENDER OLUR
    return prevProps.user.id === nextProps.user.id
      && prevProps.user.name === nextProps.user.name
  },
)

// Ne zaman kullanmalı?
// ✅ Pahalı render işlemi olan component'ler
// ✅ Sık render olan parent'ın child'ları
// ✅ Aynı props ile sık çağrılan component'ler
// ❌ Props sık değişen component'ler (faydasız)
// ❌ Basit/ucuz component'ler (overhead > fayda)`,
        },
      ],
    },
  ],
}

export const lazyLoadingSection: Section = {
  id: 'lazy-loading',
  title: '2. Lazy Loading & Code Splitting',
  description: 'Uygulamanızın başlangıç yükleme süresini dramatik şekilde azaltın.',
  level: 'intermediate',
  lessons: [
    {
      id: 'react-lazy',
      title: 'React.lazy ve Suspense',
      blocks: [
        {
          type: 'text',
          content:
            'React.lazy, component\'leri dinamik import ile yükler. Bundle\'ı küçük parçalara böler (code splitting). Kullanıcı ilgili sayfaya gittiğinde o component\'in JS\'i yüklenir.',
        },
        {
          type: 'code',
          title: 'React.lazy Kullanımı',
          language: 'tsx',
          content: `import {lazy, Suspense} from 'react'

// ❌ Normal import - ana bundle'a dahil
import HeavyChart from './HeavyChart'

// ✅ Lazy import - ayrı chunk olarak yüklenir
const HeavyChart = lazy(() => import('./HeavyChart'))

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Suspense: lazy component yüklenene kadar fallback gösterir */}
      <Suspense fallback={<div>Grafik yükleniyor...</div>}>
        <HeavyChart />
      </Suspense>
    </div>
  )
}`,
        },
        {
          type: 'code',
          title: 'TanStack Router ile Lazy Loading (Bu Projede)',
          language: 'tsx',
          content: `import {createRoute, lazyRouteComponent} from '@tanstack/react-router'

// Her sayfa otomatik olarak lazy load edilir
export const createUsersRoute = (parent: AnyRoute) =>
  createRoute({
    getParentRoute: () => parent,
    path: '/users',
    // lazyRouteComponent = React.lazy wrapper
    component: lazyRouteComponent(() => import('./UsersPage')),
  })

// Avantajlar:
// 1. Her sayfa ayrı bir JS chunk'ı olur
// 2. Kullanıcı o sayfaya gidene kadar yüklenmez
// 3. defaultPreload: 'intent' ile hover'da önceden yüklenir
// 4. Bundle boyutu dramatik şekilde küçülür`,
        },
        {
          type: 'tip',
          content:
            'Bu projede tüm route component\'leri lazyRouteComponent ile lazy load edilir. Ayrıca defaultPreload: "intent" ayarı sayesinde kullanıcı bir linke hover ettiğinde o sayfa arka planda yüklenmeye başlar.',
        },
      ],
    },
  ],
}

export const customHooksSection: Section = {
  id: 'custom-hooks',
  title: '3. Custom Hooks',
  description:
    'Tekrar eden mantığı yeniden kullanılabilir hook\'lara çıkarın. Composition over inheritance.',
  level: 'intermediate',
  lessons: [
    {
      id: 'custom-hooks-basics',
      title: 'Custom Hook Yazma',
      blocks: [
        {
          type: 'text',
          content:
            'Custom hook, "use" ile başlayan ve içinde diğer hook\'ları kullanan bir fonksiyondur. Tekrar eden state + effect mantığını tek bir yere toplar.',
        },
        {
          type: 'code',
          title: 'Custom Hook Örnekleri',
          language: 'tsx',
          content: `// 1. useToggle - Boolean state yönetimi
function useToggle(initial = false) {
  const [value, setValue] = useState(initial)

  const toggle = useCallback(() => setValue(v => !v), [])
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])

  return {value, toggle, setTrue, setFalse}
}

// Kullanım
function Modal() {
  const {value: isOpen, setTrue: open, setFalse: close} = useToggle()
  return (
    <>
      <button onClick={open}>Aç</button>
      {isOpen && <Dialog onClose={close} />}
    </>
  )
}

// 2. useDebounce - Debounce edilmiş değer
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

// Kullanım
function Search() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 300)

  // debouncedQuery sadece 300ms duraksama sonrası güncellenir
  useEffect(() => {
    if (debouncedQuery) searchAPI(debouncedQuery)
  }, [debouncedQuery])
}`,
        },
        {
          type: 'code',
          title: 'Bu Projedeki Custom Hook Pattern\'i',
          language: 'tsx',
          content: `// features/users/hooks/use-users.ts
// Mutation + invalidation + toast = tek hook

export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
      toast.success('Kullanıcı oluşturuldu')
    },
  })
}

// Component'te kullanım - çok temiz!
function UserForm() {
  const {mutate, isPending} = useCreateUser()

  const handleSubmit = (data: CreateUserDto) => {
    mutate(data, {
      onSuccess: () => closeDialog(),
    })
  }
}`,
        },
        {
          type: 'tip',
          content:
            'Custom hook\'lar test edilebilirlik, code reuse ve separation of concerns sağlar. Her feature modülünün hooks/ klasöründe domain\'e özel hook\'lar bulunmalıdır.',
        },
      ],
    },
  ],
}

export const reactIntermediateSections: Section[] = [
  useMemoCallbackSection,
  lazyLoadingSection,
  customHooksSection,
]
