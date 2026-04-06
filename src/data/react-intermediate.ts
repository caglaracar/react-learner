import type {Section} from '../components/GuideSection'
import {useMemoCallbackSection, lazyLoadingSection, customHooksSection} from './react-fundamentals'

export const contextApiSection: Section = {
  id: 'context-api',
  title: '4. Context API - Global State',
  description:
    'Prop drilling olmadan component ağacı boyunca veri paylaşımı. Ne zaman Context, ne zaman Zustand?',
  level: 'intermediate',
  lessons: [
    {
      id: 'context-basics',
      title: 'Context Oluşturma ve Kullanma',
      blocks: [
        {
          type: 'text',
          content:
            'Context API, parent-child zincirinde her seviyeye prop geçmek yerine (prop drilling), veriyi doğrudan ihtiyaç duyan component\'e ulaştırır. Theme, dil, kullanıcı bilgisi gibi "global" veriler için idealdir.',
        },
        {
          type: 'code',
          title: 'Context Oluşturma',
          language: 'tsx',
          content: `import {createContext, useContext, useState} from 'react'

// 1. Context oluştur + tip tanımı
interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

// 2. Custom hook ile güvenli erişim
function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

// 3. Provider component
function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

// 4. Kullanım - herhangi bir derinlikteki component
function Header() {
  const {theme, toggleTheme} = useTheme()

  return (
    <header className={theme === 'dark' ? 'bg-black' : 'bg-white'}>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  )
}

// 5. App'te sarma
function App() {
  return (
    <ThemeProvider>
      <Header />    {/* prop geçmeden theme'e erişir */}
      <MainContent />
    </ThemeProvider>
  )
}`,
        },
        {
          type: 'warning',
          content:
            'Context değiştiğinde, o Context\'i kullanan TÜM component\'ler re-render olur! Bu yüzden sık değişen veriler (form input, mouse position) için Context kullanmayın. Bunlar için Zustand veya useState tercih edin.',
        },
      ],
    },
    {
      id: 'context-patterns',
      title: 'Context Best Practices',
      blocks: [
        {
          type: 'code',
          title: 'Context\'i Bölme (Split Context)',
          language: 'tsx',
          content: `// ❌ KÖTÜ - Her şey tek Context'te
// theme değişince user bilgisi kullanan component'ler de re-render olur!
const AppContext = createContext({
  theme: 'dark',
  user: null,
  language: 'tr',
  notifications: [],
})

// ✅ İYİ - Ayrı Context'ler
const ThemeContext = createContext(...)    // Tema değişince sadece tema kullananlar
const UserContext = createContext(...)     // User değişince sadece user kullananlar
const I18nContext = createContext(...)     // Dil değişince sadece dil kullananlar

// Her biri bağımsız re-render tetikler`,
        },
        {
          type: 'code',
          title: 'Context vs Zustand vs Props Karar Ağacı',
          language: 'text',
          content: `Veri sadece 1-2 seviye derine mi gidiyor?
  → ✅ Props kullan (en basit)

Veri nadiren değişiyor mu? (theme, user, locale)
  → ✅ Context API

Veri sık değişiyor mu? (form state, counters, UI state)
  → ✅ Zustand (veya useState)

Server'dan gelen veri mi? (API response)
  → ✅ TanStack Query (kesinlikle Context değil!)

Birden fazla component aynı state'i okuyor/yazıyor mu?
  → ✅ Zustand

Bu projede:
  - Server state → TanStack Query
  - Auth/Session → Zustand (useSessionStore)
  - UI state    → useState (component-local)
  - Theme/i18n  → Context (nadiren değişir)`,
        },
        {
          type: 'tip',
          content:
            'Bu projede Context API doğrudan kullanılmıyor — server state için TanStack Query, client state için Zustand tercih ediliyor. Bu modern yaklaşımdır.',
        },
      ],
    },
  ],
}

