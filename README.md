# Engineering notes · Carlos Gosálbez

Cuaderno público sobre QA, automatización y proyectos personales con IA. La idea es que otro ingeniero pueda entender el alcance, el stack, mi aportación y el estado real de cada build sin pasar por una presentación de selección.

Los repositorios de los proyectos descritos son privados. Las notas indican ese límite, separan lo implementado de lo que sigue en curso y no publican métricas internas.

## Desarrollo local

```bash
npm ci
npm run dev
```

## Compilar y previsualizar

```bash
npm run build
npm run preview
```

El build usa la ruta de proyecto de GitHub Pages: `/Porfolio_Carlos_Github/`.

## Publicar

El workflow `.github/workflows/pages.yml` compila y publica al actualizar `main`. Pages usa GitHub Actions como origen. También se puede iniciar manualmente desde la pestaña Actions.

## Estructura

- `src/content/profile.ts`: datos de contacto, trayectoria y metadatos estructurales de los proyectos.
- `src/content/translations.tsx`: notas y contenido en español e inglés.
- `src/site/`: interfaz, ilustraciones, interacciones y estilos.
- `public/`: recursos visuales.

Es un sitio estático. Los enlaces de contacto abren el correo o LinkedIn; no se guardan datos ni se conecta a Cloudflare D1.
