import {useState, useCallback} from 'react'
import {ChevronDown, ChevronRight, AlertTriangle, Lightbulb, BookOpen, Sparkles, Maximize2} from 'lucide-react'
import {cn} from '../lib/utils'
import {CodeBlock} from './CodeBlock'
import {PreviewBlock} from './PreviewBlock'
import {DemoBlock} from './demos'
import {FullScreenLesson} from './FullScreenLesson'

export interface LessonBlock {
  type: 'text' | 'code' | 'tip' | 'warning' | 'demo' | 'preview'
  content: string
  demoId?: string
  language?: string
  title?: string
}

export interface Lesson {
  id: string
  title: string
  blocks: LessonBlock[]
}

export interface Section {
  id: string
  title: string
  description: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  lessons: Lesson[]
}

interface GuideSectionProps {
  section: Section
}

const levelConfig = {
  beginner: {
    gradient: 'from-emerald-500/20 via-transparent to-transparent',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    badge: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25',
    icon: '🌱',
    label: 'Başlangıç',
    accent: 'text-emerald-400',
    glow: 'shadow-emerald-500/5',
  },
  intermediate: {
    gradient: 'from-amber-500/20 via-transparent to-transparent',
    border: 'border-amber-500/20 hover:border-amber-500/40',
    badge: 'bg-amber-500/15 text-amber-400 border border-amber-500/25',
    icon: '⚡',
    label: 'Orta Seviye',
    accent: 'text-amber-400',
    glow: 'shadow-amber-500/5',
  },
  advanced: {
    gradient: 'from-rose-500/20 via-transparent to-transparent',
    border: 'border-rose-500/20 hover:border-rose-500/40',
    badge: 'bg-rose-500/15 text-rose-400 border border-rose-500/25',
    icon: '🔥',
    label: 'İleri Seviye',
    accent: 'text-rose-400',
    glow: 'shadow-rose-500/5',
  },
  expert: {
    gradient: 'from-violet-500/20 via-transparent to-transparent',
    border: 'border-violet-500/20 hover:border-violet-500/40',
    badge: 'bg-violet-500/15 text-violet-400 border border-violet-500/25',
    icon: '👑',
    label: 'Uzman',
    accent: 'text-violet-400',
    glow: 'shadow-violet-500/5',
  },
}

