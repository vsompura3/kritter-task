import { Header } from "@/components/common/header";
import { HeroSection } from "@/components/shows/HeroSection";
import HomeScreen from "@/components/shows/HomeScreen";
import { tmdbQueryKeys } from "@/lib/constant";
import { makeQueryClient } from "@/lib/queryClient";
import {
  getPopularTVShows,
  getTopRatedTVShows,
  getTrendingTVShows,
  getTVShowsAiringToday,
  getTVShowsOnTheAir,
} from "@/services/tmdb/tmdb.service";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

async function TVPage() {
  try {
    const queryClient = makeQueryClient();
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: tmdbQueryKeys.trendingTVShows("week"),
        queryFn: () => getTrendingTVShows({ body: "week" }),
      }),
      queryClient.prefetchQuery({
        queryKey: tmdbQueryKeys.topRatedTVShows,
        queryFn: () => getTopRatedTVShows(),
      }),
      queryClient.prefetchQuery({
        queryKey: tmdbQueryKeys.popularTVShows,
        queryFn: () => getPopularTVShows(),
      }),
      queryClient.prefetchQuery({
        queryKey: tmdbQueryKeys.onTheAirTVShows,
        queryFn: () => getTVShowsOnTheAir(),
      }),
      queryClient.prefetchQuery({
        queryKey: tmdbQueryKeys.airingTodayTVShows,
        queryFn: () => getTVShowsAiringToday(),
      }),
    ]);

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <main className="flex flex-col">
          <HeroSection />
          <div className="flex-1">
            <HomeScreen />
          </div>
        </main>
      </HydrationBoundary>
    );
  } catch (error) {
    console.error(error);
    return (
      <main className="flex flex-col">
        <HeroSection />
        <div className="flex-1">
          <HomeScreen />
        </div>
      </main>
    );
  }
}

export default TVPage;
