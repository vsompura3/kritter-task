"use client";
import { useTVShowDetails } from "@/hooks/useTMDBService";
import {
  getLanguageNameIntl,
  getTMDBBackdropImageUrl,
  getYearFromISODate,
} from "@/lib/utils";
import { Play, Plus } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loader from "../common/loader";
import MediaMetadata from "../common/media-metadata";
import { type TabConfig, TabList } from "../common/tab-list";
import { Button } from "../ui/button";
import GenreList from "./GenreList";
import SeasonList from "./SeasonList";

function ShowDetails() {
  const params = useParams();
  const seriesId = Number(params?.series_id);

  const { data: showData, isPending } = useTVShowDetails(seriesId);

  const tabs: TabConfig[] = [
    {
      id: "episodes",
      label: "Episodes",
      content: (
        <SeasonList key={showData?.id} seasons={showData?.seasons || []} />
      ),
    },
  ];

  if (isPending) {
    return (
      <div className="bg-background grid min-h-screen place-content-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="relative h-[65vh] overflow-hidden md:h-[65] lg:h-[75vh]">
        <Image
          src={getTMDBBackdropImageUrl(showData?.backdrop_path)}
          alt={showData?.name || ""}
          width={1920}
          height={1080}
          className="object-cover"
          priority
        />
        <div className="from-background via-background/50 absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="absolute right-4 bottom-6 left-4 space-y-4 md:right-6 md:bottom-8 md:left-6 md:space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl leading-tight font-bold text-balance text-white md:text-4xl lg:text-5xl">
              {showData?.name}
            </h1>
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
            />
            <p className="max-w-3xl text-base leading-relaxed text-pretty text-gray-200 md:text-lg">
              {showData?.overview}
            </p>
            <div className="flex flex-wrap gap-2">
              {showData?.genres && <GenreList genres={showData?.genres} />}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 !h-12 cursor-pointer px-8 text-base"
            >
              <Play className="size-5" />
              Watch Latest Episode
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="!h-12 cursor-pointer border-white/20 bg-transparent px-8 text-base text-white hover:bg-white/10"
            >
              <Plus className="size-5" />
              Add to Watchlist
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <TabList tabs={tabs} />
      </div>
    </div>
  );
}

export default ShowDetails;
