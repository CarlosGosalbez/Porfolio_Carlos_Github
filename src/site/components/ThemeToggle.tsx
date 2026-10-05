import type { Theme } from '../hooks/useTheme'

type ThemeToggleProps = {
  theme: Theme
  label: string
  onToggle: () => void
}

export function ThemeToggle({ theme, label, onToggle }: ThemeToggleProps) {
  return <button className="theme-toggle" onClick={onToggle} aria-label={label} title={label} aria-pressed={theme === 'dark'}>
    <svg className={`theme-toggle__icon theme-toggle__icon--${theme}`} aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <g className="theme-toggle__sun"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></g>
      <path className="theme-toggle__moon" d="M20.2 15.3A8.7 8.7 0 0 1 8.7 3.8 8.8 8.8 0 1 0 20.2 15.3Z" />
    </svg>
  </button>
}