export function GuideSection({section}: GuideSectionProps) {
  const [openLessons, setOpenLessons] = useState<Set<string>>(new Set())
  const [fullScreenLessonIdx, setFullScreenLessonIdx] = useState<number | null>(null)
  const config = levelConfig[section.level]

  const toggleLesson = (lessonId: string) => {
    setOpenLessons(prev => {
      const next = new Set(prev)
      if (next.has(lessonId)) {
        next.delete(lessonId)
      } else {
        next.add(lessonId)
      }
      return next
    })
  }

  const handleFullScreenNavigate = useCallback((direction: 'prev' | 'next') => {
    setFullScreenLessonIdx(prev => {
      if (prev === null) return null
      if (direction === 'prev' && prev > 0) return prev - 1
      if (direction === 'next' && prev < section.lessons.length - 1) return prev + 1
      return prev
    })
  }, [section.lessons.length])

  return (
    <div
      id={section.id}
      className={cn(
        'relative rounded-2xl border p-6 md:p-8 mb-8 transition-all duration-500 animate-fade-in',
        'bg-zinc-900/40 backdrop-blur-sm',
        'shadow-xl',
        config.border,
        config.glow
      )}
    >
      {/* Top gradient accent */}
      <div className={cn('absolute inset-x-0 top-0 h-32 rounded-t-2xl bg-gradient-to-b pointer-events-none', config.gradient)} />

      {/* Section header */}
      <div className="relative z-[1] mb-6">
        <div className="flex items-start gap-4">
          <div className="text-3xl mt-0.5">{config.icon}</div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-zinc-50 tracking-tight">{section.title}</h2>
              <span className={cn('text-[11px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider', config.badge)}>
                {config.label}
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed text-[15px]">{section.description}</p>
          </div>
        </div>

        {/* Lesson count */}
        <div className="flex items-center gap-2 mt-4 text-xs text-zinc-500">
          <BookOpen className="size-3.5" />
          <span>{section.lessons.length} ders</span>
          <span className="text-zinc-700">•</span>
          <Sparkles className="size-3.5" />
          <span>{section.lessons.reduce((acc, l) => acc + l.blocks.length, 0)} içerik bloğu</span>
        </div>
      </div>

      {/* Lessons */}
      <div className="relative z-[1] space-y-3">
        {section.lessons.map((lesson, lessonIdx) => {
          const isOpen = openLessons.has(lesson.id)
          return (
            <div
              key={lesson.id}
              className={cn(
                'rounded-xl border transition-all duration-300',
                isOpen
                  ? 'border-zinc-700/80 bg-zinc-900/80 shadow-lg shadow-black/10'
                  : 'border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700/60'
              )}
              style={{animationDelay: `${lessonIdx * 50}ms`}}
            >
              <div className="flex items-center">
                <button
                  onClick={() => toggleLesson(lesson.id)}
                  className="flex-1 flex items-center gap-3 px-5 py-4 text-left transition-colors rounded-l-xl"
                >
                  <div className={cn(
                    'flex items-center justify-center size-7 rounded-lg text-xs font-bold transition-colors',
                    isOpen
                      ? `bg-zinc-800 ${config.accent}`
                      : 'bg-zinc-800/50 text-zinc-500'
                  )}>
                    {lessonIdx + 1}
                  </div>
                  <span className={cn(
                    'flex-1 font-semibold transition-colors',
                    isOpen ? 'text-zinc-100' : 'text-zinc-300'
                  )}>
                    {lesson.title}
                  </span>
                  <div className={cn(
                    'transition-transform duration-300',
                    isOpen ? 'rotate-180' : 'rotate-0'
                  )}>
                    {isOpen ? (
                      <ChevronDown className={cn('size-5', config.accent)} />
                    ) : (
                      <ChevronRight className="size-5 text-zinc-600" />
                    )}
                  </div>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setFullScreenLessonIdx(lessonIdx) }}
                  className="p-4 rounded-r-xl text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800/60 transition-colors"
                  title="Tam ekran oku"
                >
                  <Maximize2 className="size-4" />
                </button>
              </div>

              {isOpen && (
                <div className="px-5 pb-5 space-y-4 animate-fade-in">
                  <div className="h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
                  {lesson.blocks.map((block, idx) => {
                    switch (block.type) {
                      case 'text':
                        return (
                          <p key={idx} className="text-[15px] text-zinc-300 leading-7 tracking-wide">
                            {block.content}
                          </p>
                        )
                      case 'code':
                        return (
                          <CodeBlock
                            key={idx}
                            code={block.content}
                            language={block.language}
                            title={block.title}
                          />
                        )
                      case 'tip':
                        return (
                          <div
                            key={idx}
                            className="flex gap-3.5 p-4 rounded-xl bg-sky-500/[0.07] border border-sky-500/20 backdrop-blur-sm"
                          >
                            <div className="flex items-center justify-center size-8 rounded-lg bg-sky-500/15 shrink-0">
                              <Lightbulb className="size-4 text-sky-400" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">İpucu</p>
                              <p className="text-sm text-sky-200/80 leading-relaxed">{block.content}</p>
                            </div>
                          </div>
                        )
                      case 'warning':
                        return (
                          <div
                            key={idx}
                            className="flex gap-3.5 p-4 rounded-xl bg-amber-500/[0.07] border border-amber-500/20 backdrop-blur-sm"
                          >
                            <div className="flex items-center justify-center size-8 rounded-lg bg-amber-500/15 shrink-0">
                              <AlertTriangle className="size-4 text-amber-400" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">Dikkat</p>
                              <p className="text-sm text-amber-200/80 leading-relaxed">{block.content}</p>
                            </div>
                          </div>
                        )
                      case 'preview':
                        return (
                          <PreviewBlock key={idx} content={block.content} title={block.title} />
                        )
                      case 'demo':
                        return block.demoId ? (
                          <DemoBlock key={idx} demoId={block.demoId} />
                        ) : null
                      default:
                        return null
                    }
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {fullScreenLessonIdx !== null && (
        <FullScreenLesson
          lesson={section.lessons[fullScreenLessonIdx]}
          lessonIndex={fullScreenLessonIdx}
          totalLessons={section.lessons.length}
          sectionTitle={section.title}
          accentColor={config.accent}
          onClose={() => setFullScreenLessonIdx(null)}
          onNavigate={handleFullScreenNavigate}
        />
      )}
    </div>
  )
}
