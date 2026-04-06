import type {Section} from '../components/GuideSection'

export const queryAdvancedSection: Section = {
  id: 'query-advanced',
  title: '2. queryOptions Pattern',
  description:
    'Bu projede kullanılan queryOptions pattern\'ini öğrenin. Query tanımlarını merkezi hale getirir.',
  level: 'beginner',
  lessons: [
    {
      id: 'query-options-intro',
      title: 'queryOptions Nedir?',
      blocks: [
        {
          type: 'text',
          content:
            'queryOptions, queryKey ve queryFn\'i tek bir yerde tanımlamanızı sağlar. Bu sayede aynı sorguyu birden fazla yerde kullanırken key/fn tutarsızlığı yaşamazsınız. Bu projede tüm sorgular bu pattern ile yazılmaktadır.',
        },
        {
          type: 'code',
          title: 'queryOptions Tanımlama',
          language: 'tsx',
          content: `import {queryOptions} from '@tanstack/react-query'
import {getUsers, getUserById} from '../api/users'

// Tüm kullanıcıları getiren query option
export const usersQueryOptions = () =>
  queryOptions({
    queryKey: ['users'],
    queryFn: getUsers,
  })

// Tek kullanıcıyı getiren query option (parametreli)
export const userDetailQueryOptions = (userId: number) =>
  queryOptions({
    queryKey: ['users', userId],
    queryFn: () => getUserById(userId),
  })`,
        },
        {
          type: 'code',
          title: 'queryOptions Kullanımı - Component İçinde',
          language: 'tsx',
          content: `import {useQuery} from '@tanstack/react-query'
import {usersQueryOptions, userDetailQueryOptions} from '../queries/users'

function UserList() {
  // queryOptions spread edilir
  const {data, isLoading} = useQuery(usersQueryOptions())
  // ...
}

function UserDetail({userId}: {userId: number}) {
  const {data: user} = useQuery(userDetailQueryOptions(userId))
  // ...
}`,
        },
        {
          type: 'tip',
          content:
            'queryOptions ile tanımlanan sorgular, hem useQuery\'de hem useSuspenseQuery\'de hem de queryClient.prefetchQuery\'de kullanılabilir. Tek bir kaynak, her yerde geçerli!',
        },
      ],
    },
    {
      id: 'query-options-project',
      title: 'Bu Projede queryOptions Kullanımı',
      blocks: [
        {
          type: 'text',
          content:
            'Projede her feature modülünün queries/ klasöründe queryOptions tanımları bulunur. API fonksiyonları api/ klasöründe, tipler types/ klasöründedir.',
        },
        {
          type: 'code',
          title: 'Gerçek Proje Yapısı',
          language: 'text',
          content: `src/features/users/
  ├── api/
  │   └── users.ts          ← API çağrıları (fetch/axios)
  ├── queries/
  │   └── users.ts          ← queryOptions tanımları
  ├── types/
  │   └── user-types.ts     ← TypeScript tipleri
  ├── hooks/
  │   └── use-users.ts      ← Custom hooks (mutation + invalidation)
  ├── components/
  │   └── UserTable.tsx      ← UI componentleri
  └── schemas/
      └── user-schema.ts    ← Zod validation`,
        },
        {
          type: 'code',
          title: 'API Katmanı (api/users.ts)',
          language: 'tsx',
          content: `import {api} from '~/common/lib/api-client'
import type {User, UsersResponse} from '../types/user-types'

export const getUsers = async (params?: UserFilters): Promise<UsersResponse> => {
  const response = await api.get('/users', {params})
  return response.data
}

export const getUserById = async (id: number): Promise<User> => {
  const response = await api.get(\`/users/\${id}\`)
  return response.data
}`,
        },
        {
          type: 'code',
          title: 'Query Tanımları (queries/users.ts)',
          language: 'tsx',
          content: `import {queryOptions} from '@tanstack/react-query'
import {getUsers, getUserById} from '../api/users'
import type {UserFilters} from '../types/user-types'

export const usersQueryOptions = (filters?: UserFilters) =>
  queryOptions({
    queryKey: ['users', filters],
    queryFn: () => getUsers(filters),
  })

export const userDetailQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ['users', id],
    queryFn: () => getUserById(id),
    enabled: id > 0, // id geçerli değilse sorguyu çalıştırma
  })`,
        },
      ],
    },
    {
      id: 'enabled-option',
      title: 'enabled - Koşullu Sorgular',
      blocks: [
        {
          type: 'text',
          content:
            'enabled seçeneği, sorgunun otomatik olarak çalışıp çalışmayacağını kontrol eder. false ise sorgu çalışmaz. Bağımlı sorgular veya kullanıcı etkileşimi gerektiren durumlar için kullanılır.',
        },
        {
          type: 'code',
          title: 'enabled Kullanım Örnekleri',
          language: 'tsx',
          content: `// 1. Parametre hazır olana kadar bekleme
const {data: user} = useQuery({
  queryKey: ['users', userId],
  queryFn: () => getUserById(userId),
  enabled: !!userId, // userId varsa çalış
})

// 2. Bağımlı sorgular (dependent queries)
const {data: user} = useQuery(userDetailQueryOptions(userId))
const {data: posts} = useQuery({
  queryKey: ['users', userId, 'posts'],
  queryFn: () => getUserPosts(userId),
  enabled: !!user, // Önce user yüklenmeli
})

// 3. Toggle ile açıp kapama
const [showDetails, setShowDetails] = useState(false)
const {data} = useQuery({
  queryKey: ['details'],
  queryFn: fetchDetails,
  enabled: showDetails,
})`,
        },
        {
          type: 'warning',
          content:
            'enabled: false olan bir sorgu hiç çalışmaz. isLoading true olmaz ama isPending true olur (data yok). Bu farkı UI\'da handle etmeyi unutmayın.',
        },
      ],
    },
  ],
}
