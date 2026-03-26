import { useState, useRef, useEffect, useCallback } from 'react'
import { Play, RotateCcw, Loader2, CheckCircle2, XCircle, Lightbulb, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react'

// ── Pyodide loader (singleton) ──────────────────────────────
let pyodidePromise = null
function loadPyodideOnce() {
  if (pyodidePromise) return pyodidePromise
  pyodidePromise = new Promise((resolve, reject) => {
    if (window.pyodide) { resolve(window.pyodide); return }
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js'
    script.onload = async () => {
      try {
        const py = await window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/' })
        window.pyodide = py
        resolve(py)
      } catch (e) { reject(e) }
    }
    script.onerror = () => reject(new Error('Gagal load Pyodide'))
    document.head.appendChild(script)
  })
  return pyodidePromise
}

// ── Auto-detect & install packages ──────────────────────────
// Maps import names to Pyodide package names
const IMPORT_TO_PACKAGE = {
  numpy: 'numpy',
  np: 'numpy',
  pandas: 'pandas',
  pd: 'pandas',
  sklearn: 'scikit-learn',
  scipy: 'scipy',
  matplotlib: 'matplotlib',
  seaborn: 'seaborn',
}
// Packages built into Pyodide (use loadPackage, not micropip)
const PYODIDE_BUILTINS = new Set([
  'numpy', 'pandas', 'scipy', 'scikit-learn', 'matplotlib', 'seaborn',
])
// Track already-loaded packages this session
const installedPackages = new Set()

async function ensurePackages(code) {
  const py = window.pyodide
  if (!py) return

  // Parse import/from statements
  const importRegex = /(?:^|\n)\s*(?:import|from)\s+([\w]+)/g
  const needed = new Set()
  let match
  while ((match = importRegex.exec(code)) !== null) {
    const pkg = IMPORT_TO_PACKAGE[match[1]]
    if (pkg && !installedPackages.has(pkg)) needed.add(pkg)
  }
  if (needed.size === 0) return

  // Load each package — prefer Pyodide built-in loadPackage
  for (const pkg of needed) {
    try {
      if (PYODIDE_BUILTINS.has(pkg)) {
        await py.loadPackage(pkg)
      } else {
        await py.loadPackage('micropip')
        const micropip = py.pyimport('micropip')
        await micropip.install(pkg)
      }
      installedPackages.add(pkg)
    } catch {
      // Package unavailable — Python will raise ImportError naturally
    }
  }
}

// ── Line numbers component ──────────────────────────────────
function LineNumbers({ code }) {
  const lines = code.split('\n').length
  return (
    <div className="select-none text-right pr-3 pt-4 pb-4 text-gray-500 text-xs font-mono leading-[1.65] min-w-[2.5rem]">
      {Array.from({ length: lines }, (_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  )
}

// ── Main Component ──────────────────────────────────────────
export default function InteractiveCode({
  initialCode = '',
  expectedOutput = null,
  hint = null,
  title = 'Coba Coding',
  description = null,
  testCode = null,
  difficulty = 'easy',
}) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [pyReady, setPyReady] = useState(false)
  const [loadingPy, setLoadingPy] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [testResult, setTestResult] = useState(null) // 'pass' | 'fail' | null
  const [copied, setCopied] = useState(false)
  const textareaRef = useRef(null)
  const preRef = useRef(null)

  // Load Pyodide lazily when component mounts
  useEffect(() => {
    setLoadingPy(true)
    loadPyodideOnce()
      .then(() => setPyReady(true))
      .catch(() => setOutput('⚠️ Gagal memuat Python runtime. Coba refresh halaman.'))
      .finally(() => setLoadingPy(false))
  }, [])

  // Sync scroll between textarea and pre
  const handleScroll = useCallback(() => {
    if (preRef.current && textareaRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop
      preRef.current.scrollLeft = textareaRef.current.scrollLeft
    }
  }, [])

  // Handle Tab key in textarea
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const start = e.target.selectionStart
      const end = e.target.selectionEnd
      const newCode = code.substring(0, start) + '    ' + code.substring(end)
      setCode(newCode)
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 4
      }, 0)
    }
    // Ctrl/Cmd + Enter to run
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      runCode()
    }
  }

  const runCode = async () => {
    if (!pyReady || isRunning) return
    setIsRunning(true)
    setOutput('')
    setTestResult(null)

    try {
      const py = window.pyodide

      // Auto-install required packages before running
      try {
        await ensurePackages(code)
      } catch {
        // Continue anyway — let Python raise ImportError naturally
      }

      // Redirect stdout
      py.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`)
      try {
        // Run user code
        py.runPython(code)

        // Capture stdout
        const stdout = py.runPython('sys.stdout.getvalue()')
        const stderr = py.runPython('sys.stderr.getvalue()')
        let result = stdout || ''
        if (stderr) result += (result ? '\n' : '') + '⚠️ ' + stderr

        // Run test if provided
        if (testCode) {
          try {
            py.runPython(testCode)
            const testOut = py.runPython('sys.stdout.getvalue()')
            if (testOut.includes('✅') || testOut.includes('PASS')) {
              setTestResult('pass')
            }
            result = testOut
          } catch (testErr) {
            setTestResult('fail')
            result += '\n❌ Test gagal: ' + testErr.message
          }
        } else if (expectedOutput !== null) {
          const trimmed = result.trim()
          const expected = expectedOutput.trim()
          if (trimmed === expected) {
            setTestResult('pass')
          } else {
            setTestResult('fail')
          }
        }

        setOutput(result || '(Program selesai, tidak ada output)')
      } catch (err) {
        const stderr = py.runPython('sys.stderr.getvalue()')
        setOutput('❌ Error:\n' + (stderr || err.message))
        setTestResult('fail')
      }

      // Reset stdout/stderr
      py.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`)
    } catch (err) {
      setOutput('❌ Runtime error: ' + err.message)
    }
    setIsRunning(false)
  }

  const resetCode = () => {
    setCode(initialCode)
    setOutput('')
    setTestResult(null)
    setShowHint(false)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const difficultyColors = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-amber-100 text-amber-700',
    hard: 'bg-red-100 text-red-700',
  }
  const difficultyLabels = { easy: 'Mudah', medium: 'Sedang', hard: 'Sulit' }

  return (
    <div className="my-6 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <h3 className="text-white text-sm font-semibold truncate">{title}</h3>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${difficultyColors[difficulty]}`}>
            {difficultyLabels[difficulty]}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {!pyReady && loadingPy && (
            <span className="text-gray-400 text-xs flex items-center gap-1">
              <Loader2 size={12} className="animate-spin" /> Loading Python...
            </span>
          )}
          {pyReady && (
            <span className="text-green-400 text-xs flex items-center gap-1">
              <CheckCircle2 size={12} /> Python Ready
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className="px-4 py-3 bg-blue-50 border-b border-blue-100">
          <p className="text-sm text-blue-800">{description}</p>
        </div>
      )}

      {/* Code Editor */}
      <div className="relative bg-[#1e1e2e] flex">
        <LineNumbers code={code} />
        <div className="flex-1 relative min-h-[120px]">
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => { setCode(e.target.value); setTestResult(null) }}
            onKeyDown={handleKeyDown}
            onScroll={handleScroll}
            spellCheck={false}
            className="absolute inset-0 w-full h-full bg-transparent text-transparent caret-green-400 font-mono text-sm leading-[1.65] p-4 resize-none outline-none z-10 overflow-auto"
            style={{ tabSize: 4 }}
          />
          <pre
            ref={preRef}
            className="w-full h-full font-mono text-sm leading-[1.65] p-4 text-green-300 whitespace-pre overflow-auto pointer-events-none"
            aria-hidden="true"
          >
            {code || <span className="text-gray-500">Tulis kode Python di sini...</span>}
          </pre>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-2.5 bg-gray-800 border-t border-gray-700 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <button
            onClick={runCode}
            disabled={!pyReady || isRunning}
            className="flex items-center gap-1.5 px-4 py-2 bg-green-600 hover:bg-green-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg transition-colors"
          >
            {isRunning ? <Loader2 size={14} className="animate-spin" /> : <Play size={14} />}
            {isRunning ? 'Running...' : 'Run (Ctrl+Enter)'}
          </button>
          <button
            onClick={resetCode}
            className="flex items-center gap-1.5 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded-lg transition-colors"
          >
            <RotateCcw size={14} /> Reset
          </button>
          <button
            onClick={copyCode}
            className="flex items-center gap-1.5 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded-lg transition-colors"
          >
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {hint && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-1.5 px-3 py-2 bg-amber-600/20 hover:bg-amber-600/30 text-amber-400 text-sm rounded-lg transition-colors"
          >
            <Lightbulb size={14} />
            Hint
            {showHint ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        )}
      </div>

      {/* Hint */}
      {showHint && hint && (
        <div className="px-4 py-3 bg-amber-50 border-t border-amber-200">
          <p className="text-sm text-amber-800">💡 <strong>Hint:</strong> {hint}</p>
        </div>
      )}

      {/* Output */}
      {output && (
        <div className="border-t border-gray-200">
          <div className="px-4 py-2 bg-gray-100 flex items-center gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase">Output</span>
            {testResult === 'pass' && (
              <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                <CheckCircle2 size={12} /> Benar!
              </span>
            )}
            {testResult === 'fail' && (
              <span className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                <XCircle size={12} /> Coba lagi
              </span>
            )}
          </div>
          <pre className={`px-4 py-3 text-sm font-mono whitespace-pre-wrap overflow-x-auto max-h-60 ${
            testResult === 'pass' ? 'bg-green-50 text-green-800' :
            testResult === 'fail' ? 'bg-red-50 text-red-800' :
            'bg-gray-50 text-gray-800'
          }`}>
            {output}
          </pre>
        </div>
      )}

      {/* Expected output hint */}
      {expectedOutput && testResult === 'fail' && (
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            <strong>Expected output:</strong> <code className="bg-gray-200 px-1 rounded">{expectedOutput}</code>
          </p>
        </div>
      )}
    </div>
  )
}

// ── Preset exercise wrapper ─────────────────────────────────
export function CodingExercise({ exercises }) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const exercise = exercises[currentIdx]

  return (
    <div className="my-6">
      {/* Exercise navigation */}
      {exercises.length > 1 && (
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-xs font-bold text-gray-500 uppercase">Latihan:</span>
          {exercises.map((ex, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentIdx === i
                  ? 'bg-green-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {i + 1}. {ex.title}
            </button>
          ))}
        </div>
      )}

      <InteractiveCode
        key={currentIdx}
        title={exercise.title}
        description={exercise.description}
        initialCode={exercise.initialCode}
        expectedOutput={exercise.expectedOutput}
        hint={exercise.hint}
        difficulty={exercise.difficulty || 'easy'}
        testCode={exercise.testCode}
      />
    </div>
  )
}
