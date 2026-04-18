# Simple Quiz Game (React + Vite)

This is a simple quiz game as example of how to use react.

I made this game to help me to memorize kanjis. The list of kanjis is included as a json file that can be modified to include any type of questions.

You can see a demo here: https://bpato.github.io/simple-quiz-game/

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18.3 + Vite 5.3 |
| Language | JavaScript (ES modules) |
| Animations | canvas-confetti |
| Linter | ESLint + Standard |
| Package Manager | pnpm (Docker) / npm (CI) |

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deployment

This project has two deployment pipelines:

### GitHub Pages (automatic)

- **Trigger**: Push to `main` branch or merged PR
- **Workflow**: `.github/workflows/vite-gh-pages.yml`
- **Build**: Node 22.x → `npm ci` → build → deploy
- **URL**: `https://bpato.github.io/simple-quiz-game/`

### GitHub Container Registry (manual via tags)

- **Trigger**: Push a version tag (e.g., `git tag v1.0.0 && git push --tags`)
- **Workflow**: `.github/workflows/build.yml`
- **Registry**: `ghcr.io/bpato/simple-quiz-game`
- **Image**: `node:18-alpine` base, serves static files on port 3000
- **Tags**: `latest` + semver version

**Required secrets**: `GHCR_TOKEN` (GitHub Container Registry token)

```bash
# Pull the image
docker pull ghcr.io/bpato/simple-quiz-game:latest

# Run locally
docker run -p 3000:3000 ghcr.io/bpato/simple-quiz-game:latest
```

## Customization

Edit `src/data/questions.json` to change the questions. The format supports any type of quiz content.

## Todo List

### Completados
- ✅ Menú principal con botones (Jugar, Cómo jugar, Acerca de)
- ✅ Selector de modo horizontal (Traducción/Onyomi/Kunyomi)
- ✅ Navegación entre pantallas
- ✅ Soporte para los 3 modos de juego
- ✅ Recargar juego al cambiar de modo
- ✅ Estilos para fondo oscuro
- ✅ Color primary azul (#09f)
- ✅ Hover con buen contraste
- ✅ Fix opciones en blanco (filtrar kanjis sin kunyomi)
- ✅ Completar kunyomis faltantes en JSON
- ✅ DESIGN.md con documentación
- ✅ Pantalla Acerca de
- ✅ Pantalla Cómo jugar

### Pendientes
- ⏳ Selector de cantidad de preguntas
- ⏳ Animaciones suaves
- ⏳ PWA (instalable)

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [SWC](https://swc.rs/)

Made with ❤️ by bpato
