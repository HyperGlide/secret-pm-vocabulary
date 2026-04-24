# PM Vocabulary: The 4 Rooms

A lightweight React + Tailwind app that helps PMs practice senior-level language across four contexts:

- Build Room
- Strategy Room
- Boardroom
- Growth Room

This is designed as a game-like learning product, deployable for free on GitHub Pages.

## Credits

Concept and vocabulary framing draw from work by **Alex Rechevskiy** on the “four rooms” PM language idea. Profile: [Alex Rechevskiy on LinkedIn](https://www.linkedin.com/in/alexrechevskiy/).

## License

This project is licensed under the **MIT License** (SPDX: `MIT`).

- Full text: [LICENSE](LICENSE)
- Summary: you may use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software. Copies or substantial portions must include the copyright notice and permission notice from the license file.

## Product overview

The app includes:

1. **Room Navigator**
   - Visual room cards with distinct tones/colors
   - Terms, definitions, and weak-vs-strong phrasing
2. **Vocabulary Translator**
   - User enters casual language
   - App rewrites into Build, Strategy, Boardroom, and Growth language (rules engine, no API required)
3. **Scenario Practice Mode**
   - Real PM prompts
   - Room-level classification of user answer
   - Suggested wording upgrade
4. **Progress Tracker**
   - Tracks terms explored + scenarios completed
   - Persists in `localStorage`

## Tech stack

- React + Vite
- Tailwind CSS
- No backend
- Static deployment ready

## File structure

```text
.
├── LICENSE
├── index.html
├── src
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── tailwind.config.cjs
├── postcss.config.cjs
├── vite.config.js
└── README.md
```

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (free)

The project is configured with:

- `vite.config.js` base: `/secret-pm-vocabulary/`
- `package.json` deploy scripts using `gh-pages`

Deploy steps:

```bash
npm install
npm run deploy
```

This publishes `dist` to the `gh-pages` branch.

Then in GitHub:
1. Go to **Settings -> Pages**
2. Set source to **Deploy from a branch**
3. Pick branch `gh-pages` and root `/`

## Repository traffic on GitHub

To see how often the repository is viewed or cloned, open the repo on GitHub and go to **Insights → Traffic**.

## Original build prompt (spec)

This repo was implemented from a product spec that asked for:

- **Experience:** clean modern UI, static-site / GitHub Pages, mobile responsive, no backend.
- **Features:** Room Navigator (4 rooms, terms, weak vs strong), Vocabulary Translator (rules-based rewrites per room), Scenario Practice (classify + upgrade suggestions), Progress Tracker (`localStorage`).
- **Stack:** React (Vite) + Tailwind, deploy to GitHub Pages or Vercel.

Implementation lives in `src/App.jsx`, `src/data.js`, and config in `vite.config.js`, `tailwind.config.cjs`, `postcss.config.cjs`.

## Build steps (quick reference)

| Goal | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` → http://localhost:5173 |
| Production build | `npm run build` → output in `dist/` |
| Preview production build locally | `npm run preview` |
| Deploy to GitHub Pages | `npm run deploy` (uses `gh-pages`; ensure `vite.config.js` `base` matches your repo name) |
