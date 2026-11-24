# Adhroga Real Estate Investment Landing Page

A responsive React + Vite recreation refined against the latest supplied Adhroga screenshot, using CSS-built image placeholders instead of external property photos.

## Run in VS Code

1. Install Node.js 18+ (or newer LTS).
2. Extract this project folder and open it in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Included
- Responsive landing page and mobile navigation
- Hero, feature strip, project map illustration, filters and project list
- Featured opportunities, investment process, trust features, FAQ and footer
- Working project search, status/type filters, sorting, map mode toggle, FAQ accordion and English/Hindi FAQ toggle
- CSS illustration placeholders that can later be replaced with real image assets

## Replace image placeholders
The `Placeholder` component is in `src/main.jsx`. Replace its use with an `<img>` or your preferred image component when you have approved property photography. The current placeholders are intentionally made with CSS and require no image assets.
