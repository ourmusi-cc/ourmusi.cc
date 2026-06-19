# OurMusi.cc

Website for [OurMusi.cc](https://ourmusi.cc), an independent label for artists releasing music under Creative Commons licenses, with a preference for [Free Cultural Works](https://freedomdefined.org/Definition).

Built with [Astro](https://astro.build) and managed with [Open Virtual Label](https://github.com/open-virtual-label/ovl).

## Content

Artist and release data lives in the OVL workspace at `../../../workspace/` — not in this repository. Before building, run the sync script to copy current workspace records into Astro's content collections:

```bash
bash scripts/sync-content.sh
```

This populates `src/content/artists/` and `src/content/releases/` from the workspace JSON files. These directories are gitignored — they are always generated, never edited directly.

## Development

```bash
npm install
bash scripts/sync-content.sh
npm run dev        # http://localhost:4321
```

## Build

```bash
bash scripts/sync-content.sh
npm run build
npm run preview    # preview production build locally
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow at `.github/workflows/deploy.yml`, which runs `sync-content.sh` and deploys to GitHub Pages.

## Project structure

```
.github/workflows/   GitHub Actions deploy workflow
public/              Static assets
scripts/
  sync-content.sh    Copies workspace JSON into src/content/
src/
  content.config.ts  Astro content collection schemas (mirrors OVL JSON schemas)
  layouts/
    Layout.astro     Base HTML layout with navigation
  pages/
    index.astro      Homepage — artist cards + recent releases
    about.astro      Label mission and Free Cultural Works explanation
    licensing.astro  Plain-language Creative Commons guide
    artists/
      index.astro    Artist listing
      [id].astro     Artist page with bio and discography
    releases/
      [artistId]/
        [releaseId].astro  Release page with embed player and platform links
  styles/
    global.css       Tailwind v4 theme — all color tokens defined here
```

## Theme

Colors are defined as semantic tokens in `src/styles/global.css` under `@theme`. All components use token names (`bg-surface`, `text-muted`, `border-border`, etc.) rather than raw values. To change the palette, edit the tokens in one place.

## License

- **Code** (Astro components, configuration, scripts) — [MIT](LICENSE)
- **Content** (text, artist bios, release descriptions) — [CC BY 4.0](LICENSE-CC-BY)

In short: use the code however you like; credit us if you reuse the content.
