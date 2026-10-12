# Abhishek Singh — Portfolio

React 19 + TypeScript + Vite + Tailwind CSS v4. No UI/animation/icon libraries: animations are CSS + IntersectionObserver, and icons are inline SVG.

## Scripts

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build → dist/
npm run preview   # serve the production build
```

## Editing content

All text, links, projects and skills live in `src/data/profile.ts`.

## Resume

Put your PDF at `public/Abhishek_Singh_Resume.pdf` (exact filename), then restart `npm run dev` or rebuild.
Until the file exists, the "Download Resume" buttons show a notice saying the resume isn't uploaded yet.

## Contact form

Copy `.env.example` to `.env` and set `VITE_CONTACT_ENDPOINT` to an endpoint that accepts a JSON POST of `{ name, email, message }`.
A Formspree form URL works, and so does your own API.
If no endpoint is set, the form validates the input and then offers to open the visitor's email app with the message filled in. It never claims that a message was sent.
To use EmailJS instead, replace `sendContactMessage` in `src/lib/contact.ts`.

## SEO

Set `VITE_SITE_URL` (e.g. `https://abhisheksingh.dev`) before building so the Open Graph and Twitter image URLs are absolute.

## Project screenshots

Add images to `public/projects/` and set `image: '/projects/<file>.png'` on a project in `profile.ts`.
Until then, each card shows an illustration labelled "Illustration".
