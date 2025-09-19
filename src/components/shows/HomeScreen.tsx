"use client";
import {
  useAiringTodayTVShows,
  useOnTheAirTVShows,
  usePopularTVShows,
  useTopRatedTVShows,
  useTrendingTVShows,
} from "@/hooks/useTMDBService";
import ContentRow from "./ContentRow";

function HomeScreen() {
  const { data: trendingShowsData, isPending: trendingShowsPending } =
    useTrendingTVShows();
  const { data: popularShowsData, isPending: popularShowsPending } =
    usePopularTVShows();
  const { data: onTheAirShowsData, isPending: onTheAirShowsPending } =
    useOnTheAirTVShows();
  const { data: topRatedShowsData, isPending: topRatedShowsPending } =
    useTopRatedTVShows();
  const { data: airingTodayShowsData, isPending: airingTodayShowsPending } =
    useAiringTodayTVShows();

  return (
    <div>
      {trendingShowsData && (
        <ContentRow
          title="Trending"
          shows={trendingShowsData.results}
          isLoading={trendingShowsPending}
        />
      )}
      {topRatedShowsData && (
        <ContentRow
          title="Top Rated"
          shows={topRatedShowsData.results}
          isLoading={popularShowsPending}
        />
      )}
      {popularShowsData && (
        <ContentRow
          title="Popular"
          shows={popularShowsData.results}
          isLoading={onTheAirShowsPending}
        />
      )}
      {airingTodayShowsData && (
        <ContentRow
          title="Airing Today"
          shows={airingTodayShowsData.results}
          isLoading={topRatedShowsPending}
        />
      )}
      {onTheAirShowsData && (
        <ContentRow
          title="Currently Airing"
          shows={onTheAirShowsData.results}
          isLoading={airingTodayShowsPending}
        />
      )}
    </div>
  );
}

export default HomeScreen;
