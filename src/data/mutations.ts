import type {Section} from '../components/GuideSection'

export const mutationsSection: Section = {
  id: 'mutations',
  title: '3. Mutations - Veri Değiştirme',
  description:
    'useMutation ile POST, PUT, DELETE işlemlerini ve invalidation mekanizmasını öğrenin.',
  level: 'intermediate',
  lessons: [
    {
      id: 'use-mutation-basics',
      title: 'useMutation Temelleri',
      blocks: [
        {
          type: 'text',
          content:
            'useMutation, sunucuda veri oluşturma, güncelleme ve silme işlemleri için kullanılır. useQuery\'den farklı olarak otomatik çalışmaz - siz tetiklersiniz. mutate() veya mutateAsync() ile çağırırsınız.',
        },
        {
          type: 'code',
          title: 'Temel useMutation Kullanımı',
          language: 'tsx',
          content: `import {useMutation} from '@tanstack/react-query'

function CreateUserForm() {
  const mutation = useMutation({
    mutationFn: (newUser: CreateUserDto) =>
      api.post('/users', newUser),
  })

  const handleSubmit = (data: CreateUserDto) => {
    mutation.mutate(data) // Fire and forget
  }

  return (
    <form onSubmit={handleSubmit}>
      {mutation.isPending && <span>Kaydediliyor...</span>}
      {mutation.isError && <span>Hata: {mutation.error.message}</span>}
      {mutation.isSuccess && <span>Başarılı!</span>}
      {/* form fields */}
    </form>
  )
}`,
        },
        {
          type: 'code',
          title: 'mutate vs mutateAsync',
          language: 'tsx',
          content: `// mutate - Callback based (önerilen)
mutation.mutate(data, {
  onSuccess: (result) => {
    console.log('Başarılı:', result)
  },
  onError: (error) => {
    console.log('Hata:', error)
  },
  onSettled: () => {
    console.log('Bitti (başarılı veya hata)')
  },
})

// mutateAsync - Promise based (try/catch kullanımı)
const handleSubmit = async (data: CreateUserDto) => {
  try {
    const result = await mutation.mutateAsync(data)
    console.log('Başarılı:', result)
  } catch (error) {
    console.log('Hata:', error)
  }
}`,
        },
        {
          type: 'tip',
          content:
            'mutate kullanırken hata yönetimi callback\'ler ile yapılır. mutateAsync kullanırken try/catch ile yapılır. Çoğu durumda mutate yeterlidir ve daha güvenlidir (unhandled rejection riski yok).',
        },
      ],
    },
    {
      id: 'mutation-callbacks',
      title: 'Mutation Callbacks (onSuccess, onError, onSettled)',
      blocks: [
        {
          type: 'text',
          content:
            'Callback\'ler iki yerde tanımlanabilir: useMutation tanımında (global) ve mutate() çağrısında (per-call). İkisi birlikte çalışır - önce global, sonra per-call çalışır.',
        },
        {
          type: 'code',
          title: 'Global vs Per-Call Callbacks',
          language: 'tsx',
          content: `const mutation = useMutation({
  mutationFn: createUser,

  // Global callbacks - her mutate çağrısında çalışır
  onSuccess: (data) => {
    // Cache invalidation burada yapılır
    queryClient.invalidateQueries({queryKey: ['users']})
    toast.success('Kullanıcı oluşturuldu')
  },
  onError: (error) => {
    toast.error('Hata: ' + error.message)
  },
  onSettled: () => {
    // Başarılı veya hatalı, her durumda çalışır
    // Temizlik işlemleri
  },
})

// Per-call callback - sadece bu çağrıda çalışır
mutation.mutate(data, {
  onSuccess: () => {
    // Dialog kapat, form resetle vb.
    closeDialog()
    form.reset()
  },
})`,
        },
        {
          type: 'warning',
          content:
            'Global onSuccess\'te cache invalidation yapın. Per-call onSuccess\'te UI işlemleri (dialog kapat, navigate et) yapın. Bu ayrım kodunuzu temiz tutar.',
        },
      ],
    },
    {
      id: 'invalidation',
      title: 'Query Invalidation - Cache Yenileme',
      blocks: [
        {
          type: 'text',
          content:
            'Mutation sonrası eski veriyi yenilemek için invalidateQueries kullanılır. Bu, ilgili sorguları "stale" olarak işaretler ve aktif olanları otomatik yeniden çeker.',
        },
        {
          type: 'code',
          title: 'invalidateQueries Kullanımı',
          language: 'tsx',
          content: `import {useQueryClient} from '@tanstack/react-query'

function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // 1. Tam eşleşme - sadece ['users'] key'ini invalidate et
      queryClient.invalidateQueries({queryKey: ['users']})

      // 2. Prefix eşleşme - ['users', ...] ile başlayan hepsini
      queryClient.invalidateQueries({queryKey: ['users']})
      // Bu şunları da invalidate eder:
      // ['users', 1]
      // ['users', {page: 1}]
      // ['users', 1, 'posts']

      // 3. exact: true - SADECE tam eşleşen key'i
      queryClient.invalidateQueries({
        queryKey: ['users'],
        exact: true,
      })
      // Sadece ['users'] invalidate olur, ['users', 1] olmaz

      // 4. Birden fazla key invalidate etme
      await Promise.all([
        queryClient.invalidateQueries({queryKey: ['users']}),
        queryClient.invalidateQueries({queryKey: ['stats']}),
      ])
    },
  })
}`,
        },
        {
          type: 'code',
          title: 'Bu Projede Invalidation Pattern\'i (Custom Hook)',
          language: 'tsx',
          content: `// hooks/use-users.ts
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {createUser, updateUser, deleteUser} from '../api/users'
import {toast} from 'sonner'

export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
      toast.success('Kullanıcı başarıyla oluşturuldu')
    },
    onError: () => {
      toast.error('Kullanıcı oluşturulurken hata oluştu')
    },
  })
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({id, data}: {id: number; data: UpdateUserDto}) =>
      updateUser(id, data),
    onSuccess: (_data, variables) => {
      // Hem listeyi hem detayı invalidate et
      queryClient.invalidateQueries({queryKey: ['users']})
      queryClient.invalidateQueries({queryKey: ['users', variables.id]})
      toast.success('Kullanıcı güncellendi')
    },
  })
}

export const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
      toast.success('Kullanıcı silindi')
    },
  })
}`,
        },
        {
          type: 'tip',
          content:
            'Her CRUD işlemi için ayrı bir custom hook yazın. Bu hook\'lar mutation + invalidation + toast mesajlarını birleştirir. Component\'ler sadece hook\'u çağırır.',
        },
      ],
    },
    {
      id: 'setQueryData',
      title: 'setQueryData - Cache\'i Manuel Güncelleme',
      blocks: [
        {
          type: 'text',
          content:
            'Bazen invalidation yerine cache\'i direkt güncellemek istersiniz. setQueryData ile cache\'e yeni veri yazabilirsiniz. Bu, ek bir network isteği yapmadan UI\'ı anında günceller.',
        },
        {
          type: 'code',
          title: 'setQueryData Kullanımı',
          language: 'tsx',
          content: `const queryClient = useQueryClient()

// Mutation sonrası cache'i güncelleme
useMutation({
  mutationFn: updateUser,
  onSuccess: (updatedUser) => {
    // 1. Detay cache'ini güncelle
    queryClient.setQueryData(
      ['users', updatedUser.id],
      updatedUser,
    )

    // 2. Liste cache'ini güncelle (updater function)
    queryClient.setQueryData(['users'], (oldData: User[] | undefined) => {
      if (!oldData) return [updatedUser]
      return oldData.map(user =>
        user.id === updatedUser.id ? updatedUser : user,
      )
    })
  },
})

// Cache'den veri okuma
const cachedUser = queryClient.getQueryData(['users', 5])`,
        },
        {
          type: 'warning',
          content:
            'setQueryData kullanırken dikkatli olun. Sunucu ve cache arasında tutarsızlık oluşabilir. Çoğu durumda invalidateQueries daha güvenlidir.',
        },
      ],
    },
  ],
}
