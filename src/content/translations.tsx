import type { ReactNode } from 'react'

export type Language = 'es' | 'en'

type ProjectCopy = {
  name: string
  category: string
  headline: string
  description: string
  buildNotes: string
  contribution: string
  status: string
  access: string
  linkLabel?: string
}

type Copy = {
  language: string
  skip: string
  navLabel: string
  menu: string
  close: string
  themeToDark: string
  themeToLight: string
  metaTitle: string
  metaDescription: string
  nav: string[]
  availability: string
  location: string
  title: string
  heroTitle: ReactNode
  intro: string
  explore: string
  journey: string
  heroFootLeft: string
  heroFootRight: string
  stripTop: ReactNode
  stripBottom: string
  sections: string[]
  artLabel: string
  projectsTitle: ReactNode
  projectsAside: string
  projectScope: string
  projectBuild: string
  projectRole: string
  stackLabel: string
  myPulseCaption: string
  projects: ProjectCopy[]
  loopTitle: ReactNode
  loopIntro: string
  loopCards: { label: string; title: string; body: string }[]
  experienceTitle: ReactNode
  experienceAside: string
  current: string
  expand: string
  collapse: string
  experience: { role: string; detail: string }[]
  experiencePeriods: string[]
  companies: string[]
  skillsTitle: ReactNode
  skillsIntro: string
  skillGroups: string[]
  profileTitle: ReactNode
  story: string
  impact: string
  projectsLink: string
  profileNote: string
  noteLabel: string
  approach: { title: string; body: string }[]
  educationTitle: ReactNode
  education: { title: string; detail: string }[]
  languagesTitle: string
  languageLevels: string[]
  contactEyebrow: string
  contactTitle: ReactNode
  contactIntro: string
  emailSubject: string
  emailLabel: string
  linkedinLabel: string
  contactFooter: string
  idea: string
  agent: string
  flow: string
  result: string
  human: string
  loop: string
}

