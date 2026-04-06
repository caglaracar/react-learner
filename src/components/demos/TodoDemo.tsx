import { useState } from 'react'

interface Todo {
  id: number
  text: string
  done: boolean
}

export function TodoDemo() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'React öğren', done: true },
    { id: 2, text: 'TypeScript öğren', done: false },
    { id: 3, text: 'Proje yap', done: false },
  ])
  const [input, setInput] = useState('')
  const [renderCount, setRenderCount] = useState(0)

  const addTodo = () => {
    if (!input.trim()) return
    setTodos(prev => [...prev, { id: Date.now(), text: input, done: false }])
    setInput('')
    setRenderCount(c => c + 1)
  }

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    )
    setRenderCount(c => c + 1)
  }

  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(t => t.id !== id))
    setRenderCount(c => c + 1)
  }

  const doneCount = todos.filter(t => t.done).length

  return (
    <div className="space-y-4">
      {/* Input */}
      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
          placeholder="Yeni görev ekle..."
          className="flex-1 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-colors"
        >
          Ekle
        </button>
      </div>

      {/* Progress */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-zinc-500">
          <span>{doneCount}/{todos.length} tamamlandı</span>
          <span>{todos.length > 0 ? Math.round((doneCount / todos.length) * 100) : 0}%</span>
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-500 to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${todos.length > 0 ? (doneCount / todos.length) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Todo List */}
      <div className="space-y-2">
        {todos.map(todo => (
          <div
            key={todo.id}
            className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
              todo.done
                ? 'bg-emerald-500/5 border-emerald-500/20'
                : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                todo.done
                  ? 'bg-emerald-500 border-emerald-500 text-white'
                  : 'border-zinc-600 hover:border-violet-500'
              }`}
            >
              {todo.done && <span className="text-xs">✓</span>}
            </button>
            <span className={`flex-1 text-sm transition-all ${todo.done ? 'line-through text-zinc-500' : 'text-zinc-200'}`}>
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="text-zinc-600 hover:text-red-400 transition-colors text-sm"
            >
              ✕
            </button>
          </div>
        ))}
        {todos.length === 0 && (
          <div className="text-center py-6 text-zinc-600 text-sm">
            Görev yok — yukarıdan ekle! 🎯
          </div>
        )}
      </div>

      {/* State Inspector */}
      <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800 text-xs font-mono space-y-1">
        <div className="text-zinc-500">// State durumu:</div>
        <div>
          <span className="text-purple-400">todos</span>
          <span className="text-zinc-400">.length = </span>
          <span className="text-emerald-400">{todos.length}</span>
          <span className="text-zinc-600"> // [...prev, newTodo]</span>
        </div>
        <div>
          <span className="text-purple-400">filter</span>
          <span className="text-zinc-400">(done) = </span>
          <span className="text-emerald-400">{doneCount}</span>
          <span className="text-zinc-600"> // .filter(t =&gt; t.done)</span>
        </div>
        <div>
          <span className="text-purple-400">render</span>
          <span className="text-zinc-400"> sayısı = </span>
          <span className="text-amber-400">{renderCount}</span>
          <span className="text-zinc-600"> // her state değişiminde +1</span>
        </div>
      </div>
    </div>
  )
}
