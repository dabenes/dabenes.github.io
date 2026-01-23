export const useTerminalStyles = () => {
  const terminalClasses = {
    prompt: 'font-mono text-sm text-white',
    user: 'text-cyan-400',
    host: 'text-gray-500',
    separator: 'text-gray-700',
    cmd: 'text-cyan-400',
    path: 'text-gray-300',
    arrow: 'text-cyan-300 animate-slide-in-arrow',
    navLinkActive: 'text-cyan-400 bg-cyan-500/10 rounded animate-glow-in',
    text: 'font-mono text-gray-300',
    success: 'text-green-400',
    error: 'text-red-400',
    warning: 'text-yellow-400',
    container: 'bg-slate-950 border border-gray-800 rounded-lg p-4 font-mono text-sm text-gray-300',
    line: 'flex items-center gap-2 py-1'
  }

  const getTerminalClass = (key: keyof typeof terminalClasses) => {
    return terminalClasses[key]
  }

  return {
    terminalClasses,
    getTerminalClass
  }
}
