import type { DownloadCategory, DownloadItem } from "@/types/cms";
import { downloadItems } from "@/content/downloads";

export function getAllDownloads(): DownloadItem[] {
  return [...downloadItems].sort(
    (a, b) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

export function getDownloadsByCategory(
  category: DownloadCategory
): DownloadItem[] {
  return getAllDownloads().filter((item) => item.category === category);
}

export function getDownloadCategories(): DownloadCategory[] {
  const categories = new Set<DownloadCategory>();
  downloadItems.forEach((item) => categories.add(item.category));
  return Array.from(categories);
}

export function searchDownloads(query: string): DownloadItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return getAllDownloads().filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.description?.toLowerCase().includes(q)
  );
}
