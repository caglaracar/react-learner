import { useState } from 'react'

interface TreeNode {
  tag: string
  text?: string
  changed?: boolean
  children?: TreeNode[]
}

export function VirtualDomDemo() {
  const [count, setCount] = useState(0)
  const [showDiff, setShowDiff] = useState(false)

  const oldTree: TreeNode = {
    tag: 'div',
    children: [
      { tag: 'h1', text: 'Sayaç' },
      { tag: 'p', text: String(count), changed: showDiff },
      { tag: 'button', text: 'Artır' },
    ],
  }

  const newTree: TreeNode = {
    tag: 'div',
    children: [
      { tag: 'h1', text: 'Sayaç' },
      { tag: 'p', text: String(count + 1), changed: showDiff },
      { tag: 'button', text: 'Artır' },
    ],
  }

  const handleClick = () => {
    setShowDiff(true)
    setTimeout(() => {
      setCount(c => c + 1)
      setShowDiff(false)
    }, 1500)
  }

  const renderTree = (node: TreeNode, depth: number = 0) => {
    const indent = depth * 20
    const isChanged = node.changed
    return (
      <div key={node.tag + depth} style={{ marginLeft: indent }}>
        <div className={`flex items-center gap-1.5 py-0.5 px-2 rounded text-xs font-mono transition-all duration-500 ${
          isChanged ? 'bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/40' : 'text-zinc-400'
        }`}>
          <span className="text-blue-400">&lt;{node.tag}&gt;</span>
          {node.text !== undefined && (
            <span className={isChanged ? 'text-amber-300 font-bold' : 'text-emerald-400'}>
              {node.text}
            </span>
          )}
        </div>
        {node.children?.map((child) => renderTree(child, depth + 1))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Visual: Two trees side by side */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-zinc-900/70 rounded-lg border border-zinc-800 p-3">
          <div className="text-xs font-medium text-zinc-500 mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Eski Virtual DOM
          </div>
          {renderTree(oldTree)}
        </div>
        <div className="bg-zinc-900/70 rounded-lg border border-zinc-800 p-3">
          <div className="text-xs font-medium text-zinc-500 mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Yeni Virtual DOM
          </div>
          {renderTree(newTree)}
        </div>
      </div>

      {/* Diff result */}
      <div className={`rounded-lg border p-3 transition-all duration-500 ${
        showDiff
          ? 'bg-amber-500/10 border-amber-500/30'
          : 'bg-zinc-900/50 border-zinc-800'
      }`}>
        <div className="text-xs font-mono space-y-1">
          {showDiff ? (
            <>
              <div className="text-amber-400 font-medium">🔍 Diffing (karşılaştırma) yapılıyor...</div>
              <div className="text-zinc-500">├─ &lt;h1&gt; değişmedi → <span className="text-emerald-400">DOKUNMA</span></div>
              <div className="text-amber-300">├─ &lt;p&gt; değişti: {count} → {count + 1} → <span className="text-amber-400 font-bold">GÜNCELLE</span></div>
              <div className="text-zinc-500">└─ &lt;button&gt; değişmedi → <span className="text-emerald-400">DOKUNMA</span></div>
              <div className="text-violet-400 mt-2">Sonuç: Sadece 1 DOM güncellemesi (3 yerine!)</div>
            </>
          ) : (
            <div className="text-zinc-500">
              Butona tıklayarak Virtual DOM diff sürecini izle →
            </div>
          )}
        </div>
      </div>

      {/* The actual component being represented */}
      <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-800 bg-zinc-900/50">
        <div className="text-sm text-zinc-300">
          Gerçek DOM: count = <span className="text-emerald-400 font-bold font-mono">{count}</span>
        </div>
        <button
          onClick={handleClick}
          disabled={showDiff}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            showDiff
              ? 'bg-amber-600/30 text-amber-400 cursor-wait'
              : 'bg-blue-600 text-white hover:bg-blue-500'
          }`}
        >
          {showDiff ? 'Diffing...' : 'setCount(count + 1)'}
        </button>
      </div>
    </div>
  )
}
