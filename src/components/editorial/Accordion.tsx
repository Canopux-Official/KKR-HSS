"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/Text";
import type { FAQItem } from "@/types/cms";

interface AccordionProps {
  items: FAQItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-border border-t border-border">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              id={`accordion-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`panel-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-start justify-between gap-4 py-5 text-left font-display text-heading-sm text-ink hover:text-maroon transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                strokeWidth={1.5}
                className={cn(
                  "shrink-0 mt-1 text-stone transition-transform duration-normal ease-reveal",
                  isOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id={`panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-${item.id}`}
              hidden={!isOpen}
              className="pb-5"
            >
              <Text variant="body" muted className="max-w-prose">
                {item.answer}
              </Text>
            </div>
          </div>
        );
      })}
    </div>
  );
}
