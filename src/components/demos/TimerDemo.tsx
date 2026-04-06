import { useState, useEffect, useRef } from 'react'

export function TimerDemo() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [logs, setLogs] = useState<string[]>([])
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const logEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isRunning) {
      setLogs(prev => [...prev, `▶ useEffect çalıştı — interval başlatıldı`])
      intervalRef.current = setInterval(() => {
        setSeconds(s => s + 1)
      }, 1000)

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          setLogs(prev => [...prev, `🧹 Cleanup çalıştı — interval temizlendi`])
        }
      }
    }
  }, [isRunning])

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logs])

  const start = () => {
    setIsRunning(true)
    setLogs(prev => [...prev, `📌 setIsRunning(true) — dependency değişti`])
  }

  const stop = () => {
    setIsRunning(false)
    setLogs(prev => [...prev, `📌 setIsRunning(false) — cleanup tetiklendi`])
  }

  const reset = () => {
    stop()
    setSeconds(0)
    setLogs([`🔄 Sıfırlandı`])
  }

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60)
    const secs = s % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="space-y-4">
      {/* Timer Display */}
      <div className="text-center py-4">
        <div className={`text-5xl font-bold font-mono tabular-nums transition-colors ${isRunning ? 'text-emerald-400' : 'text-zinc-400'}`}>
          {formatTime(seconds)}
        </div>
        <div className="text-xs text-zinc-500 mt-2">
          isRunning = <span className={isRunning ? 'text-emerald-400' : 'text-red-400'}>{String(isRunning)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        {!isRunning ? (
          <button
            onClick={start}
            className="flex-1 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition-colors"
          >
            ▶ Başlat
          </button>
        ) : (
          <button
            onClick={stop}
            className="flex-1 py-2.5 rounded-lg bg-amber-600 text-white text-sm font-medium hover:bg-amber-500 transition-colors"
          >
            ⏸ Durdur
          </button>
        )}
        <button
          onClick={reset}
          className="flex-1 py-2.5 rounded-lg bg-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-700 transition-colors"
        >
          ↻ Sıfırla
        </button>
      </div>

      {/* useEffect Lifecycle Log */}
      <div className="bg-zinc-900/70 rounded-lg border border-zinc-800 overflow-hidden">
        <div className="px-3 py-2 border-b border-zinc-800 bg-zinc-800/50">
          <span className="text-xs font-medium text-zinc-400">useEffect Yaşam Döngüsü Log</span>
        </div>
        <div className="max-h-28 overflow-y-auto p-3 space-y-1 text-xs font-mono">
          {logs.length === 0 && (
            <div className="text-zinc-600">Başlat butonuna tıklayarak useEffect döngüsünü izle...</div>
          )}
          {logs.map((log, i) => (
            <div key={i} className={`${log.includes('Cleanup') ? 'text-red-400' : log.includes('useEffect') ? 'text-emerald-400' : log.includes('dependency') ? 'text-amber-400' : 'text-zinc-500'}`}>
              {log}
            </div>
          ))}
          <div ref={logEndRef} />
        </div>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono space-y-1">
        <div className="text-zinc-500">// useEffect akışı:</div>
        <div className="text-blue-400">// isRunning değişir → effect çalışır → interval başlar</div>
        <div className="text-red-400">// isRunning tekrar değişir → ÖNCE cleanup → SONRA yeni effect</div>
        <div className="text-zinc-500">// Bu sayede eski interval temizlenir, memory leak olmaz!</div>
      </div>
    </div>
  )
}
