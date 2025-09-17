import HomeScreen from "@/components/home/HomeScreen";
import { tmdbQueryKeys } from "@/lib/constant";
import { makeQueryClient } from "@/lib/queryClient";
import { getTrendingTVShows } from "@/services/tmdb/tmdb.service";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Home() {
  try {
    const queryClient = makeQueryClient();

    await queryClient.prefetchQuery({
      queryKey: tmdbQueryKeys.trendingTVShows("week"),
      queryFn: () => getTrendingTVShows("week"),
    });

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HomeScreen />
      </HydrationBoundary>
    );
  } catch (error) {
    console.error(error);
    return <HomeScreen />;
  }
}
