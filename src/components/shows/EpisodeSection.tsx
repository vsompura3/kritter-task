"use client";

import { Season } from "@/types/tmdb";
import { TabConfig, TabList } from "../common/tab-list";

interface EpisodesSectionProps {
  seasons: Season[];
}

export function EpisodesSection({ seasons }: EpisodesSectionProps) {
  console.log(seasons, "Seasons");

  const tabsData: TabConfig[] = seasons.map((season) => {
    return {
      id: season.id?.toString() || "",
      label: "Episode",
      content: <div>Content for {season.name}</div>,
    };
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Episodes</h2>
      <TabList tabs={tabsData} defaultValue={tabsData[0]?.id} />
    </div>
  );
}
