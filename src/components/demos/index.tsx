import { CounterDemo } from './CounterDemo'
import { ToggleDemo } from './ToggleDemo'
import { TodoDemo } from './TodoDemo'
import { TimerDemo } from './TimerDemo'
import { VirtualDomDemo } from './VirtualDomDemo'
import { PropsDemo } from './PropsDemo'
import { ConditionalDemo } from './ConditionalDemo'
import { FormDemo } from './FormDemo'
import { RefDemo } from './RefDemo'
import { Monitor, Play } from 'lucide-react'

const demoRegistry: Record<string, { component: React.ComponentType; title: string; description: string }> = {
  'counter': {
    component: CounterDemo,
    title: 'Sayaç Demo',
    description: 'useState ile state değişimini canlı gör',
  },
  'toggle': {
    component: ToggleDemo,
    title: 'Toggle Demo',
    description: 'Boolean state ile UI kontrol et',
  },
  'todo': {
    component: TodoDemo,
    title: 'Todo List Demo',
    description: 'Dizi state: ekle, sil, güncelle, filtrele',
  },
  'timer': {
    component: TimerDemo,
    title: 'Kronometre Demo',
    description: 'useEffect yaşam döngüsünü izle: setup → cleanup',
  },
  'virtual-dom': {
    component: VirtualDomDemo,
    title: 'Virtual DOM Demo',
    description: 'Diffing algoritmasını görselleştir',
  },
  'props': {
    component: PropsDemo,
    title: 'Props Demo',
    description: 'Parent → Child veri akışını gör',
  },
  'conditional': {
    component: ConditionalDemo,
    title: 'Conditional Render Demo',
    description: '&&, ternary ve object map pattern canlı',
  },
  'form': {
    component: FormDemo,
    title: 'Form Demo',
    description: 'Kontrollü form: input → state → validation',
  },
  'ref': {
    component: RefDemo,
    title: 'useRef Demo',
    description: 'DOM erişimi ve mutable değerler',
  },
}

export function DemoBlock({ demoId }: { demoId: string }) {
  const demo = demoRegistry[demoId]

  if (!demo) {
    return (
      <div className="my-4 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
        Demo bulunamadı: {demoId}
      </div>
    )
  }

  const DemoComponent = demo.component

  return (
    <div className="my-5 rounded-xl border border-violet-500/20 bg-gradient-to-b from-violet-500/5 to-transparent overflow-hidden">
      {/* Demo Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-violet-500/10 bg-violet-500/5">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20">
          <Monitor className="w-4 h-4 text-violet-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-violet-300">{demo.title}</span>
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 text-[10px] font-medium">
              <Play className="w-2.5 h-2.5 fill-current" />
              İnteraktif
            </span>
          </div>
          <div className="text-xs text-zinc-500">{demo.description}</div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="p-4">
        <DemoComponent />
      </div>
    </div>
  )
}
