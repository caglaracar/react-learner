import { useState, type FormEvent } from 'react'

export function FormDemo() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [history, setHistory] = useState<string[]>([])

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setHistory(prev => [...prev.slice(-4), `setForm({ ${field}: "${value.slice(-15)}" })`])
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setHistory(prev => [...prev.slice(-4), `✅ Form submitted!`])
    setTimeout(() => setSubmitted(false), 3000)
  }

  const isValid = form.name.length > 0 && form.email.includes('@') && form.message.length > 0

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="text-xs text-zinc-500 mb-1 block">İsim</label>
          <input
            value={form.name}
            onChange={e => handleChange('name', e.target.value)}
            placeholder="Adınız..."
            className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
          />
          {form.name.length > 0 && form.name.length < 2 && (
            <span className="text-xs text-amber-400 mt-1">En az 2 karakter</span>
          )}
        </div>

        <div>
          <label className="text-xs text-zinc-500 mb-1 block">E-posta</label>
          <input
            value={form.email}
            onChange={e => handleChange('email', e.target.value)}
            placeholder="email@ornek.com"
            className={`w-full px-3 py-2 rounded-lg bg-zinc-900 border text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none transition-colors ${
              form.email.length > 0 && !form.email.includes('@')
                ? 'border-red-500 focus:border-red-500'
                : 'border-zinc-700 focus:border-violet-500'
            }`}
          />
          {form.email.length > 0 && !form.email.includes('@') && (
            <span className="text-xs text-red-400 mt-1">Geçersiz e-posta</span>
          )}
        </div>

        <div>
          <label className="text-xs text-zinc-500 mb-1 block">Mesaj</label>
          <textarea
            value={form.message}
            onChange={e => handleChange('message', e.target.value)}
            placeholder="Mesajınız..."
            rows={2}
            className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all ${
            submitted
              ? 'bg-emerald-600 text-white'
              : isValid
                ? 'bg-violet-600 text-white hover:bg-violet-500'
                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
          }`}
        >
          {submitted ? '✅ Gönderildi!' : isValid ? 'Gönder' : 'Tüm alanları doldurun'}
        </button>
      </form>

      {/* State Inspector */}
      <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono space-y-1">
        <div className="text-zinc-500">// Kontrollü Form State:</div>
        <div>
          <span className="text-purple-400">form</span>
          <span className="text-zinc-400"> = {'{'}</span>
        </div>
        <div className="pl-4">
          <span className="text-blue-400">name</span>
          <span className="text-zinc-400">: </span>
          <span className="text-amber-400">"{form.name}"</span>
        </div>
        <div className="pl-4">
          <span className="text-blue-400">email</span>
          <span className="text-zinc-400">: </span>
          <span className={form.email.includes('@') ? 'text-emerald-400' : 'text-amber-400'}>"{form.email}"</span>
        </div>
        <div className="pl-4">
          <span className="text-blue-400">message</span>
          <span className="text-zinc-400">: </span>
          <span className="text-amber-400">"{form.message.length > 20 ? form.message.slice(0, 20) + '...' : form.message}"</span>
        </div>
        <div><span className="text-zinc-400">{'}'}</span></div>
        <div className="text-zinc-500 mt-1">// isValid = {String(isValid)}</div>
      </div>

      {/* Render Log */}
      {history.length > 0 && (
        <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono">
          <div className="text-zinc-500 mb-1">// Son güncellemeler:</div>
          {history.map((h, i) => (
            <div key={i} className={h.includes('✅') ? 'text-emerald-400' : 'text-zinc-500'}>
              {h}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
