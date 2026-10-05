import { profile } from '../../content/profile'
import { translations, type Language } from '../../content/translations'
import { ArrowIcon } from './BrandAndIcons'

export function ContactBlock({ t }: { t: (typeof translations)[Language] }) {
  const email = `mailto:${profile.email}?subject=${encodeURIComponent(t.emailSubject)}`

  return <section className="engineering-contact" aria-labelledby="engineering-contact-title">
    <div className="engineering-contact__copy">
      <p className="eyebrow eyebrow--light">{t.contactEyebrow}</p>
      <h2 id="engineering-contact-title">{t.contactTitle}</h2>
      <p>{t.contactIntro}</p>
    </div>
    <div className="engineering-contact__links">
      <a className="engineering-contact__link" href={email}>
        <span>{t.emailLabel}</span><strong>{profile.email}</strong><ArrowIcon diagonal />
      </a>
      <a className="engineering-contact__link" href={profile.linkedin} target="_blank" rel="noreferrer">
        <span>{t.linkedinLabel}</span><strong>carlosgosalbez</strong><ArrowIcon diagonal />
      </a>
    </div>
  </section>
}
