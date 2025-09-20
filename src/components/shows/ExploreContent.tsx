"use client";

import { Input } from "@/components/ui/input";
import { useSearchTVShows } from "@/hooks/useTMDBService";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { Skeleton } from "../ui/skeleton";
import { ContentCard } from "./ContentCard";

export default function ExploreContent() {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 400);

  const { data: showData, isPending } = useSearchTVShows(debouncedSearch);

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
      <Input
        placeholder="Search TV Shows..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-3 sm:mb-4"
      />
      {debouncedSearch && renderContent()}
    </div>
  );
}
