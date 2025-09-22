"use client";

import { Button } from "@/components/ui/button";
import { useTVShowDetails } from "@/hooks/useTMDBService";
import {
  getLanguageNameIntl,
  getTMDBBackdropImageUrl,
  getYearFromISODate,
} from "@/lib/utils";
import { Play, Plus } from "lucide-react";
import MediaMetadata from "../common/media-metadata";

const SERIES_ID = 110492;

export function HeroSection() {
  const { data: showData } = useTVShowDetails(SERIES_ID);

  return (
    <div className="relative h-[60vh] overflow-hidden md:h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getTMDBBackdropImageUrl(showData?.backdrop_path)})`,
        }}
      />
      <div className="from-background via-background/70 absolute inset-0 bg-gradient-to-r to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl leading-tight font-bold md:text-5xl">
                {showData?.name}
              </h1>
              <p className="text-muted-foreground line-clamp-3 text-lg">
                {showData?.overview}
              </p>
            </div>

            <MediaMetadata
              year={
                (showData?.first_air_date &&
                  getYearFromISODate(showData.first_air_date)) ||
                undefined
              }
              rating={showData?.adult ? "A" : "U/A 13+"}
              language={
                showData?.original_language &&
                getLanguageNameIntl(showData.original_language)
              }
              className="text-foreground/80"
            />

            <div className="flex gap-4 pt-2">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-background !h-12 cursor-pointer rounded-md px-8 py-3 font-medium"
              >
                <Play className="size-5" />
                Watch Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border bg-card/50 hover:bg-card text-foreground/80 !h-12 cursor-pointer rounded-md px-6 py-3"
              >
                <Plus className="size-5" />
                Watchlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
