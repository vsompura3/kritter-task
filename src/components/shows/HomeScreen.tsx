"use client";
import {
  useAiringTodayTVShows,
  useOnTheAirTVShows,
  usePopularTVShows,
  useTopRatedTVShows,
  useTrendingTVShows,
} from "@/hooks/useTMDBService";
import { RowSkeleton } from "../common/row-skeleton";
import ContentRow from "./ContentRow";

const SHOW_SECTIONS_CONFIG = [
  {
    key: "trending",
    title: "Trending Now",
    hook: useTrendingTVShows,
  },
  {
    key: "topRated",
    title: "Top Rated",
    hook: useTopRatedTVShows,
  },
  {
    key: "popular",
    title: "Popular Shows",
    hook: usePopularTVShows,
  },
  {
    key: "airingToday",
    title: "Airing Today",
    hook: useAiringTodayTVShows,
  },
  {
    key: "onTheAir",
    title: "Currently Airing",
    hook: useOnTheAirTVShows,
  },
] as const;

function HomeScreen() {
  return (
    <div className="space-y-8 pt-6 pb-20">
      {SHOW_SECTIONS_CONFIG.map(({ key, title, hook }) => {
        const { data, isPending } = hook();

        if (isPending) {
          return <RowSkeleton key={key} />;
        }

        return (
          <ContentRow key={key} title={title} shows={data?.results || []} />
        );
      })}
    </div>
  );
}

export default HomeScreen;
