"use client";

import { Input } from "@/components/ui/input";
import { useSearchTVShows } from "@/hooks/useTMDBService";
import { getTMDBPosterImageUrl } from "@/lib/utils";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import { Skeleton } from "../ui/skeleton";
import { ContentCard } from "./ContentCard";

export default function ExploreContent() {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 400);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef(null);

  const { data: showData, isPending } = useSearchTVShows(debouncedSearch);

  const autocompleteSuggestions = showData?.results?.slice(0, 8) || [];

  const handleInputFocus = () => {
    if (debouncedSearch && autocompleteSuggestions.length > 0) {
      setShowAutocomplete(true);
    }
  };

  // Handle input blur with delay to allow clicking on suggestions
  const handleInputBlur = () => {
    setTimeout(() => {
      setShowAutocomplete(false);
      setSelectedIndex(-1);
    }, 200);
  };

  const handleSuggestionClick = (showName: string) => {
    setSearch(showName);
    setShowAutocomplete(false);
    setSelectedIndex(-1);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showAutocomplete || autocompleteSuggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < autocompleteSuggestions.length - 1 ? prev + 1 : prev,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSuggestionClick(autocompleteSuggestions[selectedIndex].name);
        }
        break;
      case "Escape":
        setShowAutocomplete(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  useEffect(() => {
    if (
      debouncedSearch &&
      autocompleteSuggestions.length > 0 &&
      document.activeElement === inputRef.current
    ) {
      setShowAutocomplete(true);
    } else if (!debouncedSearch) {
      setShowAutocomplete(false);
    }
  }, [debouncedSearch, autocompleteSuggestions.length]);

  // Clear search
  const clearSearch = () => {
    setSearch("");
    setShowAutocomplete(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  const renderContent = () => {
    if (isPending) {
      return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="p-1 sm:p-2">
              <Skeleton className="mb-2 h-32 w-full rounded-md sm:h-40 md:h-48" />
              <Skeleton className="mb-1 h-3 w-3/4 sm:h-4" />
              <Skeleton className="h-3 w-1/2 sm:h-4" />
            </div>
          ))}
        </div>
      );
    } else if (showData?.results?.length === 0) {
      return (
        <p className="text-muted-foreground py-10 text-center text-sm sm:text-base">
          No results found for{" "}
          <span className="font-semibold">{debouncedSearch}</span>
        </p>
      );
    } else {
      return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-3 xl:grid-cols-6 2xl:grid-cols-7">
          {showData?.results?.map((show) => (
            <ContentCard key={show.id} show={show} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="mx-auto p-3 sm:p-4 md:p-6">
      <div className="relative mb-3 sm:mb-4">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            ref={inputRef}
            placeholder="Search TV Shows..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            className="pr-10 pl-10"
            autoComplete="off"
          />
          {search && (
            <button
              onClick={clearSearch}
              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {showAutocomplete && autocompleteSuggestions.length > 0 && (
          <div
            ref={autocompleteRef}
            className="bg-popover absolute top-full right-0 left-0 z-50 mt-1 max-h-80 overflow-auto rounded-md border shadow-lg"
          >
            {autocompleteSuggestions.map((show, index) => (
              <Link
                key={show.id}
                href={`/tv/${show.id}`}
                onClick={() => handleSuggestionClick(show.name)}
                className={`hover:bg-accent flex cursor-pointer items-center gap-3 p-3 transition-colors ${
                  index === selectedIndex ? "bg-accent" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  {show.poster_path ? (
                    <Image
                      src={getTMDBPosterImageUrl(show.poster_path)}
                      alt={show.name}
                      fill
                      loading="lazy"
                      className="h-12 w-8 rounded object-cover"
                    />
                  ) : (
                    <div className="bg-muted flex h-12 w-8 items-center justify-center rounded">
                      <Search className="text-muted-foreground h-3 w-3" />
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{show.name}</p>
                  {show.first_air_date && (
                    <p className="text-muted-foreground text-xs">
                      {new Date(show.first_air_date).getFullYear()}
                    </p>
                  )}
                  {show?.vote_average && show?.vote_average > 0 && (
                    <div className="mt-1 flex items-center gap-1">
                      <span className="text-muted-foreground text-xs">
                        ⭐ {show.vote_average.toFixed(1)}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
            {showData && showData?.results?.length > 8 && (
              <div className="border-t p-2 text-center">
                <p className="text-muted-foreground text-xs">
                  +{showData.results.length - 8} more results below
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {debouncedSearch && renderContent()}
    </div>
  );
}
