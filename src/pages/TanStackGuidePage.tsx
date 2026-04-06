import {useState, useMemo, useEffect} from 'react'
import {Code2, Layers, Rocket, ArrowRightLeft, Zap} from 'lucide-react'
import {GuideSection} from '../components/GuideSection'
import {GuideSidebar} from '../components/GuideSidebar'
import {Tabs} from '../components/Tabs'
import {
  tanstackQuerySections,
  reactFundamentalsSections,
  reactIntermediateAllSections,
  reactProfessionalSections,
  oldVsTanstackSections,
} from '../data'

const tabs = [
  {id: 'react-fundamentals', label: 'Temeller', icon: <Code2 className="size-4" />, count: reactFundamentalsSections.length},
  {id: 'react-intermediate', label: 'Orta', icon: <Layers className="size-4" />, count: reactIntermediateAllSections.length},
  {id: 'react-professional', label: 'İleri', icon: <Rocket className="size-4" />, count: reactProfessionalSections.length},
  {id: 'tanstack', label: 'TanStack', icon: <Zap className="size-4" />, count: tanstackQuerySections.length},
  {id: 'old-vs-new', label: 'Karşılaştırma', icon: <ArrowRightLeft className="size-4" />, count: oldVsTanstackSections.length},
]

const tabDescriptions: Record<string, {title: string; subtitle: string}> = {
  'react-fundamentals': {
    title: 'React Temelleri',
    subtitle: 'JSX, Props, State, Hooks — sıfırdan sağlam temeller atın',
  },
  'react-intermediate': {
    title: 'Orta Seviye React',
    subtitle: 'Context, useReducer, Error Boundaries, Custom Hooks ve daha fazlası',
  },
  'react-professional': {
    title: 'Profesyonel React',
    subtitle: 'Compound Components, HOC, Performance, TypeScript ve Mimari',
  },
  'tanstack': {
    title: 'TanStack Ekosistemi',
    subtitle: 'Query, Router, Mutations — modern React veri yönetimi',
  },
  'old-vs-new': {
    title: 'Eski vs Modern Yaklaşım',
    subtitle: 'useEffect+useState\'den TanStack Query\'ye geçiş rehberi',
  },
}

export function TanStackGuidePage() {
  const [activeTab, setActiveTab] = useState('react-fundamentals')
  const [activeSection, setActiveSection] = useState('')

  const sections = useMemo(() => {
    switch (activeTab) {
      case 'react-fundamentals':
        return reactFundamentalsSections
      case 'react-intermediate':
        return reactIntermediateAllSections
      case 'react-professional':
        return reactProfessionalSections
      case 'tanstack':
        return tanstackQuerySections
      case 'old-vs-new':
        return oldVsTanstackSections
      default:
        return []
    }
  }, [activeTab])

  useEffect(() => {
    if (sections.length > 0) {
      setActiveSection(sections[0].id)
    }
  }, [sections])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      {rootMargin: '-120px 0px -60% 0px'},
    )

    sections.forEach(section => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  const currentTabInfo = tabDescriptions[activeTab]

  return (
    <div className="min-h-screen bg-[#09090b] relative">
      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-violet-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/[0.02] rounded-full blur-3xl" />
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-30 glass border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top bar */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-violet-500/20">
                <Code2 className="size-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-zinc-100 tracking-tight">
                  React Öğrenme Rehberi
                </h1>
                <p className="text-[11px] text-zinc-500 font-medium">
                  Sıfırdan Uzmanlığa • Kapsamlı Türkçe Kaynak
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-6 px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800/50">
                <div className="text-center">
                  <div className="text-sm font-bold text-zinc-200">5</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Modül</div>
                </div>
                <div className="w-px h-6 bg-zinc-800" />
                <div className="text-center">
                  <div className="text-sm font-bold text-zinc-200">40+</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Bölüm</div>
                </div>
                <div className="w-px h-6 bg-zinc-800" />
                <div className="text-center">
                  <div className="text-sm font-bold text-zinc-200">200+</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Örnek</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="pb-4 -mx-2 overflow-x-auto">
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
          </div>
        </div>
      </header>

      {/* Tab description banner */}
      <div className="relative border-b border-zinc-800/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-zinc-100 tracking-tight mb-1">
              {currentTabInfo.title}
            </h2>
            <p className="text-sm text-zinc-500">{currentTabInfo.subtitle}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <GuideSidebar sections={sections} activeSection={activeSection} />
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            {sections.map(section => (
              <GuideSection key={section.id} section={section} />
            ))}

            {/* Bottom spacer */}
            <div className="h-32" />
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-zinc-800/30">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-zinc-600">
            React & TanStack Öğrenme Rehberi — Türkçe, kapsamlı ve ücretsiz.
          </p>
        </div>
      </footer>
    </div>
  )
}
