import { useEffect, useState } from 'react'
import { profile } from '../content/profile'
import { translations, type Language } from '../content/translations'
import { ArrowIcon, Mark } from './components/BrandAndIcons'
import { GridIllustration, HeroGraphic } from './components/Artwork'
import { ContactBlock } from './components/ContactBlock'
import { useTheme } from './hooks/useTheme'
import { ThemeToggle } from './components/ThemeToggle'

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>('es')
  const [openExperience, setOpenExperience] = useState<number | null>(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme, toggleTheme } = useTheme()
  const t = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.metaTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDescription)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.metaTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.metaDescription)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'es' ? 'es_ES' : 'en_GB')
  }, [language, t.metaDescription, t.metaTitle])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return <>
    <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} aria-hidden="true" />
    <a className="skip-link" href="#contenido">{t.skip}</a>
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label={profile.name} onClick={closeMenu}>
        <Mark />
        <span className="brand__name">CARLOS GOSÁLBEZ<span>ENGINEERING NOTES · BUG HUNTING</span></span>
      </a>
      <div className="header-actions">
        <div className="language-switch" role="group" aria-label={t.language}>
          <button onClick={() => setLanguage('es')} aria-pressed={language === 'es'}>ES</button>
          <button onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
        </div>
        <ThemeToggle theme={theme} label={theme === 'dark' ? t.themeToLight : t.themeToDark} onToggle={toggleTheme} />
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? t.close : t.menu}</span><i aria-hidden="true">{menuOpen ? '×' : '☰'}</i>
        </button>
        <nav id="main-navigation" className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label={t.navLabel}>
          <a href="#proyectos" onClick={closeMenu}>{t.nav[0]}</a>
          <a href="#aportacion" onClick={closeMenu}>{t.nav[1]}</a>
          <a href="#experiencia" onClick={closeMenu}>{t.nav[2]}</a>
          <a href="#perfil" onClick={closeMenu}>{t.nav[3]}</a>
          <a className="nav-contact" href="#contacto" onClick={closeMenu}>{t.nav[4]} <ArrowIcon diagonal /></a>
          <div className="nav-preferences">
            <div className="language-switch" role="group" aria-label={t.language}>
              <button onClick={() => setLanguage('es')} aria-pressed={language === 'es'}>ES</button>
              <button onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
            </div>
            <ThemeToggle theme={theme} label={theme === 'dark' ? t.themeToLight : t.themeToDark} onToggle={toggleTheme} />
          </div>
        </nav>
      </div>
    </header>

    <main id="contenido">
      <section className="hero section-shell" id="inicio">
        <div className="hero__grid-layout">
          <div className="hero__content">
            <div className="availability"><span className="availability__dot" />{t.availability}</div>
            <p className="eyebrow">{t.location} <span>·</span> {t.title}</p>
            <h1>{t.heroTitle}<span className="hero__period">.</span></h1>
            <p className="hero__intro">{t.intro}</p>
            <div className="hero__actions">
              <a className="button button--dark" href="#proyectos">{t.explore} <ArrowIcon /></a>
              <a className="text-link" href="#aportacion">{t.journey} <span>↓</span></a>
            </div>
          </div>
          <HeroGraphic label={t.artLabel} language={language} />
          <div className="hero__footer"><span>{t.heroFootLeft}</span><span>{t.heroFootRight} <i>↓</i></span></div>
        </div>
      </section>

      <section className="intro-strip" aria-label={t.stripBottom}>
        <div className="section-shell intro-strip__inner">
          <p>{t.stripTop}</p><span className="intro-strip__mark">CG<span>®</span></span><p>{t.stripBottom}</p>
        </div>
      </section>

      <section className="projects-section" id="proyectos">
        <div className="section-shell">
          <div className="section-heading section-heading--row" data-reveal>
            <div><p className="eyebrow"><span className="section-index">01</span> {t.sections[0]}</p><h2>{t.projectsTitle}</h2></div>
            <p className="section-aside">{t.projectsAside}</p>
          </div>
          <div className="projects-list">
            {profile.projects.map((project, index) => {
              const copy = t.projects[index]
              const logo = 'logo' in project ? project.logo : undefined
              const featureImage = 'featureImage' in project ? project.featureImage : undefined
              return <article className={`project-card project-card--${project.visual}`} key={project.id} data-reveal>
                <GridIllustration type={project.visual} t={t} featureImage={featureImage} />
                <div className="project-card__content">
                  <div className="project-card__meta"><span>{project.number} / {copy.category}</span><span className="project-status"><i />{copy.status}</span></div>
                  <div className="project-title-row">{logo && <img className="project-logo" src={logo} alt="" loading="lazy" />}<h3>{copy.name}</h3></div>
                  <h4>{copy.headline}</h4>
                  <dl className="project-facts">
                    <div><dt>{t.projectScope}</dt><dd>{copy.description}</dd></div>
                    <div><dt>{t.projectBuild}</dt><dd>{copy.buildNotes}</dd></div>
                    <div><dt>{t.projectRole}</dt><dd>{copy.contribution}</dd></div>
                  </dl>
                  {project.stack.length > 0 && <div className="project-stack"><span>{t.stackLabel}</span><ul className="tag-list" aria-label={t.stackLabel}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div>}
                  <span className="project-access">{copy.access}</span>
                  {'link' in project && project.link && <a className="inline-link project-link" href={project.link} target="_blank" rel="noreferrer">{'linkLabel' in copy ? copy.linkLabel : ''} <ArrowIcon diagonal /></a>}
                </div>
              </article>
            })}
          </div>
        </div>
      </section>

      <section className="qa-loop engineering-loop" id="aportacion">
        <div className="section-shell">
          <div className="section-heading" data-reveal>
            <p className="eyebrow"><span className="section-index">02</span> {t.sections[1]}</p>
            <h2>{t.loopTitle}</h2>
            <p className="section-aside qa-loop-intro">{t.loopIntro}</p>
          </div>
          <div className="qa-loop-grid">
            {t.loopCards.map((item, index) => <article className="qa-loop-card" key={item.title} data-reveal>
              <span className="qa-loop-card__number">0{index + 1}</span>
              <p className="qa-loop-card__label">{item.label}</p>
              <h3>{item.title}</h3>
              <p className="qa-loop-card__body">{item.body}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section section-shell experience-section" id="experiencia">
        <div className="section-heading section-heading--row" data-reveal>
          <div><p className="eyebrow"><span className="section-index">03</span> {t.sections[2]}</p><h2>{t.experienceTitle}</h2></div>
          <p className="section-aside">{t.experienceAside}</p>
        </div>
        <div className="experience-list">
          {profile.experience.map((item, index) => {
            const copy = t.experience[index]
            const current = 'current' in item && item.current
            return <details className={`experience-item${current ? ' experience-item--current' : ''}`} key={`${item.period}-${item.role}`} data-reveal open={index === openExperience} name="experience">
              <summary onClick={(event) => { event.preventDefault(); setOpenExperience(openExperience === index ? null : index) }}>
                <span className="experience-item__period">{t.experiencePeriods[index]}{current && <span className="experience-current"> · {t.current}</span>}</span>
                <span className="experience-item__main"><strong>{copy.role}</strong><span>{t.companies[index]}</span></span>
                <span className="experience-item__toggle"><span className="experience-item__label"><span className="experience-label--open">{t.collapse}</span><span className="experience-label--closed">{t.expand}</span></span><i aria-hidden="true">+</i></span>
                <span className="experience-item__marker" aria-hidden="true" />
              </summary>
              <p className="experience-item__detail">{copy.detail}</p>
            </details>
          })}
        </div>
      </section>

      <section className="skills-section">
        <div className="section-shell skills-layout">
          <div className="skills-intro" data-reveal><p className="eyebrow eyebrow--light"><span className="section-index">04</span> {t.sections[3]}</p><h2>{t.skillsTitle}</h2><p>{t.skillsIntro}</p></div>
          <div className="skills-grid">{profile.skills.map((group, index) => <article className="skill-group" key={group.label} data-reveal><span className="skill-group__number">0{index + 1}</span><h3>{t.skillGroups[index]}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section className="section section-shell profile-section" id="perfil">
        <div className="section-heading" data-reveal><p className="eyebrow"><span className="section-index">05</span> {t.sections[4]}</p><h2>{t.profileTitle}</h2></div>
        <div className="profile-grid">
          <div className="profile-main" data-reveal><p className="lead">{t.story}</p><p className="body-copy">{t.impact}</p><a className="inline-link" href="#proyectos">{t.projectsLink} <ArrowIcon /></a></div>
          <aside className="profile-note" data-reveal><div className="note-mark"><Mark small /></div><p>{t.profileNote}</p><span>{t.noteLabel}</span></aside>
        </div>
        <div className="approach-grid">{t.approach.map((item, index) => <article className="approach-card" key={item.title} data-reveal><span className="approach-card__number">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </section>

      <section className="section section-shell education-section">
        <div className="section-heading" data-reveal><p className="eyebrow"><span className="section-index">06</span> {t.sections[5]}</p><h2>{t.educationTitle}</h2></div>
        <div className="education-grid">{profile.education.map((item, index) => <article className="education-item" key={item.title} data-reveal><span className="education-item__icon" aria-hidden="true">↗</span><div><h3>{t.education[index].title}</h3><p>{t.education[index].detail}</p></div></article>)}<article className="education-item education-item--language" data-reveal><span className="education-item__icon" aria-hidden="true">文</span><div><h3>{t.languagesTitle}</h3><p>{t.languageLevels.join(' · ')}</p></div></article></div>
      </section>

      <section className="contact-section" id="contacto"><div className="section-shell"><ContactBlock t={t} /><div className="contact-footer"><span>{t.contactFooter}</span></div></div></section>
    </main>
    <footer className="site-footer section-shell"><a className="footer-brand" href="#inicio"><Mark small /><span>CARLOS GOSÁLBEZ</span></a><div className="footer-links"><span>© {new Date().getFullYear()} · Alicante</span></div></footer>
  </>
}
