import { useEffect, useState } from 'react'
import { profile } from '../content/profile'
import { translations, type Language } from '../content/translations'
import { Mark } from './components/BrandAndIcons'
import { ThemeToggle } from './components/ThemeToggle'
import { useTheme } from './hooks/useTheme'

const indexLabels = {
  es: {
    pageTitle: 'Registro de ingeniería',
    caseNotes: 'Notas del caso',
    openNotes: 'Abrir notas de construcción',
    closeNotes: 'Cerrar notas',
    protocol: 'Protocolo de prueba',
    protocolIntro: 'Un mapa breve de cómo convierto contexto en evidencia utilizable.',
    workLog: 'Registro de trabajo',
    notes: 'Notas de campo',
    approach: 'Criterios de trabajo',
    toolchain: 'Herramientas en contexto',
    background: 'Formación e idiomas',
    contact: 'Contacto',
    access: 'ACCESO',
    entry: 'ENTRADA',
    location: 'ALICANTE, ESPAÑA',
    noMetrics: 'Sin métricas públicas ni código enlazado',
    endNote: 'Cuaderno abierto · Feedback técnico bienvenido',
  },
  en: {
    pageTitle: 'Engineering index',
    caseNotes: 'Case notes',
    openNotes: 'Open build notes',
    closeNotes: 'Close notes',
    protocol: 'Test protocol',
    protocolIntro: 'A short map of how I turn context into usable evidence.',
    workLog: 'Work record',
    notes: 'Field notes',
    approach: 'Working criteria',
    toolchain: 'Tools in context',
    background: 'Education & languages',
    contact: 'Contact',
    access: 'SOURCE',
    entry: 'ENTRY',
    location: 'ALICANTE, SPAIN',
    noMetrics: 'No public metrics or source code linked',
    endNote: 'Open notebook · Technical feedback welcome',
  },
} as const

