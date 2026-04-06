import {useState} from 'react'
import {Check, Copy, Terminal} from 'lucide-react'
import {Highlight, themes} from 'prism-react-renderer'
import {cn} from '../lib/utils'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

const langMap: Record<string, string> = {
  ts: 'typescript',
  tsx: 'tsx',
  js: 'javascript',
  jsx: 'jsx',
  json: 'json',
  bash: 'bash',
  sh: 'bash',
  css: 'css',
  html: 'markup',
  xml: 'markup',
}

export function CodeBlock({code, language, title}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const prismLang = langMap[language ?? ''] ?? 'tsx'

  return (
    <div className="group relative rounded-xl border border-zinc-800/80 overflow-hidden my-4 bg-[#0d1117] shadow-lg shadow-black/20 transition-all duration-300 hover:border-zinc-700/80 hover:shadow-xl hover:shadow-black/30">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-zinc-800/60">
        <div className="flex items-center gap-2.5">
          {/* macOS dots */}
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-[#ff5f57] opacity-80" />
            <div className="size-3 rounded-full bg-[#febc2e] opacity-80" />
            <div className="size-3 rounded-full bg-[#28c840] opacity-80" />
          </div>
          {title && (
            <div className="flex items-center gap-1.5 ml-2">
              <Terminal className="size-3.5 text-zinc-500" />
              <span className="text-xs font-medium text-zinc-400">{title}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {language && (
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20">
              {language}
            </span>
          )}
          <button
            onClick={handleCopy}
            className={cn(
              'flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200',
              copied
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 opacity-0 group-hover:opacity-100'
            )}
          >
            {copied ? (
              <>
                <Check className="size-3.5" />
                <span>Kopyalandı!</span>
              </>
            ) : (
              <>
                <Copy className="size-3.5" />
                <span>Kopyala</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Syntax highlighted code */}
      <Highlight theme={themes.nightOwl} code={code.trim()} language={prismLang}>
        {({tokens, getLineProps, getTokenProps}) => (
          <div className="relative overflow-x-auto">
            <pre className="p-5 text-[13px] leading-7 font-mono" style={{background: 'transparent'}}>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({line, key: i})
                return (
                  <div key={i} {...lineProps} className="table-row">
                    {/* Line number */}
                    <span className="table-cell pr-5 text-right text-zinc-600 select-none text-[12px] w-8 sticky left-0 bg-[#0d1117]">
                      {i + 1}
                    </span>
                    {/* Line content */}
                    <span className="table-cell">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({token, key})} />
                      ))}
                    </span>
                  </div>
                )
              })}
            </pre>
          </div>
        )}
      </Highlight>
    </div>
  )
}
