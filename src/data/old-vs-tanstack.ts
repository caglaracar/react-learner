import type {Section} from '../components/GuideSection'

export const fetchComparisonSection: Section = {
  id: 'fetch-comparison',
  title: '1. Veri Çekme: useEffect vs TanStack Query',
  description:
    'Aynı işi eski yöntemle ve TanStack Query ile nasıl yaparsınız? Farkı görün.',
  level: 'beginner',
  lessons: [
    {
      id: 'basic-fetch-old',
      title: 'Basit Veri Çekme Karşılaştırması',
      blocks: [
        {
          type: 'text',
          content:
            'En temel senaryo: Bir API\'den kullanıcı listesi çekmek. Eski yöntem 20+ satır, TanStack Query ile 3 satır.',
        },
        {
          type: 'code',
          title: '❌ Eski Yöntem: useState + useEffect',
          language: 'tsx',
          content: `function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    const fetchUsers = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch('/api/users')
        if (!res.ok) throw new Error('Hata oluştu')
        const data = await res.json()
        if (!cancelled) setUsers(data)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchUsers()
    return () => { cancelled = true }
  }, [])

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}

// Sorunlar:
// 😩 3 ayrı useState (data, loading, error)
// 😩 cancelled flag ile race condition yönetimi
// 😩 Cache YOK - her mount'ta yeniden fetch
// 😩 Başka component aynı veriyi isterse tekrar fetch
// 😩 Window focus'ta yenileme YOK
// 😩 Retry mekanizması YOK
// 😩 Stale data kontrolü YOK`,
        },
        {
          type: 'code',
          title: '✅ TanStack Query ile',
          language: 'tsx',
          content: `function UserList() {
  const {data: users, isLoading, isError, error} = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json()),
  })

  if (isLoading) return <Spinner />
  if (isError) return <ErrorMessage message={error.message} />

  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}

// Otomatik olarak:
// ✅ Loading, error, success state yönetimi
// ✅ Akıllı cache - aynı veri tekrar fetch edilmez
// ✅ Race condition koruması
// ✅ Window focus'ta otomatik yenileme
// ✅ Retry mekanizması (varsayılan 3 kez)
// ✅ Stale/fresh data kontrolü
// ✅ Garbage collection
// ✅ Background refetch
// ✅ DevTools ile debug`,
        },
      ],
    },
    {
      id: 'params-fetch-old',
      title: 'Parametreli Veri Çekme',
      blocks: [
        {
          type: 'text',
          content:
            'Kullanıcı ID\'si ile detay çekme gibi parametreli sorgularda eski yöntem çok daha karmaşıklaşır.',
        },
        {
          type: 'code',
          title: '❌ Eski Yöntem: Parametreli Fetch',
          language: 'tsx',
          content: `function UserDetail({userId}: {userId: number}) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetch(\`/api/users/\${userId}\`)
      .then(res => {
        if (!res.ok) throw new Error('Kullanıcı bulunamadı')
        return res.json()
      })
      .then(data => {
        if (!cancelled) setUser(data)
      })
      .catch(err => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [userId]) // userId değiştiğinde tekrar çek

  // userId hızla değişirse (liste gezme) race condition!
  // cancelled flag bunu kısmen çözer ama karmaşık
}`,
        },
        {
          type: 'code',
          title: '✅ TanStack Query ile',
          language: 'tsx',
          content: `function UserDetail({userId}: {userId: number}) {
  const {data: user, isLoading, isError} = useQuery({
    queryKey: ['users', userId], // userId değişince otomatik yeni fetch
    queryFn: () => getUserById(userId),
    enabled: userId > 0, // Geçersiz id ise çalışma
  })

  // userId hızla değişse bile:
  // - Önceki request otomatik iptal edilir
  // - Cache'deki veri anında gösterilir
  // - Arka planda yeni veri çekilir
}`,
        },
      ],
    },
  ],
}