export const useReducerSection: Section = {
  id: 'use-reducer',
  title: '5. useReducer - Karmaşık State',
  description:
    'Birden fazla birbiriyle ilişkili state değişkenini tek bir yerde yönetin. useState\'in güçlü versiyonu.',
  level: 'intermediate',
  lessons: [
    {
      id: 'useReducer-basics',
      title: 'useReducer Temelleri',
      blocks: [
        {
          type: 'text',
          content:
            'useReducer, karmaşık state mantığını bir reducer fonksiyonuna taşır. State geçişleri açık ve öngörülebilir olur. Birden fazla birbiriyle ilişkili state değişkeni varsa useState yerine useReducer kullanın.',
        },
        {
          type: 'code',
          title: 'useReducer vs useState Karşılaştırması',
          language: 'tsx',
          content: `// ❌ useState ile karmaşık form state
function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    setError(null)
    try {
      await submitForm({name, email})
      setSubmitted(true)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }
  // 5 ayrı useState, birbirine bağlı geçişler...
}

// ✅ useReducer ile aynı mantık
interface FormState {
  name: string
  email: string
  loading: boolean
  error: string | null
  submitted: boolean
}

type FormAction =
  | {type: 'SET_FIELD'; field: string; value: string}
  | {type: 'SUBMIT_START'}
  | {type: 'SUBMIT_SUCCESS'}
  | {type: 'SUBMIT_ERROR'; error: string}
  | {type: 'RESET'}

const initialState: FormState = {
  name: '', email: '', loading: false, error: null, submitted: false,
}

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return {...state, [action.field]: action.value}
    case 'SUBMIT_START':
      return {...state, loading: true, error: null}
    case 'SUBMIT_SUCCESS':
      return {...state, loading: false, submitted: true}
    case 'SUBMIT_ERROR':
      return {...state, loading: false, error: action.error}
    case 'RESET':
      return initialState
    default:
      return state
  }
}

function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const handleSubmit = async () => {
    dispatch({type: 'SUBMIT_START'})
    try {
      await submitForm({name: state.name, email: state.email})
      dispatch({type: 'SUBMIT_SUCCESS'})
    } catch (e) {
      dispatch({type: 'SUBMIT_ERROR', error: e.message})
    }
  }

  // State geçişleri açık, öngörülebilir, test edilebilir
}`,
        },
        {
          type: 'tip',
          content:
            'Kural: 2-3 bağımsız state → useState. 3+ birbiriyle ilişkili state → useReducer. Ancak bu projede form state için React Hook Form kullanıyoruz, bu yüzden useReducer\'a nadiren ihtiyaç duyulur.',
        },
      ],
    },
  ],
}

export const errorBoundarySection: Section = {
  id: 'error-boundaries',
  title: '6. Error Boundaries',
  description:
    'Component ağacında oluşan JavaScript hatalarını yakalayın ve graceful fallback gösterin.',
  level: 'intermediate',
  lessons: [
    {
      id: 'error-boundary-usage',
      title: 'Error Boundary Kullanımı',
      blocks: [
        {
          type: 'text',
          content:
            'Error Boundary, child component\'lerin render sırasında fırlattığı hataları yakalar ve tüm uygulamanın çökmesini engeller. Bunun yerine bir fallback UI gösterir. React 19\'da hâlâ class component olarak yazılır (hook alternatifi yok).',
        },
        {
          type: 'code',
          title: 'Error Boundary Implementasyonu',
          language: 'tsx',
          content: `import {Component, type ErrorInfo, type ReactNode} from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {hasError: false, error: null}
  }

  static getDerivedStateFromError(error: Error): State {
    // Hata yakalandığında state'i güncelle
    return {hasError: true, error}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Hata raporlama servisi (Sentry vb.)
    console.error('Error caught by boundary:', error, errorInfo)
    // Sentry.captureException(error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-8 text-center">
          <h2>Bir hata oluştu</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({hasError: false, error: null})}>
            Tekrar Dene
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

// Kullanım
function App() {
  return (
    <ErrorBoundary fallback={<div>Widget yüklenemedi</div>}>
      <RiskyWidget />
    </ErrorBoundary>
  )
}`,
        },
        {
          type: 'code',
          title: 'Bu Projede: TanStack Router Error Component',
          language: 'tsx',
          content: `// Bu projede Error Boundary yerine TanStack Router'ın
// errorComponent özelliği kullanılır:

const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />,
  errorComponent: GlobalError,   // ← Route seviyesinde hata yakalama
  notFoundComponent: GlobalNotFound,
})

// Her route kendi errorComponent'ini tanımlayabilir:
createRoute({
  path: '/users',
  component: UsersPage,
  errorComponent: ({error}) => (
    <div>
      <h2>Kullanıcılar yüklenemedi</h2>
      <p>{error.message}</p>
    </div>
  ),
})

// TanStack Query hataları da benzer şekilde:
const {data, isError, error} = useQuery({...})
if (isError) return <ErrorMessage error={error} />`,
        },
        {
          type: 'warning',
          content:
            'Error Boundary şunları YAKALAMAZ: Event handler hataları (try/catch kullanın), async hatalar (useEffect içi), server-side rendering hataları. Sadece render sırasındaki hataları yakalar.',
        },
      ],
    },
  ],
}

