# OurMusi.cc

Website for OurMusi.cc, an independent Creative Commons label for ambient, piano,
and experimental music.

## Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   └── pages/
└── package.json
```

## Development

All commands are run from the root of the project:

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm run dev`       | Start local dev server at `localhost:4321`   |
| `npm run build`     | Build production site to `./dist/`           |
| `npm run preview`   | Preview the production build locally         |

## License

This project uses a dual license:

- **Code** (Astro components, configuration, scripts) — [MIT](LICENSE)
- **Content** (text, artist bios, release descriptions, images) — [CC BY 4.0](LICENSE-CC-BY)

In short: use the code however you like; credit us if you reuse the content.
