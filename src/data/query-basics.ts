import type {Section} from '../components/GuideSection'

export const queryBasicsSection: Section = {
  id: 'query-basics',
  title: '1. TanStack Query Temelleri',
  description: 'useQuery, queryKey, queryFn kavramlarını sıfırdan öğrenin.',
  level: 'beginner',
  lessons: [
    {
      id: 'what-is-tanstack-query',
      title: 'TanStack Query Nedir?',
      blocks: [
        {
          type: 'text',
          content:
            'TanStack Query (eski adıyla React Query), sunucu state yönetimi için kullanılan bir kütüphanedir. Veri çekme, cache\'leme, senkronizasyon ve güncelleme işlemlerini otomatik olarak yönetir. Redux veya Zustand gibi client-state kütüphanelerinden farklıdır çünkü server-state\'e odaklanır.',
        },
        {
          type: 'text',
          content:
            'Server state ile client state arasındaki fark: Client state (theme, sidebar açık/kapalı) tamamen senin kontrolündedir. Server state (kullanıcı listesi, ürünler) başka birisi tarafından değiştirilebilir, asenkrondir ve "stale" (bayat) olabilir.',
        },
        {
          type: 'code',
          title: 'QueryClientProvider Kurulumu',
          language: 'tsx',
          content: `import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 dakika
      gcTime: 1000 * 60 * 10,   // 10 dakika (eski adı: cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  )
}`,
        },
        {
          type: 'tip',
          content:
            'staleTime: Verinin ne kadar süre "taze" sayılacağı. gcTime: Verinin cache\'den ne zaman temizleneceği. staleTime < gcTime olmalıdır.',
        },
      ],
    },
    {
      id: 'use-query-basics',
      title: 'useQuery - İlk Sorgu',
      blocks: [
        {
          type: 'text',
          content:
            'useQuery, veri çekmek için kullanılan temel hook\'tur. İki zorunlu parametre alır: queryKey (cache anahtarı) ve queryFn (veriyi çeken fonksiyon).',
        },
        {
          type: 'code',
          title: 'Temel useQuery Kullanımı',
          language: 'tsx',
          content: `import {useQuery} from '@tanstack/react-query'

function UserList() {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['users'],        // Cache anahtarı - benzersiz olmalı
    queryFn: () =>              // Veriyi çeken async fonksiyon
      fetch('/api/users').then(res => res.json()),
  })

  if (isLoading) return <div>Yükleniyor...</div>
  if (isError) return <div>Hata: {error.message}</div>

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}`,
        },
        {
          type: 'text',
          content:
            'useQuery birçok faydalı state döndürür: isPending (ilk yükleme), isLoading (isPending + isFetching), isFetching (arka planda yenileme), isSuccess, isError, data, error, status...',
        },
        {
          type: 'code',
          title: 'useQuery\'den Dönen Tüm Önemli Değerler',
          language: 'tsx',
          content: `const {
  data,           // Başarılı response verisi
  error,          // Hata objesi
  status,         // 'pending' | 'error' | 'success'
  fetchStatus,    // 'idle' | 'fetching' | 'paused'
  isPending,      // status === 'pending' (henüz data yok)
  isLoading,      // isPending && isFetching (ilk yükleme)
  isFetching,     // Arka planda veri çekiliyor
  isError,        // status === 'error'
  isSuccess,      // status === 'success'
  isStale,        // Veri "bayat" mı?
  refetch,        // Manuel olarak tekrar çek
  dataUpdatedAt,  // Son güncelleme zamanı (timestamp)
} = useQuery({...})`,
        },
        {
          type: 'warning',
          content:
            'isPending vs isLoading farkı: isPending sadece data\'nın henüz olmadığını söyler. isLoading ise isPending + isFetching birleşimidir (gerçekten şu an yükleniyor). Cache\'den veri geliyorsa isPending false olur.',
        },
      ],
    },
    {
      id: 'query-keys',
      title: 'Query Keys - Cache Anahtarları',
      blocks: [
        {
          type: 'text',
          content:
            'queryKey, TanStack Query\'nin en önemli konseptidir. Her sorgu benzersiz bir key ile tanımlanır. Key değiştiğinde yeni bir sorgu tetiklenir. Key\'ler array formatındadır ve serializable olmalıdır.',
        },
        {
          type: 'code',
          title: 'Query Key Örnekleri',
          language: 'tsx',
          content: `// Basit key
useQuery({queryKey: ['users'], ...})

// Parametreli key - ID ile
useQuery({queryKey: ['users', userId], ...})

// Filtreli key - Obje ile
useQuery({queryKey: ['users', {status: 'active', page: 1}], ...})

// Nested key
useQuery({queryKey: ['users', userId, 'posts'], ...})

// Key hiyerarşisi önemli!
// ['users']                    → Tüm kullanıcılar
// ['users', 1]                 → ID=1 olan kullanıcı
// ['users', {status: 'active'}] → Aktif kullanıcılar
// ['users', 1, 'posts']        → Kullanıcı 1'in postları`,
        },
        {
          type: 'tip',
          content:
            'Query key\'leri bir fabrika fonksiyonu ile yönetmek best practice\'dir. Bu projede biz queryOptions kullanıyoruz - bir sonraki derste göreceksiniz.',
        },
        {
          type: 'code',
          title: 'Query Key Factory Pattern',
          language: 'tsx',
          content: `// query-keys.ts
export const userKeys = {
  all:    ['users'] as const,
  lists:  () => [...userKeys.all, 'list'] as const,
  list:   (filters: UserFilters) => [...userKeys.lists(), filters] as const,
  details:() => [...userKeys.all, 'detail'] as const,
  detail: (id: number) => [...userKeys.details(), id] as const,
}

// Kullanım
useQuery({queryKey: userKeys.detail(5), ...})
useQuery({queryKey: userKeys.list({page: 1, status: 'active'}), ...})

// Invalidation'da süper güçlü:
queryClient.invalidateQueries({queryKey: userKeys.all})
// → Tüm user query'lerini invalidate eder`,
        },
      ],
    },
    {
      id: 'query-fn',
      title: 'Query Functions - Veri Çekme',
      blocks: [
        {
          type: 'text',
          content:
            'queryFn, Promise döndüren herhangi bir fonksiyondur. fetch, axios, ya da kendi API client\'ınız olabilir. Hata durumunda throw etmelidir - resolve edilen her şey başarılı sayılır.',
        },
        {
          type: 'code',
          title: 'Farklı queryFn Örnekleri',
          language: 'tsx',
          content: `// 1. Düz fetch ile
useQuery({
  queryKey: ['users'],
  queryFn: async () => {
    const res = await fetch('/api/users')
    if (!res.ok) throw new Error('Hata oluştu')
    return res.json()
  },
})

// 2. Axios ile
useQuery({
  queryKey: ['users'],
  queryFn: () => axios.get('/api/users').then(res => res.data),
})

// 3. Kendi API katmanınız ile (bu projede böyle!)
useQuery({
  queryKey: ['users'],
  queryFn: () => getUsers(), // API fonksiyonu
})

// 4. queryKey'den parametre alma (context)
useQuery({
  queryKey: ['users', userId],
  queryFn: ({queryKey}) => {
    const [, id] = queryKey
    return getUserById(id)
  },
})`,
        },
        {
          type: 'warning',
          content:
            'fetch API varsayılan olarak 4xx/5xx hatalarda reject etmez! response.ok kontrolü yapmalısınız. Axios ise otomatik olarak reject eder.',
        },
      ],
    },
  ],
}