export const mutationComparisonSection: Section = {
  id: 'mutation-comparison',
  title: '2. Veri Değiştirme: Manuel vs useMutation',
  description: 'POST/PUT/DELETE işlemlerinde eski yöntem ve TanStack Query farkı.',
  level: 'intermediate',
  lessons: [
    {
      id: 'create-old',
      title: 'Veri Oluşturma (POST) Karşılaştırması',
      blocks: [
        {
          type: 'code',
          title: '❌ Eski Yöntem: Manuel POST + State Yönetimi',
          language: 'tsx',
          content: `function CreateUserForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (data: CreateUserDto) => {
    try {
      setLoading(true)
      setError(null)

      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Oluşturma başarısız')

      // 😩 Listeyi güncellemek için ne yaparız?
      // Seçenek 1: Sayfayı yenile (kötü UX)
      // window.location.reload()

      // Seçenek 2: Parent'a callback ile bildir
      // onSuccess?.()

      // Seçenek 3: Global state'i güncelle (Redux dispatch)
      // dispatch(addUser(newUser))

      toast.success('Kullanıcı oluşturuldu')
    } catch (err) {
      setError(err.message)
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      <button disabled={loading}>
        {loading ? 'Kaydediliyor...' : 'Kaydet'}
      </button>
    </form>
  )
}`,
        },
        {
          type: 'code',
          title: '✅ TanStack Query: useMutation + Otomatik Invalidation',
          language: 'tsx',
          content: `// Hook: Tek seferde tanımla, her yerde kullan
export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Kullanıcı listesi otomatik yenilenir!
      queryClient.invalidateQueries({queryKey: ['users']})
      toast.success('Kullanıcı oluşturuldu')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}

// Component: Temiz ve minimal
function CreateUserForm({onClose}: {onClose: () => void}) {
  const {mutate, isPending} = useCreateUser()

  const handleSubmit = (data: CreateUserDto) => {
    mutate(data, {
      onSuccess: () => onClose(), // Dialog kapat
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <button disabled={isPending}>
        {isPending ? 'Kaydediliyor...' : 'Kaydet'}
      </button>
    </form>
  )
}

// Avantajlar:
// ✅ invalidateQueries → liste otomatik güncellenir
// ✅ Loading/error state otomatik
// ✅ Hook yeniden kullanılabilir
// ✅ Global callback (invalidation) + per-call callback (UI)`,
        },
      ],
    },
    {
      id: 'delete-comparison',
      title: 'Silme İşlemi + Liste Güncelleme',
      blocks: [
        {
          type: 'code',
          title: '❌ Eski Yöntem: Delete + Manuel State Güncelleme',
          language: 'tsx',
          content: `function UserList() {
  const [users, setUsers] = useState<User[]>([])

  // Veri çek...
  useEffect(() => { /* fetch logic */ }, [])

  const handleDelete = async (id: number) => {
    try {
      await fetch(\`/api/users/\${id}\`, {method: 'DELETE'})

      // Manuel olarak listeden çıkar
      setUsers(prev => prev.filter(u => u.id !== id))

      // Ama başka component'lerde de bu kullanıcı varsa?
      // Oralar hâlâ eski veriyi gösterir! 😩

      // Ya da tüm listeyi tekrar çek
      // await fetchUsers() // Gereksiz network isteği

      toast.success('Silindi')
    } catch (err) {
      toast.error('Silme başarısız')
      // Hata olursa listeyi geri al? Çok karmaşık...
    }
  }

  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>
          {u.name}
          <button onClick={() => handleDelete(u.id)}>Sil</button>
        </li>
      ))}
    </ul>
  )
}`,
        },
        {
          type: 'code',
          title: '✅ TanStack Query: Tüm Cache Otomatik Güncellenir',
          language: 'tsx',
          content: `// Hook
export const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      // ['users'] ile başlayan TÜM query'ler yenilenir
      // Liste, detay, istatistik - hepsi güncellenir!
      queryClient.invalidateQueries({queryKey: ['users']})
      toast.success('Kullanıcı silindi')
    },
  })
}

// Component
function UserList() {
  const {data: users} = useQuery(usersQueryOptions())
  const {mutate: deleteUser} = useDeleteUser()

  return (
    <ul>
      {users?.map(u => (
        <li key={u.id}>
          {u.name}
          <button onClick={() => deleteUser(u.id)}>Sil</button>
        </li>
      ))}
    </ul>
  )
}

// Başka bir component de aynı veriyi kullanıyorsa
// o da otomatik güncellenir - hiçbir şey yapmanıza gerek yok!`,
        },
        {
          type: 'tip',
          content:
            'TanStack Query\'nin en büyük gücü: invalidateQueries ile TÜM ilgili component\'ler otomatik güncellenir. Redux\'ta dispatch, prop drilling veya context ile yapmanız gereken şeyi Query otomatik yapar.',
        },
      ],
    },
  ],
}

