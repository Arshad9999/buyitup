# BuyItNow Component Showcase

A forked React component showcase for storefront, account, cart, shipping and admin screens. The default branch contains static UI examples, not a commerce backend or a working checkout.

## Setup

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. `npm start` is an alias for the development server.

## Checks and production build

```sh
npm test
npm run build
npm run audit
```

Vite writes the production site to `dist/`. `npm run preview` serves that build locally. Configure the host to serve index.html for browser routes. This maintenance change does not deploy the application.

## Provenance

Read [FORK_NOTES.md](FORK_NOTES.md) for upstream attribution and contribution limits. Existing upstream license notices are retained. No new license has been assigned.

## Scope

The route tests cover all 19 component pages and navigation to login. Tailwind styles are compiled locally rather than loaded from a development CDN. Forms and admin screens remain demonstrations; no user accounts, orders, payment service or database are connected. The default branch needs no environment variables.

Historical commits contain credentials from a different application. Real values must be reviewed and rotated by their service-account owners; removing current files does not revoke historical credentials.
