import { useState, useRef, useEffect } from 'react'

export function RefDemo() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')
  const renderCount = useRef(0)
  const prevValue = useRef('')
  const [messages, setMessages] = useState<string[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  renderCount.current += 1

  useEffect(() => {
    prevValue.current = inputValue
  }, [inputValue])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const focusInput = () => {
    inputRef.current?.focus()
    setMessages(prev => [...prev, '🎯 inputRef.current.focus() çağrıldı'])
  }

  const selectAll = () => {
    inputRef.current?.select()
    setMessages(prev => [...prev, '📋 inputRef.current.select() çağrıldı'])
  }

  return (
    <div className="space-y-4">
      {/* DOM Ref Demo */}
      <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/50 space-y-3">
        <div className="text-xs font-medium text-violet-400">useRef — DOM Erişimi</div>
        <input
          ref={inputRef}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Bu input'un ref'i var..."
          className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/20 transition-all"
        />
        <div className="flex gap-2">
          <button
            onClick={focusInput}
            className="flex-1 py-2 rounded-lg bg-violet-600/20 text-violet-400 border border-violet-500/30 text-xs font-medium hover:bg-violet-600/30 transition-colors"
          >
            Focus Ver
          </button>
          <button
            onClick={selectAll}
            className="flex-1 py-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-medium hover:bg-blue-600/30 transition-colors"
          >
            Tümünü Seç
          </button>
        </div>
      </div>

      {/* Mutable Value Demo */}
      <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/50">
        <div className="text-xs font-medium text-amber-400 mb-3">useRef — Mutable Değerler (re-render tetiklemez!)</div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-zinc-800/50 text-center">
            <div className="text-2xl font-bold text-emerald-400 font-mono">{renderCount.current}</div>
            <div className="text-xs text-zinc-500 mt-1">Render sayısı</div>
            <div className="text-[10px] text-zinc-600">(useRef — re-render yok)</div>
          </div>
          <div className="p-3 rounded-lg bg-zinc-800/50 text-center">
            <div className="text-lg font-bold text-amber-400 font-mono truncate">
              {prevValue.current || '—'}
            </div>
            <div className="text-xs text-zinc-500 mt-1">Önceki değer</div>
            <div className="text-[10px] text-zinc-600">(prevValue.current)</div>
          </div>
        </div>
      </div>

      {/* Log */}
      {messages.length > 0 && (
        <div className="bg-zinc-900/70 rounded-lg border border-zinc-800 overflow-hidden">
          <div className="px-3 py-2 border-b border-zinc-800 bg-zinc-800/50 flex justify-between">
            <span className="text-xs font-medium text-zinc-400">DOM İşlem Logu</span>
            <button onClick={() => setMessages([])} className="text-xs text-zinc-600 hover:text-zinc-400">Temizle</button>
          </div>
          <div className="max-h-20 overflow-y-auto p-2 space-y-0.5 text-xs font-mono">
            {messages.map((m, i) => (
              <div key={i} className="text-zinc-400">{m}</div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* State Inspector */}
      <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono space-y-1">
        <div className="text-zinc-500">// useRef vs useState:</div>
        <div>
          <span className="text-purple-400">renderCount</span>
          <span className="text-zinc-400">.current = </span>
          <span className="text-emerald-400">{renderCount.current}</span>
          <span className="text-zinc-600"> // değişir ama render tetiklemez</span>
        </div>
        <div>
          <span className="text-purple-400">inputValue</span>
          <span className="text-zinc-400"> = </span>
          <span className="text-amber-400">"{inputValue}"</span>
          <span className="text-zinc-600"> // useState → render tetikler</span>
        </div>
      </div>
    </div>
  )
}