export const cacheComparisonSection: Section = {
  id: 'cache-comparison',
  title: '3. Cache & State Yönetimi Karşılaştırması',
  description:
    'Redux/Context ile server state yönetimi vs TanStack Query. Neden server state ayrı yönetilmeli?',
  level: 'advanced',
  lessons: [
    {
      id: 'redux-vs-query',
      title: 'Redux/Context vs TanStack Query',
      blocks: [
        {
          type: 'text',
          content:
            'Eskiden hem client state hem server state için Redux kullanılırdı. Bu, gereksiz karmaşıklık yaratır. TanStack Query server state\'i, Zustand/Redux client state\'i yönetmelidir.',
        },
        {
          type: 'code',
          title: '❌ Redux ile Server State (Eski Yöntem)',
          language: 'tsx',
          content: `// actions.ts
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export const fetchUsers = () => async (dispatch) => {
  dispatch({type: FETCH_USERS_REQUEST})
  try {
    const res = await api.get('/users')
    dispatch({type: FETCH_USERS_SUCCESS, payload: res.data})
  } catch (error) {
    dispatch({type: FETCH_USERS_FAILURE, payload: error.message})
  }
}

// reducer.ts
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {...state, loading: true, error: null}
    case FETCH_USERS_SUCCESS:
      return {...state, loading: false, data: action.payload}
    case FETCH_USERS_FAILURE:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}

// component.tsx
function UserList() {
  const dispatch = useDispatch()
  const {data, loading, error} = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  // 6 dosya, 50+ satır boilerplate
  // Cache? Yok. Stale control? Yok. Auto-refetch? Yok.
}`,
        },
        {
          type: 'code',
          title: '✅ Modern Yaklaşım: TanStack Query + Zustand',
          language: 'tsx',
          content: `// Server state → TanStack Query (3 satır!)
function UserList() {
  const {data, isLoading} = useQuery(usersQueryOptions())
  // Cache ✅ Stale control ✅ Auto-refetch ✅ Retry ✅
}

// Client state → Zustand (UI state, theme, sidebar vb.)
import {create} from 'zustand'

const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: true,
  toggle: () => set(state => ({isOpen: !state.isOpen})),
}))

// İkisi bir arada - temiz ayrım
function App() {
  // Server state
  const {data: user} = useQuery(currentUserQueryOptions())

  // Client state
  const {isOpen, toggle} = useSidebarStore()

  return (
    <Layout sidebarOpen={isOpen} onToggle={toggle}>
      <UserProfile user={user} />
    </Layout>
  )
}

// Kural: "Bu veri sunucudan mı geliyor?" → TanStack Query
//         "Bu veri sadece UI'da mı?" → Zustand/useState`,
        },
        {
          type: 'warning',
          content:
            'Server state\'i Redux\'ta tutmayın! Redux, sadece karmaşık client-side state için kullanılmalıdır (ve çoğu projede Zustand daha basittir). API verisi = TanStack Query, UI state = Zustand/useState.',
        },
      ],
    },
    {
      id: 'stale-while-revalidate',
      title: 'Stale-While-Revalidate Stratejisi',
      blocks: [
        {
          type: 'text',
          content:
            'TanStack Query\'nin en güçlü özelliği stale-while-revalidate pattern\'idir. Eski veriyi hemen gösterir, arka planda yenisini çeker. Kullanıcı asla loading görmez.',
        },
        {
          type: 'code',
          title: 'Stale-While-Revalidate Akışı',
          language: 'text',
          content: `Senaryo: Kullanıcı /users sayfasına gidiyor

━━━ ESKİ YÖNTEM ━━━
1. Sayfa açılır → Loading spinner gösterilir
2. API çağrısı yapılır (1-2 saniye)
3. Veri gelir → Liste gösterilir
4. Kullanıcı başka sayfaya gider ve geri döner
5. YİNE Loading spinner → YİNE API çağrısı → YİNE bekleme

━━━ TANSTACK QUERY (staleTime: 5dk) ━━━
1. İlk ziyaret: Loading → API → Liste (normal)
2. 5 dakika içinde tekrar gelirse:
   → Cache'den ANİNDA gösterir (0ms)
   → Arka planda yeni veri çeker
   → Fark varsa sessizce günceller
3. 5 dakika sonra gelirse:
   → Cache'deki eski veriyi hemen gösterir
   → Arka planda yenisini çeker
   → Güncellenmiş veriyi gösterir

Kullanıcı deneyimi:
Eski yöntem:  [⏳ Loading...] → [📋 Data]  (her seferinde)
TanStack:     [📋 Data] (anında!) → [📋 Updated] (sessizce)`,
        },
        {
          type: 'tip',
          content:
            'staleTime ve gcTime ayarlarını projenize göre yapılandırın. Sık değişen veri (chat) → düşük staleTime. Nadir değişen veri (ayarlar) → yüksek staleTime.',
        },
      ],
    },
  ],
}

