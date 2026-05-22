# Deployment

This site is a static portfolio and does not need Docker.

## Recommended path: DigitalOcean App Platform

1. Push this folder to a GitHub repository.
2. In DigitalOcean, create a new App and connect the GitHub repo.
3. Choose a Static Site.
4. Set the source directory to this folder.
5. Use the following settings:
   - Build command: leave empty
   - Output directory: `.`
   - Run command: leave empty
6. Add the custom domain `mayankaura.me` in the App settings.
7. Update your DNS records in the domain provider to point to DigitalOcean.

## What to upload

- `index.html`
- `styles.css`
- `script.js`
- `CNAME`

## If you want a backup host

You can also deploy the same files to GitHub Pages or Netlify with no code changes.