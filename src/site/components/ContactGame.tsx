import { useEffect, useLayoutEffect, useRef, useState, type FormEvent } from 'react'
import { profile } from '../../content/profile'
import { translations, type Language } from '../../content/translations'
import { ArrowIcon } from './BrandAndIcons'

type ContactDetails = { name: string; email: string; company: string; role: string; description: string }
type Stage = 'prompt' | 'profile' | 'form' | 'sent'

export function ContactGame({ t, language }: { t: (typeof translations)[Language]; language: Language }) {
  const areaRef = useRef<HTMLDivElement>(null)
  const noRef = useRef<HTMLButtonElement>(null)
  const yesRef = useRef<HTMLButtonElement>(null)
  const panelTitleRef = useRef<HTMLHeadingElement>(null)
  const previousStageRef = useRef<Stage>('prompt')
  const [attempts, setAttempts] = useState(0)
  const [noBecameYes, setNoBecameYes] = useState(false)
  const [stage, setStage] = useState<Stage>('prompt')
  const [details, setDetails] = useState<ContactDetails>({ name: '', email: '', company: '', role: '', description: '' })
  const [message, setMessage] = useState('')
  const openProfile = () => { setStage('profile'); setMessage('') }
  useEffect(() => {
    if (previousStageRef.current === stage) return
    previousStageRef.current = stage
    if (stage === 'prompt') yesRef.current?.focus()
    else panelTitleRef.current?.focus()
  }, [stage])
  const positionNo = () => {
    const area = areaRef.current
    const button = noRef.current
    if (!area || !button || noBecameYes) return
    const areaBounds = area.getBoundingClientRect()
    const buttonBounds = button.getBoundingClientRect()
    const yesBounds = area.querySelector('.button--lime')?.getBoundingClientRect()
    const maxLeft = Math.max(0, areaBounds.width - buttonBounds.width)
    const maxTop = Math.max(0, areaBounds.height - buttonBounds.height)
    const gap = 12
    const canPlace = (left: number, top: number) => left >= 0 && top >= 0 && left <= maxLeft && top <= maxTop && (!yesBounds ||
      left + buttonBounds.width <= yesBounds.left - areaBounds.left - gap ||
      left >= yesBounds.right - areaBounds.left + gap ||
      top + buttonBounds.height <= yesBounds.top - areaBounds.top - gap ||
      top >= yesBounds.bottom - areaBounds.top + gap)
    const candidates: Array<{ left: number; top: number }> = []
    for (let attempt = 0; attempt < 64; attempt += 1) {
      const candidate = { left: Math.random() * maxLeft, top: Math.random() * maxTop }
      if (canPlace(candidate.left, candidate.top)) candidates.push(candidate)
    }
    if (!candidates.length && yesBounds) {
      const yesLeft = yesBounds.left - areaBounds.left
      const yesTop = yesBounds.top - areaBounds.top
      const yesRight = yesBounds.right - areaBounds.left
      const yesBottom = yesBounds.bottom - areaBounds.top
      const fallbackTop = [yesTop - buttonBounds.height - gap, yesBottom + gap, 0, maxTop]
      const fallbackLeft = [yesLeft - buttonBounds.width - gap, yesRight + gap, 0, maxLeft]
      for (const top of fallbackTop) for (const left of fallbackLeft) if (canPlace(left, top)) candidates.push({ left, top })
    }
    const target = candidates[Math.floor(Math.random() * candidates.length)]
    if (!target) return
    button.style.left = `${target.left}px`
    button.style.top = `${target.top}px`
    button.style.right = 'auto'
    button.style.bottom = 'auto'
  }
  useLayoutEffect(() => {
    positionNo()
    window.addEventListener('resize', positionNo)
    return () => window.removeEventListener('resize', positionNo)
  }, [noBecameYes])
  const moveNo = () => {
    if (noBecameYes) return
    positionNo()
    const next = attempts + 1
    setAttempts(next)
    if (next >= 9) { setNoBecameYes(true); setMessage(t.noMessages[8]) }
    else setMessage(t.noMessages[next - 1])
  }
  const handleNo = () => {
    if (noBecameYes) { openProfile(); return }
    const next = attempts + 1
    setAttempts(next)
    if (next >= 9) { setNoBecameYes(true); setMessage(t.noMessages[8]) }
    else setMessage(t.noMessages[next - 1])
  }
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const submission = {
      name: String(formData.get('name')).trim(),
      email: String(formData.get('email')).trim(),
      company: String(formData.get('company')).trim(),
      role: String(formData.get('role')).trim(),
      description: String(formData.get('description')).trim(),
    }
    setDetails(submission)
    setStage('sent')
  }
  const emailBody = [
    `${language === 'es' ? 'Hola Carlos' : 'Hi Carlos'},`, '',
    `${language === 'es' ? 'Soy' : 'I’m'} ${details.name}${details.company ? ` (${details.company})` : ''}.`,
    `${language === 'es' ? 'Me gustaría hablar contigo sobre' : 'I’d like to talk with you about'} ${details.role}.`, '',
    details.description, '', `${language === 'es' ? 'Puedes responderme a' : 'You can reply to'}: ${details.email}`,
  ].join('\n')
  const emailSubject = details.role ? `${t.emailSubject}: ${details.role}` : t.emailSubject
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
  const publicMailto = `mailto:${profile.email}?subject=${encodeURIComponent(t.emailSubject)}`
  return <div className="hire-game">
    <div className="hire-game__copy"><p className="eyebrow eyebrow--light">{t.hireEyebrow}</p><h3>{t.hireTitle}</h3><p className="hire-game__hint">{t.hireHint}</p></div>
    <div className="hire-game__action">
      <div className="hire-game__buttons" ref={areaRef}>
        <button className="button button--lime" ref={yesRef} onClick={openProfile}>{t.yes} <ArrowIcon diagonal /></button>
        <button className={`button button--ghost${noBecameYes ? ' button--converted' : ''}`} ref={noRef} onPointerEnter={(event) => { if (event.pointerType === 'mouse' && !noBecameYes) moveNo() }} onClick={handleNo} aria-label={noBecameYes ? t.noYesLabel : t.noLabel}>{noBecameYes ? t.yesAlso : t.no} {noBecameYes && <ArrowIcon diagonal />}</button>
      </div>
      {message && <p className="hire-game__response" aria-live="polite">{message}</p>}
    </div>
    <span className="hire-game__decoration" aria-hidden="true">?</span>

    {stage === 'profile' && <section className="comic-bubble comic-bubble--profile" aria-labelledby="contact-profile-title">
      <span className="comic-bubble__caption">{t.profileBubbleEyebrow}</span>
      <h4 id="contact-profile-title" ref={panelTitleRef} tabIndex={-1}>{t.profileBubbleTitle}</h4>
      <p>{t.profileBubbleCopy}</p>
      <div className="comic-bubble__contacts">
        <a className="comic-bubble__contact" href={publicMailto}><span>{t.emailLabel}</span><strong>{profile.email}</strong><ArrowIcon diagonal /></a>
        <a className="comic-bubble__contact" href={profile.linkedin} target="_blank" rel="noreferrer"><span>{t.linkedinLabel}</span><strong>{profile.linkedin.replace(/^https?:\/\//, '')}</strong><ArrowIcon diagonal /></a>
      </div>
      <p className="comic-bubble__reply">{t.reply}</p>
      <div className="comic-bubble__actions">
        <button className="button button--dark" onClick={() => setStage('form')}>{t.optionalForm} <ArrowIcon /></button>
      </div>
    </section>}

    {stage === 'form' && <section className="contact-form-panel" aria-labelledby="contact-form-title">
      <div className="contact-form-panel__heading"><span className="contact-form-panel__caption">{t.optionalFormLabel}</span><button className="text-button" onClick={openProfile}>← {t.backToContact}</button></div>
      <h4 id="contact-form-title" ref={panelTitleRef} tabIndex={-1}>{t.formIntro}</h4>
      <p className="contact-form-panel__note">{t.formOptionalHint}</p>
      <form className="contact-form" onSubmit={submit}>
        <label>{t.name}<input name="name" autoComplete="name" placeholder={t.namePlaceholder} minLength={2} maxLength={120} required /></label>
        <label>{t.email}<input name="email" type="email" autoComplete="email" placeholder={t.emailPlaceholder} maxLength={254} required /></label>
        <label>{t.company}<input name="company" autoComplete="organization" placeholder={t.companyPlaceholder} maxLength={160} /></label>
        <label>{t.role}<input name="role" placeholder={t.rolePlaceholder} minLength={2} maxLength={120} required /></label>
        <label className="contact-form__wide">{t.description}<textarea name="description" rows={3} minLength={10} maxLength={3000} placeholder={t.descriptionPlaceholder} required /></label>
        <p className="contact-form__privacy">{t.formPrivacy}</p>
        <button className="button button--dark contact-form__wide">{t.submit} <ArrowIcon /></button>
      </form>
    </section>}

    {stage === 'sent' && <section className="comic-bubble comic-bubble--thanks" aria-labelledby="contact-thanks-title">
      <span className="comic-bubble__caption">{t.thankYou}</span>
      <h4 id="contact-thanks-title" ref={panelTitleRef} tabIndex={-1}>{t.thankYouTitle}</h4>
      <p>{t.reply}</p>
      <p className="comic-bubble__sent-summary"><strong>{details.name}</strong>{details.role && <> · {details.role}{details.company ? ` · ${details.company}` : ''}</>}</p>
      <div className="comic-bubble__contacts">
        <a className="comic-bubble__contact" href={mailto}><span>{t.emailLabel}</span><strong>{profile.email}</strong><ArrowIcon diagonal /></a>
        <a className="comic-bubble__contact" href={profile.linkedin} target="_blank" rel="noreferrer"><span>{t.linkedinLabel}</span><strong>{profile.linkedin.replace(/^https?:\/\//, '')}</strong><ArrowIcon diagonal /></a>
      </div>
      <button className="text-button" onClick={openProfile}>{t.backToContact}</button>
    </section>}
  </div>
}
