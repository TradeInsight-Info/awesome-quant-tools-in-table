import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'light'
  })

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    }
  }, [isLight])

  return (
    <button
      onClick={() => setIsLight(v => !v)}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      style={{
        background: 'none',
        border: '1px solid var(--border-default)',
        borderRadius: '4px',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        transition: 'color 0.15s, border-color 0.15s',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color = 'var(--text-gold)'
        e.currentTarget.style.borderColor = 'rgba(211, 167, 75, 0.3)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = 'var(--text-secondary)'
        e.currentTarget.style.borderColor = 'var(--border-default)'
      }}
    >
      {isLight ? <Moon size={14} /> : <Sun size={14} />}
    </button>
  )
}
