import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight, Maximize2, BookOpen, AlertTriangle, Lightbulb } from 'lucide-react'
import { cn } from '../lib/utils'
import { CodeBlock } from './CodeBlock'
import { PreviewBlock } from './PreviewBlock'
import { DemoBlock } from './demos'
import type { Lesson, LessonBlock } from './GuideSection'

interface FullScreenLessonProps {
  lesson: Lesson
  lessonIndex: number
  totalLessons: number
  sectionTitle: string
  accentColor: string
  onClose: () => void
  onNavigate: (direction: 'prev' | 'next') => void
}

interface ContentPage {
  left: LessonBlock[]
  right: LessonBlock[]
}

function splitBlocksIntoPages(blocks: LessonBlock[]): ContentPage[] {
  const pages: ContentPage[] = []
  let currentLeft: LessonBlock[] = []
  let currentRight: LessonBlock[] = []

  for (const block of blocks) {
    if (block.type === 'text' || block.type === 'tip' || block.type === 'warning') {
      currentLeft.push(block)
    } else {
      currentRight.push(block)
    }

    // Create a page when we have both sides with content, or enough content on one side
    const leftHeavy = currentLeft.length >= 3 && currentRight.length >= 1
    const rightHeavy = currentRight.length >= 2 && currentLeft.length >= 1
    const balanced = currentLeft.length >= 2 && currentRight.length >= 1

    if (leftHeavy || rightHeavy || balanced) {
      pages.push({ left: currentLeft, right: currentRight })
      currentLeft = []
      currentRight = []
    }
  }

  // Push remaining blocks
  if (currentLeft.length > 0 || currentRight.length > 0) {
    pages.push({ left: currentLeft, right: currentRight })
  }

  // If no pages were created, create one with all blocks on appropriate sides
  if (pages.length === 0 && blocks.length > 0) {
    const left = blocks.filter(b => b.type === 'text' || b.type === 'tip' || b.type === 'warning')
    const right = blocks.filter(b => b.type !== 'text' && b.type !== 'tip' && b.type !== 'warning')
    pages.push({ left, right })
  }

  return pages
}

function renderBlock(block: LessonBlock, idx: number) {
  switch (block.type) {
    case 'text':
      return (
        <p key={idx} className="text-[15px] text-zinc-300 leading-8 tracking-wide">
          {block.content}
        </p>
      )
    case 'tip':
      return (
        <div key={idx} className="flex gap-3 p-4 rounded-xl bg-sky-500/[0.07] border border-sky-500/20">
          <div className="flex items-center justify-center size-7 rounded-lg bg-sky-500/15 shrink-0 mt-0.5">
            <Lightbulb className="size-3.5 text-sky-400" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider mb-1">İpucu</p>
            <p className="text-sm text-sky-200/80 leading-relaxed">{block.content}</p>
          </div>
        </div>
      )
    case 'warning':
      return (
        <div key={idx} className="flex gap-3 p-4 rounded-xl bg-amber-500/[0.07] border border-amber-500/20">
          <div className="flex items-center justify-center size-7 rounded-lg bg-amber-500/15 shrink-0 mt-0.5">
            <AlertTriangle className="size-3.5 text-amber-400" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-1">Dikkat</p>
            <p className="text-sm text-amber-200/80 leading-relaxed">{block.content}</p>
          </div>
        </div>
      )
    case 'code':
      return (
        <CodeBlock key={idx} code={block.content} language={block.language} title={block.title} />
      )
    case 'preview':
      return (
        <PreviewBlock key={idx} content={block.content} title={block.title} />
      )
    case 'demo':
      return block.demoId ? <DemoBlock key={idx} demoId={block.demoId} /> : null
    default:
      return null
  }
}

