import type {Section} from '../components/GuideSection'

export const advancedPatternsSection: Section = {
  id: 'advanced-patterns',
  title: '4. İleri Seviye Query Patterns',
  description:
    'Pagination, infinite query, prefetching, optimistic update ve select gibi ileri konular.',
  level: 'advanced',
  lessons: [
    {
      id: 'pagination',
      title: 'Sayfalama (Pagination)',
      blocks: [
        {
          type: 'text',
          content:
            'Sayfalı veri çekerken queryKey\'e page parametresini ekleyin. keepPreviousData (placeholderData) ile sayfa geçişlerinde önceki veriyi göstermeye devam edebilirsiniz.',
        },
        {
          type: 'code',
          title: 'Pagination Örneği',
          language: 'tsx',
          content: `import {useQuery, keepPreviousData} from '@tanstack/react-query'
import {useState} from 'react'

function PaginatedUsers() {
  const [page, setPage] = useState(1)

  const {data, isLoading, isPlaceholderData} = useQuery({
    queryKey: ['users', {page}],
    queryFn: () => getUsers({page, pageSize: 10}),
    placeholderData: keepPreviousData, // Sayfa değişirken eski veriyi göster
  })

  return (
    <div>
      {/* isPlaceholderData true ise eski veri gösteriliyor */}
      <div className={isPlaceholderData ? 'opacity-50' : ''}>
        {data?.items.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}>
          Önceki
        </button>
        <span>Sayfa {page} / {data?.totalPages}</span>
        <button
          onClick={() => setPage(p => p + 1)}
          disabled={isPlaceholderData || !data?.hasNextPage}>
          Sonraki
        </button>
      </div>
    </div>
  )
}`,
        },
        {
          type: 'tip',
          content:
            'keepPreviousData (v5\'te placeholderData: keepPreviousData) sayfa geçişlerinde loading spinner göstermek yerine eski veriyi gösterir. UX açısından çok daha iyi bir deneyim sunar.',
        },
      ],
    },
    {
      id: 'infinite-queries',
      title: 'Infinite Queries (Sonsuz Scroll)',
      blocks: [
        {
          type: 'text',
          content:
            'useInfiniteQuery, "daha fazla yükle" veya sonsuz scroll pattern\'i için kullanılır. Her sayfa önceki sayfanın devamıdır.',
        },
        {
          type: 'code',
          title: 'useInfiniteQuery Örneği',
          language: 'tsx',
          content: `import {useInfiniteQuery} from '@tanstack/react-query'

function InfiniteUserList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['users', 'infinite'],
    queryFn: ({pageParam}) => getUsers({page: pageParam, pageSize: 20}),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // Son sayfadaysak undefined döndür (daha fazla yok)
      if (lastPage.page >= lastPage.totalPages) return undefined
      return lastPage.page + 1
    },
  })

  // data.pages bir array'dir, her eleman bir sayfa
  const allUsers = data?.pages.flatMap(page => page.items) ?? []

  return (
    <div>
      {allUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}

      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}>
        {isFetchingNextPage
          ? 'Yükleniyor...'
          : hasNextPage
            ? 'Daha Fazla Yükle'
            : 'Hepsi Bu Kadar'}
      </button>
    </div>
  )
}`,
        },
        {
          type: 'warning',
          content:
            'getNextPageParam undefined döndürürse hasNextPage false olur. null veya 0 döndürürseniz yine "sayfa var" demek olur - dikkatli olun.',
        },
      ],
    },
    {
      id: 'prefetching',
      title: 'Prefetching - Önceden Veri Yükleme',
      blocks: [
        {
          type: 'text',
          content:
            'Kullanıcı bir sayfaya veya linke gitmeden önce veriyi arka planda yükleyebilirsiniz. Bu, navigasyon anında veri hazır olur ve kullanıcı loading görmez.',
        },
        {
          type: 'code',
          title: 'Prefetch Yöntemleri',
          language: 'tsx',
          content: `import {useQueryClient} from '@tanstack/react-query'

// 1. Hover'da prefetch
function UserListItem({user}: {user: User}) {
  const queryClient = useQueryClient()

  const handleMouseEnter = () => {
    queryClient.prefetchQuery(userDetailQueryOptions(user.id))
  }

  return (
    <Link
      to="/users/$userId"
      params={{userId: user.id}}
      onMouseEnter={handleMouseEnter}>
      {user.name}
    </Link>
  )
}

// 2. Route loader'da prefetch (TanStack Router ile)
export const createUserDetailRoute = (parent: AnyRoute) =>
  createRoute({
    getParentRoute: () => parent,
    path: '/users/$userId',
    loader: ({context, params}) => {
      // Sayfa yüklenmeden önce veriyi çek
      context.queryClient.ensureQueryData(
        userDetailQueryOptions(Number(params.userId))
      )
    },
    component: lazyRouteComponent(() => import('./UserDetailPage')),
  })

// 3. Manuel prefetch
queryClient.prefetchQuery({
  queryKey: ['users', {page: 2}],
  queryFn: () => getUsers({page: 2}),
})`,
        },
        {
          type: 'tip',
          content:
            'ensureQueryData vs prefetchQuery: ensureQueryData cache\'de veri varsa tekrar çekmez. prefetchQuery her zaman çeker (staleTime\'a bağlı). Route loader\'larda ensureQueryData tercih edilir.',
        },
      ],
    },
    {
      id: 'optimistic-updates',
      title: 'Optimistic Updates',
      blocks: [
        {
          type: 'text',
          content:
            'Optimistic update, sunucu yanıt vermeden önce UI\'ı günceller. Kullanıcı anında sonucu görür. Hata olursa eski haline döner (rollback). Deneyimi çok iyileştirir ama dikkatli kullanılmalıdır.',
        },
        {
          type: 'code',
          title: 'Optimistic Update Tam Örnek',
          language: 'tsx',
          content: `export const useToggleUserStatus = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({id, status}: {id: number; status: string}) =>
      updateUserStatus(id, status),

    // Mutation başlamadan ÖNCE çalışır
    onMutate: async ({id, status}) => {
      // 1. Devam eden query'leri iptal et (race condition önleme)
      await queryClient.cancelQueries({queryKey: ['users']})

      // 2. Mevcut cache'i kaydet (rollback için)
      const previousUsers = queryClient.getQueryData(['users'])

      // 3. Cache'i optimistic olarak güncelle
      queryClient.setQueryData(['users'], (old: User[]) =>
        old.map(user =>
          user.id === id ? {...user, status} : user,
        ),
      )

      // 4. Rollback context'i döndür
      return {previousUsers}
    },

    // Hata olursa rollback yap
    onError: (_error, _variables, context) => {
      if (context?.previousUsers) {
        queryClient.setQueryData(['users'], context.previousUsers)
      }
      toast.error('İşlem başarısız oldu')
    },

    // Her durumda (başarılı/hata) gerçek veriyi getir
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
    },
  })
}`,
        },
        {
          type: 'warning',
          content:
            'Optimistic update, basit toggle/like işlemleri için idealdir. Karmaşık formlar veya birden fazla entity etkileyen işlemlerde invalidation daha güvenlidir.',
        },
      ],
    },
    {
      id: 'select-option',
      title: 'select - Veriyi Dönüştürme',
      blocks: [
        {
          type: 'text',
          content:
            'select seçeneği ile query\'den dönen veriyi component\'e vermeden önce dönüştürebilirsiniz. Sadece component\'in ihtiyacı olan kısımları seçer ve gereksiz re-render\'ları önler.',
        },
        {
          type: 'code',
          title: 'select Kullanımı',
          language: 'tsx',
          content: `// 1. Basit field seçimi
const {data: userNames} = useQuery({
  queryKey: ['users'],
  queryFn: getUsers,
  select: (data) => data.map(user => user.name), // Sadece isimler
})

// 2. Filtreleme
const {data: activeUsers} = useQuery({
  queryKey: ['users'],
  queryFn: getUsers,
  select: (data) => data.filter(user => user.status === 'active'),
})

// 3. Dönüşüm
const {data: userCount} = useQuery({
  queryKey: ['users'],
  queryFn: getUsers,
  select: (data) => data.length,
})

// 4. useCallback ile memoize (re-render optimizasyonu)
const selectActiveUsers = useCallback(
  (data: User[]) => data.filter(u => u.status === 'active'),
  [],
)
const {data} = useQuery({
  queryKey: ['users'],
  queryFn: getUsers,
  select: selectActiveUsers,
})`,
        },
        {
          type: 'tip',
          content:
            'select sadece render sırasında çalışır, cache\'deki veriyi değiştirmez. Aynı cache\'den farklı component\'ler farklı select ile farklı parçalar alabilir.',
        },
      ],
    },
  ],
}
