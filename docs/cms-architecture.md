# CMS Architecture

This document describes how content is structured for future CMS integration.

## Content Layer

```
src/content/          → Static content (current data source)
src/lib/cms/          → Data access functions (CMS abstraction layer)
src/types/cms.ts      → Content type definitions
```

## Migration Path

Replace implementations in `src/lib/cms/*.ts` with CMS API calls. Pages and components remain unchanged.

### Example

```typescript
// Before (static)
export function getAllNews(): NewsArticle[] {
  return newsArticles;
}

// After (CMS)
export async function getAllNews(): Promise<NewsArticle[]> {
  return cmsClient.getEntries({ content_type: "newsArticle" });
}
```

## Content Models

| Model | Type | Functions |
|-------|------|-----------|
| News | `NewsArticle` | `getAllNews`, `getNewsBySlug`, `getNewsByCategory` |
| Events | `SchoolEvent` | `getAllEvents`, `getEventBySlug`, `getUpcomingEvents` |
| Downloads | `DownloadItem` | `getAllDownloads`, `getDownloadsByCategory` |
| Gallery | `GalleryImage` | `getImagesByCategory` (in gallery.ts) |
| Calendar | `CalendarEntry` | In academics content |
| Search | `SearchResult` | `searchSite` aggregates all models |

## Forms

Contact and admission forms are client-side only. Connect to API routes or third-party service in production:

- `src/components/forms/ContactForm.tsx`
- `src/components/forms/AdmissionInquiryForm.tsx`