export function App() {
  const [language, setLanguage] = useState<Language>('es')
  const { theme, toggleTheme } = useTheme()
  const t = translations[language]
  const labels = indexLabels[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.metaTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDescription)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.metaTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.metaDescription)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'es' ? 'es_ES' : 'en_GB')
  }, [language, t.metaDescription, t.metaTitle])

  return <>
    <a className="skip-link" href="#contenido">{t.skip}</a>
    <header className="field-header">
      <a className="field-brand" href="#inicio" aria-label={profile.name}>
        <Mark />
        <span><strong>{profile.name}</strong><small>QA / AUTOMATION / SYSTEMS</small></span>
      </a>
      <nav className="field-nav" aria-label={t.navLabel}>
        <a href="#proyectos">{t.nav[0]}</a>
        <a href="#aportacion">{t.nav[1]}</a>
        <a href="#experiencia">{t.nav[2]}</a>
        <a href="#perfil">{t.nav[3]}</a>
        <a href="#contacto">{t.nav[4]}</a>
      </nav>
      <div className="field-tools">
        <div className="language-switch" role="group" aria-label={t.language}>
          <button onClick={() => setLanguage('es')} aria-pressed={language === 'es'}>ES</button>
          <button onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
        </div>
        <ThemeToggle theme={theme} label={theme === 'dark' ? t.themeToLight : t.themeToDark} onToggle={toggleTheme} />
      </div>
    </header>

    <main className="field-document" id="contenido">
      <div className="document-meta" id="inicio">
        <span>FIELD INDEX / 2026</span><span>{labels.location}</span><span>{t.availability}</span>
      </div>
      <section className="document-intro" aria-labelledby="document-title">
        <p className="document-kicker">{labels.pageTitle} <span>—</span> {t.title}</p>
        <h1 id="document-title">{language === 'es' ? <>Probar lo que<br />puede fallar.</> : <>Test what<br />can fail.</>}</h1>
        <div className="intro-aside">
          <p>{t.intro}</p>
          <div className="intro-tags"><span>QA</span><span>TEST AUTOMATION</span><span>AI-ASSISTED BUILDS</span></div>
        </div>
      </section>

      <section className="case-index" id="proyectos" aria-labelledby="case-index-title">
        <div className="section-label"><span>01 / {t.sections[0]}</span><span>{profile.projects.length.toString().padStart(2, '0')} {language === 'es' ? 'REGISTROS' : 'RECORDS'}</span></div>
        <div className="index-heading">
          <h2 id="case-index-title">{labels.caseNotes}</h2>
          <p>{t.projectsAside}</p>
        </div>
        <div className="case-list">
          {profile.projects.map((project, index) => {
            const copy = t.projects[index]
            return <article className="case-record" key={project.id}>
              <div className="case-id"><span>{project.number}</span><small>{copy.category}</small></div>
              <div className="case-main">
                <div className="case-title-line"><h3>{copy.name}</h3><span className="case-status"><i />{copy.status}</span></div>
                <h4>{copy.headline}</h4>
                <p className="case-summary">{copy.description}</p>
                <div className="case-evidence">
                  <span>{labels.access}: {copy.access}</span>
                  {project.stack.length > 0 && <ul aria-label={t.stackLabel}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>}
                </div>
                <details className="case-details">
                  <summary>{labels.openNotes}<span aria-hidden="true">+</span></summary>
                  <dl>
                    <div><dt>{t.projectScope}</dt><dd>{copy.description}</dd></div>
                    <div><dt>{t.projectBuild}</dt><dd>{copy.buildNotes}</dd></div>
                    <div><dt>{t.projectRole}</dt><dd>{copy.contribution}</dd></div>
                  </dl>
                </details>
                {'link' in project && project.link && <a className="case-link" href={project.link} target="_blank" rel="noreferrer">{copy.linkLabel} ↗</a>}
              </div>
            </article>
          })}
        </div>
      </section>

      <section className="protocol-section" id="aportacion" aria-labelledby="protocol-title">
        <div className="section-label"><span>02 / {t.sections[1]}</span><span>RISK → CHECK → REVIEW</span></div>
        <div className="index-heading">
          <h2 id="protocol-title">{labels.protocol}</h2>
          <p>{t.loopIntro || labels.protocolIntro}</p>
        </div>
        <ol className="protocol-list">
          {t.loopCards.map((item, index) => <li key={item.label}>
            <span className="protocol-number">0{index + 1}</span>
            <div className="protocol-copy"><span>{item.label}</span><h3>{item.title}</h3><p>{item.body}</p></div>
          </li>)}
        </ol>
      </section>

      <section className="work-section" id="experiencia" aria-labelledby="work-title">
        <div className="section-label"><span>03 / {t.sections[2]}</span><span>2018 — 2026</span></div>
        <div className="index-heading">
          <h2 id="work-title">{labels.workLog}</h2>
          <p>{t.experienceAside}</p>
        </div>
        <div className="work-list">
          {profile.experience.map((item, index) => {
            const current = 'current' in item && item.current
            const copy = t.experience[index]
            return <article className="work-record" key={`${item.period}-${item.role}`}>
              <time>{t.experiencePeriods[index]}</time>
              <div><h3>{copy.role}{current && <span className="current-marker"> · {t.current}</span>}</h3><p className="work-company">{t.companies[index]}</p><p className="work-detail">{copy.detail}</p></div>
            </article>
          })}
        </div>
      </section>

      <section className="notes-section" id="perfil" aria-labelledby="notes-title">
        <div className="section-label"><span>04 / {t.sections[4]}</span><span>{labels.noMetrics}</span></div>
        <div className="notes-grid">
          <div className="notes-story">
            <h2 id="notes-title">{labels.notes}</h2>
            <p className="notes-lead">{t.story}</p>
            <p>{t.impact}</p>
            <blockquote>{t.profileNote}<cite>{t.noteLabel}</cite></blockquote>
          </div>
          <div className="notes-side">
            <div className="criteria-block"><h3>{labels.approach}</h3><ol>{t.approach.map((item, index) => <li key={item.title}><span>0{index + 1}</span><div><strong>{item.title}</strong><p>{item.body}</p></div></li>)}</ol></div>
            <div className="toolchain-block"><h3>{labels.toolchain}</h3><p>{t.skillsIntro}</p><div className="tool-groups">{profile.skills.map((group, index) => <div key={group.label}><h4>{t.skillGroups[index]}</h4><p>{group.items.join(' · ')}</p></div>)}</div></div>
            <div className="background-block"><h3>{labels.background}</h3>{t.education.map((item) => <p key={item.title}><strong>{item.title}</strong><span>{item.detail}</span></p>)}<p><strong>{t.languagesTitle}</strong><span>{t.languageLevels.join(' · ')}</span></p></div>
          </div>
        </div>
      </section>

      <footer className="field-footer" id="contacto">
        <div><span className="section-label-inline">05 / {labels.contact}</span><h2>{t.contactIntro}</h2></div>
        <div className="footer-links"><a href={`mailto:${profile.email}?subject=${encodeURIComponent(t.emailSubject)}`}>{profile.email} ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        <p>{labels.endNote} <span>· © {new Date().getFullYear()} {profile.name}</span></p>
      </footer>
    </main>
  </>
}
