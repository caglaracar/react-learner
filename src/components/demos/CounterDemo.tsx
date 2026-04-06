import { useState } from 'react'

export function CounterDemo() {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => setCount(c => c - 1)}
          className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all text-xl font-bold"
        >
          −
        </button>
        <div className="text-center">
          <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tabular-nums">
            {count}
          </div>
          <div className="text-xs text-zinc-500 mt-1">count değeri</div>
        </div>
        <button
          onClick={() => setCount(c => c + 1)}
          className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all text-xl font-bold"
        >
          +
        </button>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono space-y-1">
        <div className="text-zinc-500">// React state takibi:</div>
        <div>
          <span className="text-purple-400">useState</span>
          <span className="text-zinc-400">(0) → count = </span>
          <span className="text-emerald-400 font-bold">{count}</span>
        </div>
        <div className="text-zinc-500">
          // Butona tıkla → setCount çalışır → component yeniden render olur
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setCount(0)}
          className="flex-1 py-2 rounded-lg bg-zinc-800 text-zinc-400 hover:bg-zinc-700 transition-all text-xs"
        >
          Sıfırla
        </button>
        <button
          onClick={() => {
            setCount(c => c + 1)
            setCount(c => c + 1)
            setCount(c => c + 1)
          }}
          className="flex-1 py-2 rounded-lg bg-violet-500/20 text-violet-400 border border-violet-500/30 hover:bg-violet-500/30 transition-all text-xs"
        >
          +3 (updater ile)
        </button>
      </div>
    </div>
  )
}
