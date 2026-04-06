import type {Section} from '../components/GuideSection'

export const expertPatternsSection: Section = {
  id: 'expert-patterns',
  title: '6. Uzman Seviye Patterns',
  description:
    'Suspense query, error boundary, query cancellation, retry stratejileri ve gerçek dünya pattern\'leri.',
  level: 'expert',
  lessons: [
    {
      id: 'suspense-queries',
      title: 'useSuspenseQuery - Suspense ile Veri Çekme',
      blocks: [
        {
          type: 'text',
          content:
            'useSuspenseQuery, React Suspense ile entegre çalışır. isPending/isLoading kontrolleri gerekmez - data her zaman tanımlıdır. Loading state\'i üst seviyedeki Suspense boundary tarafından yönetilir.',
        },
        {
          type: 'code',
          title: 'useSuspenseQuery Kullanımı',
          language: 'tsx',
          content: `import {useSuspenseQuery} from '@tanstack/react-query'
import {Suspense} from 'react'

// Component - data her zaman tanımlı!
function UserList() {
  const {data} = useSuspenseQuery(usersQueryOptions())
  // data: User[] (undefined değil, kesin User[])

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

// Parent - Suspense boundary
function UsersPage() {
  return (
    <Suspense fallback={<Loading />}>
      <UserList />
    </Suspense>
  )
}

// ErrorBoundary ile birlikte
function UsersPage() {
  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <Suspense fallback={<Loading />}>
        <UserList />
      </Suspense>
    </ErrorBoundary>
  )
}`,
        },
        {
          type: 'warning',
          content:
            'useSuspenseQuery\'de enabled seçeneği YOKTUR. Koşullu sorgular için useQuery kullanın. Ayrıca route loader ile birlikte kullanırsanız waterfall\'u engellersiniz.',
        },
      ],
    },
    {
      id: 'query-cancellation',
      title: 'Query Cancellation (AbortSignal)',
      blocks: [
        {
          type: 'text',
          content:
            'TanStack Query, unmount olan component\'lerin query\'lerini otomatik iptal edebilir. queryFn\'e AbortSignal geçirerek bunu etkinleştirebilirsiniz.',
        },
        {
          type: 'code',
          title: 'AbortSignal ile Query İptali',
          language: 'tsx',
          content: `// queryFn'e signal parametresi geçirilir
useQuery({
  queryKey: ['users', searchTerm],
  queryFn: ({signal}) =>
    fetch('/api/users?q=' + searchTerm, {signal})
      .then(res => res.json()),
})

// Axios ile
useQuery({
  queryKey: ['users', searchTerm],
  queryFn: ({signal}) =>
    axios.get('/api/users', {
      params: {q: searchTerm},
      signal,
    }).then(res => res.data),
})

// Manuel iptal
const queryClient = useQueryClient()
queryClient.cancelQueries({queryKey: ['users']})`,
        },
        {
          type: 'tip',
          content:
            'Özellikle arama (search) gibi hızla değişen query\'lerde AbortSignal kullanmak önemlidir. Eski request\'ler iptal edilir ve sadece son request\'in sonucu alınır.',
        },
      ],
    },
    {
      id: 'retry-strategies',
      title: 'Retry Stratejileri',
      blocks: [
        {
          type: 'text',
          content:
            'TanStack Query varsayılan olarak 3 kez retry yapar (exponential backoff ile). Bunu özelleştirebilirsiniz.',
        },
        {
          type: 'code',
          title: 'Retry Konfigürasyonu',
          language: 'tsx',
          content: `// 1. Global ayar
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,                    // 1 kez dene
      retryDelay: (attemptIndex) =>
        Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
    },
  },
})

// 2. Per-query ayar
useQuery({
  queryKey: ['critical-data'],
  queryFn: fetchCriticalData,
  retry: 5,                       // 5 kez dene
  retryDelay: 1000,               // Her seferinde 1 saniye bekle
})

// 3. Koşullu retry
useQuery({
  queryKey: ['data'],
  queryFn: fetchData,
  retry: (failureCount, error) => {
    // 404'te retry yapma
    if (error.status === 404) return false
    // Max 3 kez
    return failureCount < 3
  },
})

// 4. Mutation'da retry (varsayılan: 0)
useMutation({
  mutationFn: createUser,
  retry: 2, // Mutation'lar default retry yapmaz, açıkça belirtin
})`,
        },
      ],
    },
    {
      id: 'parallel-dependent',
      title: 'Paralel ve Bağımlı Sorgular',
      blocks: [
        {
          type: 'text',
          content:
            'Birden fazla sorguyu paralel çalıştırmak veya birbirine bağımlı sıralı sorgular yazmak çok yaygındır.',
        },
        {
          type: 'code',
          title: 'Paralel Sorgular',
          language: 'tsx',
          content: `// 1. Aynı component'te birden fazla useQuery (otomatik paralel)
function Dashboard() {
  const users = useQuery(usersQueryOptions())
  const stats = useQuery(statsQueryOptions())
  const notifications = useQuery(notificationsQueryOptions())
  // Üçü de aynı anda çalışır!
}

// 2. useQueries - Dinamik sayıda paralel sorgu
const userIds = [1, 2, 3, 4, 5]
const userQueries = useQueries({
  queries: userIds.map(id => ({
    queryKey: ['users', id],
    queryFn: () => getUserById(id),
  })),
})
// userQueries: UseQueryResult[] dizisi

// 3. combine ile birleştirme
const userQueries = useQueries({
  queries: userIds.map(id => userDetailQueryOptions(id)),
  combine: (results) => ({
    data: results.map(r => r.data).filter(Boolean),
    isLoading: results.some(r => r.isLoading),
    isError: results.some(r => r.isError),
  }),
})`,
        },
        {
          type: 'code',
          title: 'Bağımlı (Dependent) Sorgular',
          language: 'tsx',
          content: `function UserPosts({userId}: {userId: number}) {
  // 1. Önce kullanıcıyı çek
  const {data: user} = useQuery(userDetailQueryOptions(userId))

  // 2. Kullanıcı yüklendikten sonra postlarını çek
  const {data: posts} = useQuery({
    queryKey: ['users', userId, 'posts'],
    queryFn: () => getUserPosts(userId),
    enabled: !!user, // user yüklenene kadar bekle
  })

  // 3. Postlar yüklendikten sonra yorumları çek
  const {data: comments} = useQuery({
    queryKey: ['posts', posts?.[0]?.id, 'comments'],
    queryFn: () => getPostComments(posts![0].id),
    enabled: !!posts?.length, // postlar yüklenene kadar bekle
  })
}`,
        },
        {
          type: 'warning',
          content:
            'Bağımlı sorgular waterfall yaratır. Mümkünse paralel çalıştırmayı tercih edin. Eğer veriler gerçekten birbirine bağlıysa, backend\'de tek bir endpoint yapın.',
        },
      ],
    },
    {
      id: 'real-world-patterns',
      title: 'Gerçek Dünya Pattern\'leri',
      blocks: [
        {
          type: 'text',
          content:
            'Bu projede sık kullanılan pattern\'ler ve best practice\'ler.',
        },
        {
          type: 'code',
          title: 'CRUD Dialog Pattern (Bu Projede)',
          language: 'tsx',
          content: `// 1. Custom Hook - CRUD işlemleri
export const useCreateFaq = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createFaq,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['faq']})
      toast.success('SSS oluşturuldu')
    },
  })
}

// 2. Dialog Component
function CreateFaqDialog({open, onOpenChange}) {
  const form = useForm({resolver: zodResolver(faqSchema)})
  const {mutate, isPending} = useCreateFaq()

  const handleSubmit = form.handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => {
        onOpenChange(false)   // Dialog kapat
        form.reset()          // Form resetle
      },
    })
  })

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form onSubmit={handleSubmit}>
        {/* form fields */}
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Kaydediliyor...' : 'Kaydet'}
        </Button>
      </form>
    </Dialog>
  )
}

// 3. Liste Sayfası
function FaqPage() {
  const {data, isLoading} = useQuery(faqQueryOptions())

  if (isLoading) return <PageLoader />

  return (
    <>
      <DataTable data={data} columns={columns} />
      <CreateFaqDialog />
    </>
  )
}`,
        },
        {
          type: 'code',
          title: 'Debounced Search Pattern',
          language: 'tsx',
          content: `import {useDebouncedValue} from 'use-debounce'

function UserSearch() {
  const [search, setSearch] = useState('')
  const [debouncedSearch] = useDebouncedValue(search, 300)

  const {data, isFetching} = useQuery({
    queryKey: ['users', {search: debouncedSearch}],
    queryFn: () => searchUsers(debouncedSearch),
    enabled: debouncedSearch.length > 2, // En az 3 karakter
    placeholderData: keepPreviousData,
  })

  return (
    <div>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Ara..."
      />
      {isFetching && <Spinner />}
      {data?.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  )
}`,
        },
        {
          type: 'tip',
          content:
            'Pattern özetleri: 1) queryOptions → query tanımlarını merkezileştir. 2) Custom hooks → mutation + invalidation birleştir. 3) enabled → koşullu sorgular. 4) placeholderData → geçiş sırasında önceki veriyi göster. 5) select → render için veri dönüştür.',
        },
      ],
    },
  ],
}
