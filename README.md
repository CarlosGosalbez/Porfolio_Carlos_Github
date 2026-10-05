# Carlos Gosálbez · Portfolio

Portfolio personal en español e inglés, publicado como sitio estático con Vite, React y GitHub Pages.

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

El workflow `.github/workflows/pages.yml` compila y publica al actualizar `main`. En GitHub, selecciona **Settings → Pages → Build and deployment → Source → GitHub Actions**. También se puede iniciar manualmente desde la pestaña Actions.

## Contenido

- `src/content/profile.ts`: datos y proyectos públicos seleccionados.
- `src/content/translations.tsx`: contenido en español e inglés.
- `src/site/`: interfaz, interacciones y estilos.
- `public/`: icono y recursos visuales públicos.

El formulario de contacto prepara un borrador `mailto:` local. El sitio no almacena datos ni se conecta a Cloudflare D1.
