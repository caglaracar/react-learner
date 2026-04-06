import { Globe } from 'lucide-react'

interface PreviewBlockProps {
  title?: string
  content: string
}

export function PreviewBlock({ title, content }: PreviewBlockProps) {
  return (
    <div className="my-4 rounded-xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent overflow-hidden">
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500/5 border-b border-emerald-500/10">
        <div className="flex items-center gap-1.5">
          <div className="size-2.5 rounded-full bg-red-400/60" />
          <div className="size-2.5 rounded-full bg-amber-400/60" />
          <div className="size-2.5 rounded-full bg-emerald-400/60" />
        </div>
        <div className="flex-1 flex items-center gap-2 ml-2 px-3 py-1 rounded-md bg-zinc-900/60 border border-zinc-800">
          <Globe className="size-3 text-zinc-500" />
          <span className="text-[11px] text-zinc-500">localhost:3000</span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
          Çıktı
        </span>
      </div>

      {/* Preview Title */}
      {title && (
        <div className="px-4 pt-3 pb-0">
          <span className="text-xs font-medium text-emerald-400/80">↳ {title}</span>
        </div>
      )}

      {/* Rendered Output */}
      <div className="p-5" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
