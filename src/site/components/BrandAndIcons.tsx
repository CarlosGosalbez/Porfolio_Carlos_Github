export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" /></svg> : <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" /></svg>
}

export function Mark({ small = false }: { small?: boolean }) {
  return <img className={`brand-mark-image${small ? ' brand-mark-image--small' : ''}`} src={`${import.meta.env.BASE_URL}cg-mark.svg`} alt="" aria-hidden="true" />
}
