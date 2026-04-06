import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ConditionalDemo() {
  const [status, setStatus] = useState<Status>('idle')
  const [showBadge, setShowBadge] = useState(true)
  const [notifCount, setNotifCount] = useState(3)

  const simulateFetch = () => {
    setStatus('loading')
    setTimeout(() => {
      const success = Math.random() > 0.3
      setStatus(success ? 'success' : 'error')
    }, 1500)
  }

  const statusConfig: Record<Status, { icon: string; text: string; color: string }> = {
    idle: { icon: '⏸', text: 'Bekleniyor...', color: 'text-zinc-400' },
    loading: { icon: '⏳', text: 'Yükleniyor...', color: 'text-amber-400' },
    success: { icon: '✅', text: 'Başarılı!', color: 'text-emerald-400' },
    error: { icon: '❌', text: 'Hata oluştu!', color: 'text-red-400' },
  }

  return (
    <div className="space-y-4">
      {/* && Operatörü Demo */}
      <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-zinc-400">{'&&'} Operatörü</span>
          <div className="flex gap-2">
            <button
              onClick={() => setShowBadge(b => !b)}
              className="px-2 py-1 rounded text-xs bg-zinc-800 text-zinc-400 hover:bg-zinc-700 transition-colors"
            >
              Badge: {showBadge ? 'ON' : 'OFF'}
            </button>
            <button
              onClick={() => setNotifCount(c => Math.max(0, c - 1))}
              className="px-2 py-1 rounded text-xs bg-zinc-800 text-zinc-400 hover:bg-zinc-700 transition-colors"
            >
              −
            </button>
            <button
              onClick={() => setNotifCount(c => c + 1)}
              className="px-2 py-1 rounded text-xs bg-zinc-800 text-zinc-400 hover:bg-zinc-700 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50">
          <span className="text-sm text-zinc-300">🔔 Bildirimler</span>
          {showBadge && notifCount > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-xs font-bold animate-pulse">
              {notifCount}
            </span>
          )}
        </div>

        <div className="mt-2 text-xs font-mono text-zinc-500">
          showBadge=<span className={showBadge ? 'text-emerald-400' : 'text-red-400'}>{String(showBadge)}</span>
          {' && '}
          count=<span className={notifCount > 0 ? 'text-emerald-400' : 'text-red-400'}>{notifCount}</span>
          {' → '}
          <span className={showBadge && notifCount > 0 ? 'text-emerald-400' : 'text-red-400'}>
            {showBadge && notifCount > 0 ? 'GÖSTER' : 'GİZLE'}
          </span>
        </div>
      </div>

      {/* Object Map Pattern Demo */}
      <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-zinc-400">Status Pattern (Object Map)</span>
          <div className="flex gap-1">
            {(['idle', 'loading', 'success', 'error'] as Status[]).map(s => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`px-2 py-1 rounded text-xs transition-colors ${
                  status === s ? 'bg-violet-600 text-white' : 'bg-zinc-800 text-zinc-500 hover:bg-zinc-700'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className={`flex items-center gap-3 p-4 rounded-lg bg-zinc-800/50 transition-all duration-300 ${statusConfig[status].color}`}>
          <span className="text-2xl">{statusConfig[status].icon}</span>
          <div>
            <div className="text-sm font-medium">{statusConfig[status].text}</div>
            <div className="text-xs opacity-60">status = "{status}"</div>
          </div>
          {status === 'loading' && (
            <div className="ml-auto w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
          )}
        </div>

        <button
          onClick={simulateFetch}
          disabled={status === 'loading'}
          className="mt-3 w-full py-2 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          API Çağrısı Simüle Et (%70 başarı)
        </button>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono">
        <span className="text-zinc-500">// Object Map: </span>
        <span className="text-violet-400">statusMap["{status}"]</span>
        <span className="text-zinc-500"> → if/else zinciri yerine obje lookup</span>
      </div>
    </div>
  )
}
