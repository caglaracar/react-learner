import {cn} from '../lib/utils'
import type {ReactNode} from 'react'

interface Tab {
  id: string
  label: string
  icon?: ReactNode
  count?: number
}

interface TabsProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export function Tabs({tabs, activeTab, onTabChange}: TabsProps) {
  return (
    <div className="flex gap-1 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/60 backdrop-blur-sm shadow-inner">
      {tabs.map(tab => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              'relative flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300',
              isActive
                ? 'bg-gradient-to-b from-zinc-700/90 to-zinc-800/90 text-white shadow-lg shadow-black/20 border border-zinc-600/40'
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/40 border border-transparent'
            )}
          >
            {tab.icon && <span className="text-base">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span className={cn(
                'text-[10px] font-bold px-1.5 py-0.5 rounded-md',
                isActive
                  ? 'bg-white/10 text-zinc-300'
                  : 'bg-zinc-800 text-zinc-600'
              )}>
                {tab.count}
              </span>
            )}
            {isActive && (
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />
            )}
          </button>
        )
      })}
    </div>
  )
}
