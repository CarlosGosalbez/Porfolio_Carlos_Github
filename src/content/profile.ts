export const profile = {
  name: 'Carlos Gosálbez',
  location: 'Alicante, España',
  title: 'QA & Product Quality · AI-assisted product building',
  availability: 'Abierto a oportunidades remotas e híbridas',
  email: 'ggcarlos425@gmail.com',
  linkedin: 'https://www.linkedin.com/in/carlosgosalbez',
  intro:
    'Conecto calidad, tecnología y visión de producto. Investigo, automatizo y convierto ideas en soluciones que pueden crecer.',
  story:
    'Mi recorrido empezó en la automatización RPA y evolucionó hacia el aseguramiento de calidad y la automatización de pruebas. Además de mi trabajo en QA, impulso proyectos propios desde la idea: investigo, aprendo las herramientas que necesito y avanzo por etapas, con criterio y apoyo de IA cuando aporta valor.',
  impact:
    'En mi proyecto actual contribuí a reducir los tiempos de regresión y ampliar la cobertura de pruebas. Por confidencialidad, no publico métricas ni detalles internos.',
  approach: [
    {
      number: '01',
      title: 'Entender antes de construir',
      body: 'Investigo el problema, el contexto y las opciones antes de elegir un camino técnico.',
    },
    {
      number: '02',
      title: 'Calidad desde el diseño',
      body: 'Conecto riesgos, criterios de aceptación y pruebas desde las primeras decisiones.',
    },
    {
      number: '03',
      title: 'IA con criterio humano',
      body: 'Uso Claude y Codex para explorar y desarrollar. Contrasto sus propuestas y valido las decisiones.',
    },
  ],
  skills: [
    { label: 'Automatización', items: ['Selenium', 'Katalon Studio', 'XRAY'] },
    { label: 'Calidad y gestión', items: ['Silk Central', 'Jira', 'Agile / Scrum'] },
    { label: 'Tecnologías', items: ['Java', 'Python', 'Groovy', 'TypeScript'] },
    { label: 'RPA e IA', items: ['UiPath', 'BluePrism', 'Claude', 'Codex'] },
  ],
  experience: [
    {
      period: 'ENE 2026 — ACTUALIDAD',
      role: 'QA Analyst · Arquitectura y Calidad (Lead)',
      company: 'Accenture España',
      detail:
        'Lidero auditorías de calidad y gestión de riesgos en proyectos de arquitectura y desarrollo. Automatizo con XRAY y Selenium y gestiono pruebas manuales con Silk Central.',
      current: true,
    },
    {
      period: 'AGO 2024 — DIC 2025',
      role: 'QA Analyst · Arquitectura y Calidad',
      company: 'Accenture España',
      detail:
        'Aseguramiento de calidad en proyectos de arquitectura y desarrollo. Diseñé y configuré agentes de IA con GPT y Copilot para apoyar auditorías y el análisis de pruebas en Jira/Xray.',
    },
    {
      period: 'MAR 2021 — JUL 2024',
      role: 'QA Analyst · Test Automation Engineer',
      company: 'Accenture España',
      detail:
        'Frameworks de automatización web y escritorio con Katalon Studio. Trabajo con Java, Groovy y Python en equipos Agile/Scrum.',
    },
    {
      period: 'NOV 2019 — FEB 2021',
      role: 'Desarrollador RPA',
      company: 'Accenture España',
      detail: 'Automatización de procesos mediante BluePrism y UiPath.',
    },
    {
      period: 'SEP 2018 — OCT 2019',
      role: 'Desarrollador RPA · Automatización y testing',
      company: 'Everis España · NTT DATA',
      detail:
        'Automatización y testing con Selenium, Java y Python. Colaboración con equipos multiculturales.',
    },
  ],
  education: [
    {
      title: 'Grado Superior en Desarrollo de Aplicaciones Web',
      detail: 'IES Mare Nostrum · Alicante · 2016—2018',
    },
    {
      title: 'Formación oficial de Anthropic sobre IA',
      detail: 'En curso',
    },
  ],
  projects: [
    {
      id: 'kickoff',
      number: '01',
      category: 'PRODUCTO MÓVIL · DEPORTE',
      name: 'Kickoff',
      headline: 'La organización deportiva, más sencilla.',
      description:
        'Una aplicación móvil para organizar grupos y partidos: jugadores, equipos, marcadores, estadísticas y cuentas compartidas en un mismo lugar.',
      contribution:
        'Partí de la idea y dirigí su evolución técnica con apoyo de IA. El producto reúne flujos para distintos deportes y una base preparada para crecer.',
      stack: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'RevenueCat'],
      status: 'Lanzamiento en preparación',
      link: 'https://kickoff-rouge-ten.vercel.app/',
      linkLabel: 'Visitar la web oficial',
      logo: `${import.meta.env.BASE_URL}kickoff-icon.webp`,
      featureImage: `${import.meta.env.BASE_URL}kickoff-feature.webp`,
      visual: 'kickoff',
    },
    {
      id: 'memento',
      number: '02',
      category: 'PROYECTO PERSONAL · COMPLETADO',
      name: 'Memento-F-tbol',
      headline: 'Un proyecto personal llevado a término.',
      description:
        'Herramienta privada de análisis probabilístico de fútbol, concebida y completada como proyecto personal.',
      contribution:
        'Definí el objetivo y dirigí las decisiones del proyecto con investigación propia y apoyo de IA. El código fue generado con IA; revisé las propuestas y orienté sus iteraciones.',
      stack: [],
      status: 'Completado · código privado',
      visual: 'pipeline',
    },
    {
      id: 'my-pulse',
      number: '03',
      category: 'PRODUCTO DIGITAL · EN DESARROLLO',
      name: 'My Pulse',
      headline: 'Una iniciativa propia, construida por etapas.',
      description: 'My Pulse es una sola app organizada en dos repositorios independientes: my-pulse-backend (backend, base de datos e IA implementados) y my-pulse-web (interfaz en construcción).',
      contribution:
        'LangGraph forma parte del backend para estructurar los flujos de IA. Dirijo el producto y sus iteraciones con investigación propia y apoyo de IA; el código se genera con IA.',
      stack: ['Python', 'FastAPI', 'Supabase', 'LangGraph'],
      status: 'Backend implementado · web en construcción',
      visual: 'my-pulse',
    },
    {
      id: 'financial-ai',
      number: '04',
      category: 'EXPERIMENTO PERSONAL · EN CURSO',
      name: 'financial-ai',
      headline: 'Explorar sistemas de análisis con trazabilidad.',
      description:
        'Experimento personal en curso para estructurar pipelines reproducibles de datos y análisis financieros.',
      contribution:
        'Parto de una pregunta de producto, investigo alternativas y dirijo la evolución con apoyo de IA. El código de este proyecto privado lo genera la IA.',
      stack: [],
      status: 'En curso · privado',
      visual: 'financial-ai',
    },
  ],
  languages: [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'Básico · en mejora activa' },
  ],
} as const
