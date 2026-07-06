# Production Deployment Checklist

KKR Mahila Higher Secondary School — Official Website

## Pre-deployment

- [ ] Confirm all `[— to be confirmed]` placeholders in `src/config/site.ts` and content files are updated with verified information
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production domain (e.g. `https://kkrwomens.edu.in`)
- [ ] Replace placeholder photography in `public/images/` when official assets are available
- [ ] Connect contact and admission forms to backend endpoints (see `.env.example`)
- [ ] Configure `NEXT_PUBLIC_GA_MEASUREMENT_ID` if using Google Analytics
- [ ] Verify SSL certificate is active on the production domain
- [ ] Run quality checks locally:

```bash
npm run lint
npm run typecheck
npm run build
```

## Build verification

- [ ] Production build completes with zero errors and warnings
- [ ] All 37+ static pages generate successfully
- [ ] `/sitemap.xml` and `/robots.txt` are accessible
- [ ] Open Graph image renders at `/opengraph-image`
- [ ] Favicon and app icons render at `/icon` and `/apple-icon`

## Security

Security headers are configured in `next.config.ts`:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security` (HSTS)
- `Permissions-Policy` (restricts camera, microphone, geolocation)

### Content Security Policy (recommended for production)

Add a CSP via hosting platform or `next.config.ts` once third-party scripts are finalized. Suggested starting policy:

```
default-src 'self';
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:;
font-src 'self';
connect-src 'self' https://www.google-analytics.com;
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
```

Adjust when form backends, maps, or CMS integrations are added.

## Caching strategy

| Asset type | Cache-Control |
|---|---|
| Static images, fonts | `public, max-age=31536000, immutable` (configured in `next.config.ts`) |
| HTML pages | Platform default (revalidate on deploy) |
| API routes (future) | `no-store` or short TTL as appropriate |

## Hosting recommendations

- **Vercel** (recommended for Next.js): zero-config deployment, automatic HTTPS, edge caching
- **Alternative**: Node.js server via `npm run build && npm run start` behind nginx or Apache reverse proxy

### Environment variables (production)

Copy from `.env.example` and set in hosting dashboard:

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical URLs, sitemap, structured data |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics |
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | No | Contact form backend |
| `NEXT_PUBLIC_ADMISSION_FORM_ENDPOINT` | No | Admission inquiry backend |

## Post-deployment QA

- [ ] Test all primary navigation links
- [ ] Test mobile menu, search, and gallery lightbox
- [ ] Verify contact and admission forms show validation and success states
- [ ] Run Lighthouse audit (target: 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO)
- [ ] Test keyboard navigation and skip-to-content link
- [ ] Verify structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to Google Search Console

## Future CMS integration

See `docs/cms-architecture.md` for the content abstraction layer. To connect a headless CMS:

1. Implement CMS adapter in `src/lib/cms/`
2. Replace static content imports with API calls
3. Add `CMS_API_URL` and `CMS_API_TOKEN` environment variables
4. Consider ISR or on-demand revalidation for news and events

## Maintenance mode

To display the maintenance page during updates, configure your hosting platform to serve `/maintenance` or use a platform-level maintenance flag. The maintenance route is excluded from search indexing via `robots.txt` and page metadata.