export const formComparisonSection: Section = {
  id: 'form-comparison',
  title: '4. Form Submit: Eski vs Modern',
  description: 'Form submit + validasyon + API çağrısı + hata yönetimi tam karşılaştırma.',
  level: 'intermediate',
  lessons: [
    {
      id: 'form-full-comparison',
      title: 'Tam Form Akışı Karşılaştırması',
      blocks: [
        {
          type: 'code',
          title: '❌ Eski Yöntem: Her Şey Manuel',
          language: 'tsx',
          content: `function CreateUserForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!name.trim()) newErrors.name = 'İsim zorunlu'
    if (!email.includes('@')) newErrors.email = 'Geçersiz email'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    try {
      setLoading(true)
      setServerError('')
      await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({name, email}),
      })
      // Başarılı... şimdi ne olacak?
      // Parent'ı bilgilendir? Listeyi yenile?
    } catch (err) {
      setServerError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // 5 useState, manuel validasyon, karmaşık submit
  // Her yeni field için: +1 useState, +1 validation rule
}`,
        },
        {
          type: 'code',
          title: '✅ Modern: React Hook Form + Zod + TanStack Query',
          language: 'tsx',
          content: `// Schema (validation kuralları tek yerde)
const createUserSchema = z.object({
  name: z.string().min(1, 'İsim zorunlu'),
  email: z.string().email('Geçersiz email'),
})
type CreateUserDto = z.infer<typeof createUserSchema>

// Hook (mutation tek yerde)
const useCreateUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
      toast.success('Kullanıcı oluşturuldu')
    },
  })
}

// Component (temiz ve minimal)
function CreateUserForm({onClose}: {onClose: () => void}) {
  const form = useForm<CreateUserDto>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {name: '', email: ''},
  })

  const {mutate, isPending} = useCreateUser()

  const onSubmit = form.handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => {
        form.reset()
        onClose()
      },
    })
  })

  return (
    <form onSubmit={onSubmit}>
      <Input {...form.register('name')} />
      {form.formState.errors.name && (
        <p>{form.formState.errors.name.message}</p>
      )}

      <Input {...form.register('email')} />
      {form.formState.errors.email && (
        <p>{form.formState.errors.email.message}</p>
      )}

      <Button disabled={isPending}>
        {isPending ? 'Kaydediliyor...' : 'Kaydet'}
      </Button>
    </form>
  )
}

// Avantajlar:
// ✅ Zod: Type-safe validasyon, schema'dan tip üretme
// ✅ React Hook Form: Performanslı, uncontrolled
// ✅ useMutation: Loading, error, cache invalidation
// ✅ Separation of concerns: Schema / Hook / Component ayrı`,
        },
        {
          type: 'tip',
          content:
            'Bu projedeki pattern: Zod schema → TypeScript type → React Hook Form → useMutation → invalidation. Bu zincir her CRUD formunda aynı şekilde kullanılır.',
        },
      ],
    },
  ],
}

export const oldVsTanstackSections: Section[] = [
  fetchComparisonSection,
  mutationComparisonSection,
  cacheComparisonSection,
  formComparisonSection,
]