export const portalsSection: Section = {
  id: 'portals',
  title: '7. Portals & ForwardRef',
  description:
    'Component\'leri DOM ağacının farklı noktalarına render edin. Ref\'leri child component\'lere iletin.',
  level: 'intermediate',
  lessons: [
    {
      id: 'portals-basics',
      title: 'React Portals',
      blocks: [
        {
          type: 'text',
          content:
            'Portal, bir component\'in çıktısını DOM ağacında farklı bir noktaya render etmeyi sağlar. Modal, tooltip, dropdown gibi overlay element\'ler için kullanılır. React event bubbling\'i Portal\'da da çalışır.',
        },
        {
          type: 'code',
          title: 'Portal Kullanımı',
          language: 'tsx',
          content: `import {createPortal} from 'react-dom'

function Modal({isOpen, onClose, children}: ModalProps) {
  if (!isOpen) return null

  // Component React ağacında parent'ın içindedir
  // AMA DOM'da document.body'nin altında render olur
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* Content */}
      <div className="relative bg-white rounded-lg p-6 z-10">
        {children}
      </div>
    </div>,
    document.body, // DOM'da nereye render edilsin?
  )
}

// Neden Portal?
// 1. CSS overflow:hidden parent'ı modal'ı kesmez
// 2. z-index sorunları yaşanmaz
// 3. CSS stacking context dışına çıkar
// 4. React event'leri hâlâ parent'a bubble olur`,
        },
        {
          type: 'tip',
          content:
            'Bu projede shadcn/ui Dialog, Sheet, Popover gibi component\'ler zaten Radix UI Portal\'ları kullanır. Manuel Portal yazmaya nadiren ihtiyaç duyulur.',
        },
      ],
    },
    {
      id: 'forward-ref',
      title: 'forwardRef ile Ref İletme',
      blocks: [
        {
          type: 'text',
          content:
            'forwardRef, parent component\'in child component içindeki bir DOM elementine ref ile erişmesini sağlar. Özellikle reusable UI component\'leri (Input, Button vb.) için gereklidir.',
        },
        {
          type: 'code',
          title: 'forwardRef Kullanımı',
          language: 'tsx',
          content: `import {forwardRef, useRef} from 'react'

// Custom Input component - ref'i iletir
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({label, error, ...props}, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input
          ref={ref}  // Parent'tan gelen ref buraya bağlanır
          className={error ? 'border-red-500' : 'border-gray-300'}
          {...props}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    )
  },
)
Input.displayName = 'Input'

// Parent'ta kullanım
function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    emailRef.current?.focus() // Custom Input içindeki native input'a focus
  }, [])

  return (
    <form>
      <Input ref={emailRef} label="Email" type="email" />
      <Input label="Şifre" type="password" />
    </form>
  )
}

// React 19'da forwardRef yerine direkt ref prop:
function Input({label, ref, ...props}: InputProps & {ref?: React.Ref<HTMLInputElement>}) {
  return <input ref={ref} {...props} />
}`,
        },
      ],
    },
  ],
}

export const controlledUncontrolledSection: Section = {
  id: 'controlled-uncontrolled',
  title: '8. Controlled vs Uncontrolled Components',
  description: 'Form elementlerinin iki farklı yönetim şekli. Hangisi ne zaman kullanılır?',
  level: 'intermediate',
  lessons: [
    {
      id: 'controlled-vs-uncontrolled',
      title: 'Controlled ve Uncontrolled Farkı',
      blocks: [
        {
          type: 'code',
          title: 'Controlled Component',
          language: 'tsx',
          content: `// CONTROLLED: React state ile yönetilir
// Her tuş vuruşunda state güncellenir → re-render olur
function ControlledForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // value + onChange = controlled
  return (
    <form>
      <input
        value={name}           // React state'den okunur
        onChange={e => setName(e.target.value)} // Her değişiklikte state güncellenir
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <p>Merhaba, {name}!</p> {/* Anlık güncellenir */}
    </form>
  )
}

// Avantajlar:
// ✅ Her an güncel değere erişim
// ✅ Input validasyonu anında yapılabilir
// ✅ Koşullu logic (ör: input uzunluk limiti)
// Dezavantajlar:
// ❌ Her tuşta re-render (çok form alanı = performans)`,
        },
        {
          type: 'code',
          title: 'Uncontrolled Component',
          language: 'tsx',
          content: `// UNCONTROLLED: DOM kendisi yönetir, sadece submit'te değer alınır
function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Değer sadece submit anında okunur
    const name = nameRef.current?.value
    const email = emailRef.current?.value
    console.log({name, email})
  }

  // ref + defaultValue = uncontrolled
  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} defaultValue="" />
      <input ref={emailRef} defaultValue="" />
      <button type="submit">Gönder</button>
    </form>
  )
}

// Avantajlar:
// ✅ Daha az re-render (performans)
// ✅ Basit formlar için yeterli
// Dezavantajlar:
// ❌ Anlık değere erişim zor
// ❌ Validasyon karmaşık`,
        },
        {
          type: 'code',
          title: 'React Hook Form: İkisinin En İyisi',
          language: 'tsx',
          content: `// React Hook Form = Uncontrolled performansı + Controlled esnekliği
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(1, 'İsim zorunlu'),
  email: z.string().email('Geçersiz email'),
})

function SmartForm() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(schema),
  })

  // register = ref tabanlı (uncontrolled) ama
  // validasyon, dirty tracking, error handling var (controlled gibi)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Gönder</button>
    </form>
  )
}

// Bu projede HER form React Hook Form + Zod ile yapılır
// Ne controlled ne uncontrolled — en iyi iki dünya!`,
        },
        {
          type: 'tip',
          content:
            'Bu projede form yönetimi için HER ZAMAN React Hook Form + Zod kullanılır. Manuel controlled/uncontrolled form yazmayın.',
        },
      ],
    },
  ],
}

export const reactIntermediateAllSections: Section[] = [
  useMemoCallbackSection,
  lazyLoadingSection,
  customHooksSection,
  contextApiSection,
  useReducerSection,
  errorBoundarySection,
  portalsSection,
  controlledUncontrolledSection,
]
