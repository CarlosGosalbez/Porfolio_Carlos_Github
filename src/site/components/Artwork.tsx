import { translations, type Language } from '../../content/translations'

export function GridIllustration({ type, t, featureImage }: { type: string; t: (typeof translations)[Language]; featureImage?: string }) {
  if (type === 'kickoff') return <div className="project-art project-art--kickoff"><img src={featureImage} alt="" loading="lazy" /><span className="art-index">K—01 / KICKOFF</span></div>
  if (type === 'my-pulse') return <div className="project-art project-art--my-pulse" aria-hidden="true"><span className="my-pulse-wordmark">my<span>pulse</span><i /></span><svg className="my-pulse-wave" viewBox="0 0 560 160" fill="none"><path d="M4 82h112l31-54 49 105 48-83 36 32h39l30-44 39 70 37-28h171" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg><span className="art-index">MP—03</span><span className="my-pulse-caption">{t.myPulseCaption}</span></div>
  if (type === 'financial-ai') return <div className="project-art project-art--financial-ai" aria-hidden="true"><span className="financial-ai-mark">f<span>·</span>ai</span><div className="financial-ai-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><span className="financial-ai-caption">DATA · TRACEABILITY · ANALYSIS</span><span className="art-index">FAI—04</span></div>
  return <div className="project-art project-art--pipeline" aria-hidden="true"><div className="pipeline-grid"><span className="pipeline-node pipeline-node--one">{t.idea}</span><span className="pipeline-node pipeline-node--two">{t.agent}</span><span className="pipeline-node pipeline-node--three">{t.flow}</span><span className="pipeline-node pipeline-node--four">{t.result}</span><i className="pipeline-line pipeline-line--a" /><i className="pipeline-line pipeline-line--b" /><i className="pipeline-line pipeline-line--c" /><i className="pipeline-line pipeline-line--d" /><i className="pipeline-line pipeline-line--e" /><span className="pipeline-core">FOOTBALL<br />MODEL</span></div><span className="art-index">MEMENTO—02</span><span className="pipeline-note">{t.human}<br />{t.loop}</span></div>
}

export function HeroGraphic({ label, language }: { label: string; language: Language }) {
  const copy = language === 'es'
    ? { eyebrow: 'QA LOOP / 01', title: 'El test no acaba en verde', intro: 'Riesgo → check → revisión', stages: [['01', 'Contexto', 'Arquitectura y criterios'], ['02', 'Prueba', 'Automática o manual'], ['03', 'Revisión', 'Señal y seguimiento']], footer: 'REPEATABLE · TRACEABLE · REVIEWED' }
    : { eyebrow: 'QA LOOP / 01', title: 'Green is not the end', intro: 'Risk → check → review', stages: [['01', 'Context', 'Architecture & criteria'], ['02', 'Test', 'Automated or manual'], ['03', 'Review', 'Signal & follow-up']], footer: 'REPEATABLE · TRACEABLE · REVIEWED' }

  return <div className="hero-graphic" role="img" aria-label={label}>
    <div className="hero-graphic__top"><span className="hero-graphic__monogram">CG</span><span>{copy.eyebrow}</span><i aria-hidden="true" /></div>
    <div className="quality-map">
      <div className="quality-map__heading"><p>{copy.title}</p><span>{copy.intro}</span></div>
      <ol className="quality-map__stages">{copy.stages.map(([number, title, detail]) => <li className="quality-stage" key={number}><span className="quality-stage__number">{number}</span><span className="quality-stage__copy"><strong>{title}</strong><small>{detail}</small></span><span className="quality-stage__mark" aria-hidden="true">↗</span></li>)}</ol>
    </div>
    <div className="hero-graphic__bottom"><span>{copy.footer}</span><i aria-hidden="true"><b /><b /><b /><b /></i></div>
  </div>
}
