"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  defaultQuery?: string;
  className?: string;
  variant?: "default" | "compact";
}

export function SearchBar({
  defaultQuery = "",
  className,
  variant = "default",
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultQuery);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    } else {
      router.push("/search");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={cn("flex w-full", className)}
    >
      <label htmlFor="site-search" className="sr-only">
        Search the website
      </label>
      <div className="relative flex-1">
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className={cn(
            "w-full font-body text-body text-ink bg-surface-elevated border border-border",
            "focus:border-maroon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
            "placeholder:text-stone transition-colors duration-fast",
            variant === "compact" ? "py-2 pl-10 pr-4 text-body-sm" : "py-3 pl-12 pr-4"
          )}
        />
        <Search
          size={variant === "compact" ? 16 : 20}
          strokeWidth={1.5}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-stone pointer-events-none"
          aria-hidden="true"
        />
      </div>
      {variant === "default" && (
        <button
          type="submit"
          className="ml-3 px-6 py-3 bg-maroon text-warm-white font-body text-body font-medium hover:bg-maroon-dark transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus shrink-0"
        >
          Search
        </button>
      )}
    </form>
  );
}
