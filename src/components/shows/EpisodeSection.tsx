"use client";

import { Season } from "@/types/tmdb";
import { type TabConfig, TabList } from "../common/tab-list";
import SeasonList from "./SeasonList";

interface EpisodesSectionProps {
  seasons: Season[];
}

export function EpisodesSection({ seasons }: EpisodesSectionProps) {
  const tabs: TabConfig[] = [
    {
      id: "1",
      label: "Episodes",
      content: <SeasonList seasons={seasons} />,
    },
    {
      id: "2",
      label: "More Like This",
      content: <></>,
    },
    {
      id: "3",
      label: "Trailers & More",
      content: <></>,
    },
  ];

  return (
    <div className="space-y-6">
      <TabList tabs={tabs} />
    </div>
  );
}
