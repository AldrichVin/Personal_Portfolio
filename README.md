# Personal Portfolio (Minimal React)

This is a small minimalist portfolio built with React + Vite. It lists your projects as links to live sites.

Getting started (PowerShell):

```powershell
npm install
npm run dev
```

Open the local dev URL printed by Vite (usually http://localhost:5173).

Files to edit:
- `src/projects.js` — add or edit the `projects` array (name, url, description)
- `src/App.jsx` — UI layout
- `src/styles.css` — visual styles

Interactive features added:
- Search projects by name or description (top-left search box).
- Press Enter while a project card is focused to open the project in a new tab.
- "Copy" button on each project to copy its URL to the clipboard with a small toast confirmation.

These make navigating and sharing project links faster without changing the minimalist layout.

Deployment:
- Build: `npm run build`
- Preview the production build: `npm run preview`

If you want TypeScript, Netlify/Vercel deploy presets, or a custom domain setup, tell me and I can add it.
