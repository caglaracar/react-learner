import {cn} from '../lib/utils'
import type {Section} from './GuideSection'
import {List, GraduationCap} from 'lucide-react'

interface GuideSidebarProps {
  sections: Section[]
  activeSection: string
}

const levelConfig = {
  beginner: {
    dot: 'bg-emerald-400',
    activeBg: 'bg-emerald-500/10 border-emerald-500/30',
    activeText: 'text-emerald-300',
    icon: '🌱',
    label: 'Başlangıç',
    color: 'text-emerald-400',
  },
  intermediate: {
    dot: 'bg-amber-400',
    activeBg: 'bg-amber-500/10 border-amber-500/30',
    activeText: 'text-amber-300',
    icon: '⚡',
    label: 'Orta',
    color: 'text-amber-400',
  },
  advanced: {
    dot: 'bg-rose-400',
    activeBg: 'bg-rose-500/10 border-rose-500/30',
    activeText: 'text-rose-300',
    icon: '🔥',
    label: 'İleri',
    color: 'text-rose-400',
  },
  expert: {
    dot: 'bg-violet-400',
    activeBg: 'bg-violet-500/10 border-violet-500/30',
    activeText: 'text-violet-300',
    icon: '👑',
    label: 'Uzman',
    color: 'text-violet-400',
  },
}

export function GuideSidebar({sections, activeSection}: GuideSidebarProps) {
  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

  const activeSectionIndex = sections.findIndex(s => s.id === activeSection)
  const progress = sections.length > 0 ? ((activeSectionIndex + 1) / sections.length) * 100 : 0

  return (
    <nav className="sticky top-24 space-y-1">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 px-1">
        <div className="flex items-center justify-center size-7 rounded-lg bg-zinc-800 border border-zinc-700/50">
          <List className="size-3.5 text-zinc-400" />
        </div>
        <span className="text-sm font-bold text-zinc-300 uppercase tracking-wider">İçindekiler</span>
      </div>

      {/* Progress bar */}
      <div className="mb-4 px-1">
        <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-1.5">
          <span>İlerleme</span>
          <span className="font-mono">{activeSectionIndex + 1}/{sections.length}</span>
        </div>
        <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
            style={{width: `${progress}%`}}
          />
        </div>
      </div>

      {/* Section links */}
      <div className="space-y-1">
        {sections.map((section, idx) => {
          const config = levelConfig[section.level]
          const isActive = activeSection === section.id
          return (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={cn(
                'w-full flex items-center gap-2.5 px-3 py-2.5 text-sm rounded-xl text-left transition-all duration-200 border',
                isActive
                  ? `${config.activeBg} ${config.activeText} shadow-sm`
                  : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/40 border-transparent'
              )}
            >
              <span className={cn(
                'flex items-center justify-center size-5 rounded-md text-[10px] font-bold shrink-0 transition-colors',
                isActive
                  ? `${config.activeText} bg-white/5`
                  : 'text-zinc-600 bg-zinc-800/50'
              )}>
                {idx + 1}
              </span>
              <span className="truncate text-[13px] font-medium">{section.title}</span>
              {isActive && (
                <div className={cn('ml-auto size-1.5 rounded-full shrink-0', config.dot)} />
              )}
            </button>
          )
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-5 border-t border-zinc-800/60">
        <div className="flex items-center gap-2 mb-3 px-1">
          <GraduationCap className="size-3.5 text-zinc-500" />
          <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">Seviyeler</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {Object.entries(levelConfig).map(([key, val]) => (
            <div key={key} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-zinc-900/50">
              <span className="text-xs">{val.icon}</span>
              <span className={cn('text-[11px] font-medium', val.color)}>{val.label}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