const copy: Record<Language, Copy> = {
  es: {
    language: 'Idioma', skip: 'Saltar al contenido', navLabel: 'Navegación principal', menu: 'Menú', close: 'Cerrar', themeToDark: 'Activar modo oscuro', themeToLight: 'Activar modo claro',
    metaTitle: 'Carlos Gosálbez — QA, automatización y notas de ingeniería',
    metaDescription: 'Cuaderno técnico sobre QA, automatización y proyectos personales: alcance, stack, aportación y estado real.',
    nav: ['Build log', 'Loop de QA', 'QA timeline', 'Notas', 'Hablemos'], availability: 'NOTAS TÉCNICAS PÚBLICAS · CÓDIGO PRIVADO',
    location: 'ALICANTE, ESPAÑA', title: 'QA · AUTOMATIZACIÓN · SISTEMAS CON IA',
    heroTitle: <>El happy path<br /><em>no es un plan</em><br />de pruebas</>,
    intro: 'Trabajo en QA y automatización, y dirijo proyectos propios construidos con IA. Este cuaderno recoge el alcance, el stack, mi papel y qué está realmente hecho en cada build.',
    explore: 'Abrir el build log', journey: 'Ver mi loop de QA', heroFootLeft: 'MODO DEBUG: ACTIVADO', heroFootRight: 'BAJA PARA LEER EL LOG',
    stripTop: <>DEL RPA A LA CALIDAD<br />QUE <span>NO SE QUEDA EN VERDE.</span></>, stripBottom: 'TEST · TRACE · ITERATE',
    sections: ['BUILD LOG', 'LOOP DE QA', 'WORK LOG', 'TOOLCHAIN', 'NOTAS DE CAMPO', 'BACKGROUND'],
    artLabel: 'Loop de trabajo de QA: entender el sistema, priorizar riesgo, probar y revisar resultados',
    projectsTitle: <>Qué existe.<br /><em>Qué falta.</em></>,
    projectsAside: 'Cada build resume alcance, stack, autoría y estado. Enlazo los productos que se pueden visitar; los repositorios de código siguen privados.',
    projectScope: 'SCOPE', projectBuild: 'BUILD NOTES', projectRole: 'MI PAPEL', stackLabel: 'STACK', myPulseCaption: 'IMPLEMENTADO / EN CURSO',
    projects: [
      {
        name: 'Kickoff', category: 'APP MÓVIL · REPOSITORIO PRIVADO', headline: 'Organizar el partido sin organizar un grupo de chats.',
        description: 'Una app para coordinar grupos, jugadores, equipos, partidos, resultados, estadísticas y cuentas compartidas.',
        buildNotes: 'Expo, React Native y TypeScript, junto con Supabase y RevenueCat. La ficha no intenta adivinar ni publicar el detalle interno de sus integraciones.',
        contribution: 'Partí de la idea, defino el rumbo del producto y dirijo las iteraciones. La IA genera el código; yo reviso los cambios y decido qué sigue.',
        status: 'Preparando lanzamiento', access: 'Código fuente: privado.', linkLabel: 'Web del producto',
      },
      {
        name: 'Memento-F-tbol', category: 'PROYECTO PERSONAL · REPOSITORIO PRIVADO', headline: 'Un experimento de análisis llevado a término.',
        description: 'Herramienta privada de análisis probabilístico de fútbol. Proyecto personal completado.',
        buildNotes: 'App autoalojada con Python y FastAPI, dashboard HTML/CSS/JavaScript y PostgreSQL en Supabase. El pipeline usa NumPy y SciPy; scikit-learn forma parte del entorno de experimentación.',
        contribution: 'Definí el objetivo, investigué opciones y orienté las iteraciones. La IA generó el código; revisé sus propuestas.',
        status: 'Completado', access: 'Código fuente: privado.',
      },
      {
        name: 'My Pulse', category: 'PRODUCTO DIGITAL · DOS REPOS PRIVADOS', headline: 'Un backend implementado y una web todavía en construcción.',
        description: 'Una app dividida en my-pulse-backend y my-pulse-web. El backend, la base de datos y la IA están implementados; la interfaz web sigue en curso.',
        buildNotes: 'Python, FastAPI, Supabase y LangGraph. LangGraph organiza los flujos de IA del backend.',
        contribution: 'Dirijo el producto y sus iteraciones. La IA genera el código; yo investigo, marco objetivos y reviso lo que produce.',
        status: 'Backend implementado · web en curso', access: 'Código fuente: privado.',
      },
      {
        name: 'financial-ai', category: 'EXPERIMENTO PERSONAL · REPOSITORIO PRIVADO', headline: 'Primero, que el análisis se pueda repetir.',
        description: 'Experimento en curso para estructurar pipelines reproducibles de datos y análisis financieros.',
        buildNotes: 'Qanat organiza los pipelines en Python; PostgreSQL es el almacén persistente principal. DuckDB queda para análisis opcional y compatibilidad; el servicio local se ejecuta con Docker Compose.',
        contribution: 'Investigo alternativas y dirijo las iteraciones. La IA genera el código de este proyecto privado.',
        status: 'En exploración', access: 'Código fuente: privado.',
      },
    ],
    loopTitle: <>Cómo pienso una prueba<br /><em>antes de automatizarla.</em></>,
    loopIntro: 'No todo merece un test end-to-end. Este es el mapa de trabajo que aparece en mi experiencia: riesgos y auditorías, checks automatizados y manuales, y una revisión humana cuando entra IA.',
    loopCards: [
      { label: '01 / CONTEXTO', title: 'Entender el sistema', body: 'Trabajo en proyectos de arquitectura y desarrollo; empiezo por el contexto, los riesgos y los criterios que condicionan la prueba.' },
      { label: '02 / SEÑAL', title: 'Elegir el check', body: 'Selenium y XRAY para automatización; Silk Central para gestionar testing manual. La herramienta depende de lo que haya que observar.' },
      { label: '03 / ASISTENCIA', title: 'IA dentro del loop', body: 'Diseñé agentes con GPT y Copilot para apoyar auditorías y análisis de pruebas en Jira/Xray. La propuesta de IA necesita revisión.' },
      { label: '04 / TRANSPARENCIA', title: 'Separar estado y deseo', body: 'En cada proyecto indico qué está implementado, qué sigue en curso, qué código genera la IA y qué repositorios son privados.' },
    ],
    experienceTitle: <>QA donde los supuestos<br /><em>se encuentran con el sistema.</em></>,
    experienceAside: 'Una cronología breve de funciones y herramientas en proyectos de arquitectura, calidad, automatización y RPA.',
    current: 'Actual', expand: 'Ver nota', collapse: 'Cerrar nota',
    experience: [
      { role: 'QA Analyst · Arquitectura y Calidad (Lead)', detail: 'Auditorías de calidad y gestión de riesgos en proyectos de arquitectura y desarrollo. Automatización con XRAY y Selenium; pruebas manuales gestionadas con Silk Central.' },
      { role: 'QA Analyst · Arquitectura y Calidad', detail: 'Aseguramiento de calidad en proyectos de arquitectura y desarrollo. Diseñé y configuré agentes de IA con GPT y Copilot para apoyar auditorías y análisis de pruebas en Jira/Xray.' },
      { role: 'QA Analyst · Test Automation Engineer', detail: 'Frameworks de automatización web y de escritorio con Katalon Studio. Java, Groovy y Python en equipos Agile/Scrum.' },
      { role: 'Desarrollador RPA', detail: 'Automatización de procesos con BluePrism y UiPath.' },
      { role: 'Desarrollador RPA · Automatización y testing', detail: 'Automatización y testing con Selenium, Java y Python; colaboración con equipos multiculturales.' },
    ],
    experiencePeriods: ['ENE 2026 — ACTUALIDAD', 'AGO 2024 — DIC 2025', 'MAR 2021 — JUL 2024', 'NOV 2019 — FEB 2021', 'SEP 2018 — OCT 2019'],
    companies: ['Accenture España', 'Accenture España', 'Accenture España', 'Accenture España', 'Everis España · NTT DATA'],
    skillsTitle: <>Toolchain<br />sin tier list.</>,
    skillsIntro: 'Herramientas que aparecen en la experiencia profesional y en los proyectos. Verlas aquí no significa que todas tengan el mismo contexto ni profundidad.',
    skillGroups: ['Automatización', 'Calidad y gestión', 'Lenguajes', 'RPA e IA'],
    profileTitle: <>Las notas tienen<br /><em>límites.</em></>,
    story: 'Empecé en automatización RPA y evolucioné hacia QA y automatización de pruebas. Hoy trabajo entre auditorías de calidad, riesgos, arquitectura y desarrollo; fuera del trabajo dirijo proyectos propios con asistencia de IA.',
    impact: 'En el proyecto actual contribuí a reducir los tiempos de regresión y ampliar la cobertura de pruebas. No publico métricas internas. Los proyectos personales de este log tienen repositorios privados, así que describo su alcance y autoría sin presentarlos como código abierto.',
    projectsLink: 'Volver al build log', profileNote: 'La IA puede escribir líneas. Las decisiones y la revisión siguen teniendo dueño.', noteLabel: 'REGLA LOCAL',
    approach: [
      { title: 'Riesgo antes que volumen', body: 'Conectar contexto, criterios y riesgo antes de contar pruebas como si todas aportaran lo mismo.' },
      { title: 'La herramienta no es el resultado', body: 'Un framework ayuda a repetir checks; no demuestra por sí solo que el sistema sea fiable.' },
      { title: 'Asistencia no es autoría', body: 'En mis proyectos personales la IA genera código bajo mi dirección. Lo digo explícitamente y reviso sus resultados.' },
    ],
    educationTitle: <>Background <em>// formación</em></>,
    education: [
      { title: 'Grado Superior en Desarrollo de Aplicaciones Web', detail: 'IES Mare Nostrum · Alicante · 2016—2018' },
      { title: 'Formación oficial de Anthropic sobre IA', detail: 'En curso' },
    ],
    languagesTitle: 'Idiomas', languageLevels: ['Español: nativo', 'Inglés: básico · en mejora activa'],
    contactEyebrow: 'FIN DEL LOG · CANAL ABIERTO',
    contactTitle: <>¿Ves un borde<br /><em>que no he probado?</em></>,
    contactIntro: 'Si quieres hablar de testing, automatización, herramientas o de una decisión que aparece aquí, escríbeme. También acepto feedback técnico y bugs de esta web.',
    emailSubject: 'Nota técnica desde el portfolio', emailLabel: 'EMAIL', linkedinLabel: 'LINKEDIN', contactFooter: 'QA · DEBUG · ITERATE',
    idea: 'RIESGO', agent: 'TEST', flow: 'SEÑAL', result: 'REVISIÓN', human: 'REVISIÓN HUMANA', loop: 'EN EL LOOP',
  },
  en: {
    language: 'Language', skip: 'Skip to content', navLabel: 'Main navigation', menu: 'Menu', close: 'Close', themeToDark: 'Switch to dark mode', themeToLight: 'Switch to light mode',
    metaTitle: 'Carlos Gosálbez — QA, automation and engineering notes',
    metaDescription: 'Engineering notes on QA, automation and personal projects: scope, stack, contribution and honest status.',
    nav: ['Build log', 'QA loop', 'QA timeline', 'Notes', 'Say hello'], availability: 'PUBLIC ENGINEERING NOTES · PRIVATE CODE',
    location: 'ALICANTE, SPAIN', title: 'QA · AUTOMATION · AI SYSTEMS',
    heroTitle: <>The happy path<br /><em>is not a test</em><br />plan</>,
    intro: 'I work in QA and automation, and guide personal projects built with AI. This log captures each build’s scope, stack, my part and what is actually implemented.',
    explore: 'Open the build log', journey: 'See my QA loop', heroFootLeft: 'DEBUG MODE: ON', heroFootRight: 'SCROLL TO READ THE LOG',
    stripTop: <>FROM RPA TO QUALITY<br />THAT <span>DOES NOT STOP AT GREEN.</span></>, stripBottom: 'TEST · TRACE · ITERATE',
    sections: ['BUILD LOG', 'QA LOOP', 'WORK LOG', 'TOOLCHAIN', 'FIELD NOTES', 'BACKGROUND'],
    artLabel: 'QA work loop: understand the system, prioritize risk, test and review results',
    projectsTitle: <>What exists.<br /><em>What is next.</em></>,
    projectsAside: 'Each build summarises scope, stack, code authorship and status. I link products you can visit; the code repositories remain private.',
    projectScope: 'SCOPE', projectBuild: 'BUILD NOTES', projectRole: 'MY PART', stackLabel: 'STACK', myPulseCaption: 'IMPLEMENTED / IN PROGRESS',
    projects: [
      {
        name: 'Kickoff', category: 'MOBILE APP · PRIVATE REPOSITORY', headline: 'Organise the match without organising another group chat.',
        description: 'An app for coordinating groups, players, teams, matches, results, stats and shared accounts.',
        buildNotes: 'Expo, React Native and TypeScript, with Supabase and RevenueCat. This page does not guess at or publish internal integration details.',
        contribution: 'I started with the idea, define the product direction and guide iterations. AI generates the code; I review changes and decide what comes next.',
        status: 'Preparing for launch', access: 'Source code: private.', linkLabel: 'Product website',
      },
      {
        name: 'Memento-F-tbol', category: 'PERSONAL PROJECT · PRIVATE REPOSITORY', headline: 'An analysis experiment carried through to completion.',
        description: 'A private football probability analysis tool. Personal project completed.',
        buildNotes: 'A self-hosted app built with Python and FastAPI, an HTML/CSS/JavaScript dashboard, and PostgreSQL on Supabase. Its pipeline uses NumPy and SciPy; scikit-learn is part of the experimentation environment.',
        contribution: 'I defined the goal, researched options and guided iterations. AI generated the code; I reviewed its suggestions.',
        status: 'Completed', access: 'Source code: private.',
      },
      {
        name: 'My Pulse', category: 'DIGITAL PRODUCT · TWO PRIVATE REPOS', headline: 'An implemented backend and a web app still in progress.',
        description: 'One app split into my-pulse-backend and my-pulse-web. The backend, database and AI are implemented; the web interface is still underway.',
        buildNotes: 'Python, FastAPI, Supabase and LangGraph. LangGraph structures the backend AI flows.',
        contribution: 'I guide the product and its iterations. AI generates the code; I research, set goals and review what it produces.',
        status: 'Backend implemented · web in progress', access: 'Source code: private.',
      },
      {
        name: 'financial-ai', category: 'PERSONAL EXPERIMENT · PRIVATE REPOSITORY', headline: 'Make the analysis repeatable first.',
        description: 'An ongoing experiment in structuring reproducible data and financial analysis pipelines.',
        buildNotes: 'Qanat organizes the pipelines in Python; PostgreSQL is the primary persistent store. DuckDB is limited to optional analysis and compatibility; the local service runs with Docker Compose.',
        contribution: 'I research options and guide iterations. AI generates the code for this private project.',
        status: 'Exploratory', access: 'Source code: private.',
      },
    ],
    loopTitle: <>How I think about a test<br /><em>before automating it.</em></>,
    loopIntro: 'Not everything deserves an end-to-end test. This is the work map reflected in my experience: risks and audits, automated and manual checks, and human review when AI is involved.',
    loopCards: [
      { label: '01 / CONTEXT', title: 'Understand the system', body: 'I work on architecture and development projects; start with context, risks and the criteria that shape a test.' },
      { label: '02 / SIGNAL', title: 'Choose the check', body: 'Selenium and XRAY for automation; Silk Central for managing manual testing. The tool depends on what needs observing.' },
      { label: '03 / ASSISTANCE', title: 'Keep AI in the loop', body: 'I designed GPT and Copilot agents to support audits and test analysis in Jira/Xray. AI output still needs review.' },
      { label: '04 / TRANSPARENCY', title: 'Separate status from intent', body: 'Each project states what is implemented, what is ongoing, who generates the code and whether its repository is private.' },
    ],
    experienceTitle: <>QA where assumptions<br /><em>meet the system.</em></>,
    experienceAside: 'A concise timeline of roles and tools across architecture, quality, automation and RPA projects.',
    current: 'Current', expand: 'Read note', collapse: 'Close note',
    experience: [
      { role: 'QA Analyst · Architecture & Quality (Lead)', detail: 'Quality audits and risk management for architecture and development projects. Automation with XRAY and Selenium; manual testing managed with Silk Central.' },
      { role: 'QA Analyst · Architecture & Quality', detail: 'Quality assurance for architecture and development projects. I designed and configured AI agents with GPT and Copilot to support audits and test analysis in Jira/Xray.' },
      { role: 'QA Analyst · Test Automation Engineer', detail: 'Web and desktop automation frameworks with Katalon Studio. Java, Groovy and Python in Agile/Scrum teams.' },
      { role: 'RPA Developer', detail: 'Process automation with BluePrism and UiPath.' },
      { role: 'RPA Developer · Automation & Testing', detail: 'Automation and testing with Selenium, Java and Python; collaboration with multicultural teams.' },
    ],
    experiencePeriods: ['JAN 2026 — PRESENT', 'AUG 2024 — DEC 2025', 'MAR 2021 — JUL 2024', 'NOV 2019 — FEB 2021', 'SEP 2018 — OCT 2019'],
    companies: ['Accenture Spain', 'Accenture Spain', 'Accenture Spain', 'Accenture Spain', 'Everis Spain · NTT DATA'],
    skillsTitle: <>Toolchain<br />without a tier list.</>,
    skillsIntro: 'Tools that show up in my professional work and projects. Seeing a tool here does not mean every tool has the same context or depth.',
    skillGroups: ['Automation', 'Quality & delivery', 'Languages', 'RPA & AI'],
    profileTitle: <>These notes have<br /><em>limits.</em></>,
    story: 'I started in RPA automation and moved into QA and test automation. Today I work across quality audits, risk, architecture and development; outside work I guide personal projects with AI assistance.',
    impact: 'In my current project, I contributed to reducing regression time and expanding test coverage. Internal metrics stay private. The personal projects in this log have private repositories, so I describe their scope and authorship without presenting them as open source.',
    projectsLink: 'Back to the build log', profileNote: 'AI can write lines. Decisions and review still have an owner.', noteLabel: 'LOCAL RULE',
    approach: [
      { title: 'Risk before volume', body: 'Connect context, criteria and risk before counting tests as if they all add equal value.' },
      { title: 'The tool is not the outcome', body: 'A framework helps repeat checks; it does not prove a system is reliable by itself.' },
      { title: 'Assistance is not authorship', body: 'AI generates code in my personal projects under my direction. I say so and review the output.' },
    ],
    educationTitle: <>Background <em>// learning</em></>,
    education: [
      { title: 'Higher Technician Diploma in Web Application Development', detail: 'IES Mare Nostrum · Alicante · 2016—2018' },
      { title: 'Anthropic official AI training', detail: 'In progress' },
    ],
    languagesTitle: 'Languages', languageLevels: ['Spanish: native', 'English: basic · actively improving'],
    contactEyebrow: 'END OF LOG · CHANNEL OPEN',
    contactTitle: <>See an edge case<br /><em>I have not tested?</em></>,
    contactIntro: 'Want to talk testing, automation, tools or a decision noted here? Get in touch. Technical feedback and bugs in this site are welcome too.',
    emailSubject: 'Technical note from portfolio', emailLabel: 'EMAIL', linkedinLabel: 'LINKEDIN', contactFooter: 'QA · DEBUG · ITERATE',
    idea: 'RISK', agent: 'TEST', flow: 'SIGNAL', result: 'REVIEW', human: 'HUMAN REVIEW', loop: 'IN THE LOOP',
  },
}

export const translations = copy
