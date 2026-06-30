# clvkwong.github.io

This site is configured to deploy to GitHub Pages from the `main` branch using the `docs/` folder.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The build output is written to `docs/`, which is the directory published by GitHub Pages.

## GitHub Pages Setup

In the repository settings, set Pages to deploy from the `main` branch and the `/docs` folder. After you run `npm run build` and push the generated `docs/` folder, GitHub Pages will serve the site.
