import { useState } from 'react'

export function ToggleDemo() {
  const [isDark, setIsDark] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleFakeLoad = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="space-y-5">
      {/* Theme Toggle */}
      <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/50">
        <div>
          <div className="text-sm font-medium text-zinc-200">Tema</div>
          <div className="text-xs text-zinc-500">isDark = {String(isDark)}</div>
        </div>
        <button
          onClick={() => setIsDark(d => !d)}
          className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${isDark ? 'bg-violet-600' : 'bg-amber-400'}`}
        >
          <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${isDark ? 'translate-x-7' : 'translate-x-0.5'}`} />
          <span className="absolute inset-0 flex items-center justify-center text-xs">
            {isDark ? '🌙' : '☀️'}
          </span>
        </button>
      </div>

      {/* Accordion Toggle */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
        <button
          onClick={() => setIsOpen(o => !o)}
          className="w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors"
        >
          <div>
            <div className="text-sm font-medium text-zinc-200">Accordion</div>
            <div className="text-xs text-zinc-500">isOpen = {String(isOpen)}</div>
          </div>
          <span className={`text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pb-4 text-sm text-zinc-400">
            Bu içerik <code className="text-violet-400">isOpen</code> state'i <code className="text-emerald-400">true</code> olduğunda görünür. Boolean state ile açılıp kapanabilen UI öğeleri yapabilirsiniz!
          </div>
        </div>
      </div>

      {/* Loading State */}
      <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/50">
        <div>
          <div className="text-sm font-medium text-zinc-200">Loading State</div>
          <div className="text-xs text-zinc-500">isLoading = {String(isLoading)}</div>
        </div>
        <button
          onClick={handleFakeLoad}
          disabled={isLoading}
          className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
            isLoading
              ? 'bg-zinc-700 text-zinc-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-500'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 border-2 border-zinc-500 border-t-transparent rounded-full animate-spin" />
              Yükleniyor...
            </span>
          ) : (
            'Veri Çek (2sn)'
          )}
        </button>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono">
        <span className="text-zinc-500">// Boolean state = </span>
        <span className="text-amber-400">true</span>
        <span className="text-zinc-500"> / </span>
        <span className="text-amber-400">false</span>
        <span className="text-zinc-500"> → UI'ı kontrol eder</span>
      </div>
    </div>
  )
}