export function FullScreenLesson({
  lesson,
  lessonIndex,
  totalLessons,
  sectionTitle,
  accentColor,
  onClose,
  onNavigate,
}: FullScreenLessonProps) {
  const pages = splitBlocksIntoPages(lesson.blocks)
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = pages.length

  const goNext = useCallback(() => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(p => p + 1)
    }
  }, [currentPage, totalPages])

  const goPrev = useCallback(() => {
    if (currentPage > 0) {
      setCurrentPage(p => p - 1)
    }
  }, [currentPage])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goNext()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, goNext, goPrev])

  // Reset page when lesson changes
  useEffect(() => {
    setCurrentPage(0)
  }, [lesson.id])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const page = pages[currentPage]
  const hasLeft = page?.left.length > 0
  const hasRight = page?.right.length > 0

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col animate-fade-in">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-zinc-800/80 bg-zinc-900/80 backdrop-blur-xl shrink-0">
        <div className="flex items-center gap-3">
          <Maximize2 className={cn('size-4', accentColor)} />
          <div>
            <span className="text-xs text-zinc-500">{sectionTitle}</span>
            <h2 className="text-sm font-semibold text-zinc-200">{lesson.title}</h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Page indicator */}
          <div className="flex items-center gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={cn(
                  'transition-all duration-300 rounded-full',
                  i === currentPage
                    ? `w-6 h-2 ${accentColor === 'text-emerald-400' ? 'bg-emerald-500' : accentColor === 'text-amber-400' ? 'bg-amber-500' : accentColor === 'text-rose-400' ? 'bg-rose-500' : 'bg-violet-500'}`
                    : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-600'
                )}
              />
            ))}
          </div>

          <span className="text-xs text-zinc-500 tabular-nums">
            {currentPage + 1} / {totalPages}
          </span>

          {/* Lesson navigation */}
          <div className="flex items-center gap-1 border-l border-zinc-800 pl-4">
            <button
              onClick={() => onNavigate('prev')}
              disabled={lessonIndex === 0}
              className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              title="Önceki ders"
            >
              <BookOpen className="size-4" />
            </button>
            <span className="text-xs text-zinc-600 tabular-nums mx-1">
              Ders {lessonIndex + 1}/{totalLessons}
            </span>
            <button
              onClick={() => onNavigate('next')}
              disabled={lessonIndex === totalLessons - 1}
              className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              title="Sonraki ders"
            >
              <BookOpen className="size-4" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-zinc-200 transition-colors"
            title="Kapat (Esc)"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>

      {/* Content Area - Split View */}
      <div className="flex-1 overflow-hidden">
        <div className={cn(
          'h-full',
          hasLeft && hasRight ? 'grid grid-cols-2' : 'flex'
        )}>
          {/* Left Panel — Text / Tips / Warnings */}
          {hasLeft && (
            <div className={cn(
              'h-full overflow-y-auto border-r border-zinc-800/60',
              !hasRight && 'max-w-3xl mx-auto'
            )}>
              <div className="p-8 lg:p-10 space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className={cn('w-1 h-6 rounded-full', accentColor === 'text-emerald-400' ? 'bg-emerald-500' : accentColor === 'text-amber-400' ? 'bg-amber-500' : accentColor === 'text-rose-400' ? 'bg-rose-500' : 'bg-violet-500')} />
                  <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Açıklama</span>
                </div>
                {page.left.map((block, idx) => renderBlock(block, idx))}
              </div>
            </div>
          )}

          {/* Right Panel — Code / Preview / Demo */}
          {hasRight && (
            <div className={cn(
              'h-full overflow-y-auto bg-zinc-900/30',
              !hasLeft && 'max-w-4xl mx-auto w-full'
            )}>
              <div className="p-8 lg:p-10 space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-6 rounded-full bg-blue-500" />
                  <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Kod & Çıktı</span>
                </div>
                {page.right.map((block, idx) => renderBlock(block, idx))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between px-6 py-3 border-t border-zinc-800/80 bg-zinc-900/80 backdrop-blur-xl shrink-0">
        <button
          onClick={goPrev}
          disabled={currentPage === 0}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
            currentPage === 0
              ? 'text-zinc-600 cursor-not-allowed'
              : 'text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100'
          )}
        >
          <ChevronLeft className="size-4" />
          Önceki
        </button>

        <div className="flex items-center gap-1 text-xs text-zinc-600">
          <span>← →</span>
          <span className="ml-1">ok tuşları ile gezin</span>
          <span className="mx-2">·</span>
          <span>Esc</span>
          <span className="ml-1">kapatır</span>
        </div>

        <button
          onClick={goNext}
          disabled={currentPage === totalPages - 1}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
            currentPage === totalPages - 1
              ? 'text-zinc-600 cursor-not-allowed'
              : cn('text-white', accentColor === 'text-emerald-400' ? 'bg-emerald-600 hover:bg-emerald-500' : accentColor === 'text-amber-400' ? 'bg-amber-600 hover:bg-amber-500' : accentColor === 'text-rose-400' ? 'bg-rose-600 hover:bg-rose-500' : 'bg-violet-600 hover:bg-violet-500')
          )}
        >
          Sonraki
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>,
    document.body
  )
}
