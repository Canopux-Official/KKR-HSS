import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { DOWNLOAD_CATEGORY_LABELS } from "@/types/cms";
import { formatNewsDate } from "@/components/search/SearchResultsList";
import type { DownloadItem } from "@/types/cms";

interface DownloadsListProps {
  items: DownloadItem[];
}

export function DownloadsList({ items }: DownloadsListProps) {
  const grouped = items.reduce<Record<string, DownloadItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-16">
      {Object.entries(grouped).map(([category, categoryItems]) => (
        <section key={category} aria-labelledby={`downloads-${category}`}>
          <Text
            as="h2"
            variant="overline"
            id={`downloads-${category}`}
            className="block mb-8"
          >
            {DOWNLOAD_CATEGORY_LABELS[category as keyof typeof DOWNLOAD_CATEGORY_LABELS]}
          </Text>
          <ul className="space-y-0 divide-y divide-border border-t border-border">
            {categoryItems.map((item) => (
              <li key={item.id} className="py-8">
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 sm:gap-8 items-start">
                  <div>
                    <Text as="h3" variant="body-lg" className="font-medium text-ink">
                      {item.title}
                    </Text>
                    {item.description && (
                      <Text variant="body-sm" muted className="mt-2 max-w-prose">
                        {item.description}
                      </Text>
                    )}
                    <Text variant="caption" className="mt-3 block">
                      Updated {formatNewsDate(item.updatedAt)}
                      {item.fileSize && ` · ${item.fileSize}`}
                    </Text>
                  </div>
                  <div className="shrink-0">
                    {item.fileUrl && !item.fileUrl.startsWith("[") ? (
                      <Link href={item.fileUrl} external className="text-body-sm">
                        Download
                      </Link>
                    ) : item.externalUrl && !item.externalUrl.startsWith("[") ? (
                      <Link href={item.externalUrl} external className="text-body-sm">
                        View
                      </Link>
                    ) : (
                      <Text variant="body-sm" className="text-stone">
                        Forthcoming
                      </Text>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
