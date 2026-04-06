import { useState } from 'react'

// Child component — props alır
function UserCard({ name, role, isActive, onToggle }: {
  name: string
  role: string
  isActive: boolean
  onToggle: () => void
}) {
  return (
    <div className={`p-3 rounded-lg border transition-all duration-300 ${
      isActive ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-zinc-900/50 border-zinc-800'
    }`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium text-zinc-200">{name}</div>
          <div className="text-xs text-zinc-500">{role}</div>
        </div>
        <button
          onClick={onToggle}
          className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
            isActive
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
          }`}
        >
          {isActive ? '🟢 Aktif' : '🔴 Pasif'}
        </button>
      </div>
    </div>
  )
}

export function PropsDemo() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Çağlar', role: 'Frontend Dev', isActive: true },
    { id: 2, name: 'Ali', role: 'Backend Dev', isActive: false },
    { id: 3, name: 'Ayşe', role: 'Designer', isActive: true },
  ])

  const toggleUser = (id: number) => {
    setUsers(prev =>
      prev.map(u => (u.id === id ? { ...u, isActive: !u.isActive } : u))
    )
  }

  const activeCount = users.filter(u => u.isActive).length

  return (
    <div className="space-y-4">
      {/* Props Flow Visualization */}
      <div className="bg-zinc-900/70 rounded-lg border border-zinc-800 p-3">
        <div className="text-xs font-medium text-violet-400 mb-2">Parent → Child Veri Akışı</div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2 py-1 rounded bg-violet-500/20 text-violet-300">Parent</span>
          <span className="text-zinc-600">──props──→</span>
          <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-300">UserCard</span>
          <span className="text-zinc-600">──callback──→</span>
          <span className="px-2 py-1 rounded bg-violet-500/20 text-violet-300">Parent</span>
        </div>
        <div className="text-xs text-zinc-600 mt-2">
          Veri aşağı akar (props), olaylar yukarı akar (callback)
        </div>
      </div>

      {/* User Cards */}
      <div className="space-y-2">
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            role={user.role}
            isActive={user.isActive}
            onToggle={() => toggleUser(user.id)}
          />
        ))}
      </div>

      {/* Props Inspector */}
      <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono space-y-1">
        <div className="text-zinc-500">// Her UserCard'a geçilen props:</div>
        {users.map(u => (
          <div key={u.id}>
            <span className="text-blue-400">&lt;UserCard</span>
            <span className="text-zinc-400"> name=</span>
            <span className="text-amber-400">"{u.name}"</span>
            <span className="text-zinc-400"> isActive=</span>
            <span className={u.isActive ? 'text-emerald-400' : 'text-red-400'}>
              {'{' + String(u.isActive) + '}'}
            </span>
            <span className="text-blue-400"> /&gt;</span>
          </div>
        ))}
        <div className="text-zinc-500 mt-1">
          // Aktif: {activeCount}/{users.length} — her tıklamada parent state değişir, props güncellenir
        </div>
      </div>
    </div>
  )
}
