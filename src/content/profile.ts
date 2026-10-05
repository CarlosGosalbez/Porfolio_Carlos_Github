// Structural data shared by the Spanish and English engineering notes.
// Public-facing descriptions and status live in translations.tsx.
export const profile = {
  name: 'Carlos Gosálbez',
  email: 'ggcarlos425@gmail.com',
  linkedin: 'https://www.linkedin.com/in/carlosgosalbez',
  skills: [
    { label: 'automation', items: ['Selenium', 'Katalon Studio', 'XRAY'] },
    { label: 'quality', items: ['Silk Central', 'Jira', 'Agile / Scrum'] },
    { label: 'languages', items: ['Java', 'Python', 'Groovy', 'TypeScript'] },
    { label: 'rpa-ai', items: ['UiPath', 'BluePrism', 'Claude', 'Codex'] },
  ],
  experience: [
    { period: '2026-current', role: 'qa-lead', current: true },
    { period: '2024-2025', role: 'qa-architecture' },
    { period: '2021-2024', role: 'test-automation' },
    { period: '2019-2021', role: 'rpa-developer' },
    { period: '2018-2019', role: 'rpa-testing' },
  ],
  education: [
    { title: 'web-application-development' },
    { title: 'anthropic-ai-course' },
  ],
  projects: [
    {
      id: 'kickoff', number: '01', stack: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'RevenueCat'],
      link: 'https://kickoff-rouge-ten.vercel.app/', linkLabel: 'product-site',
      logo: `${import.meta.env.BASE_URL}kickoff-icon.webp`, featureImage: `${import.meta.env.BASE_URL}kickoff-feature.webp`, visual: 'kickoff',
    },
    { id: 'memento', number: '02', stack: ['Python', 'FastAPI', 'PostgreSQL', 'Supabase', 'NumPy', 'SciPy', 'scikit-learn', 'JavaScript', 'HTML/CSS', 'Docker Compose'], visual: 'pipeline' },
    { id: 'my-pulse', number: '03', stack: ['Python', 'FastAPI', 'Supabase', 'LangGraph'], visual: 'my-pulse' },
    { id: 'financial-ai', number: '04', stack: ['Python', 'Qanat', 'PostgreSQL', 'pandas', 'NumPy', 'FastAPI', 'DuckDB · opt-in', 'Docker Compose'], visual: 'financial-ai' },
  ],
} as const
