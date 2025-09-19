// import HomeScreen from "@/components/shows/HomeScreen";
// import { tmdbQueryKeys } from "@/lib/constant";
// import { makeQueryClient } from "@/lib/queryClient";
// import { getTrendingTVShows } from "@/services/tmdb/tmdb.service";
// import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/tv");
  //   try {
  //     const queryClient = makeQueryClient();
  //     await queryClient.prefetchQuery({
  //       queryKey: tmdbQueryKeys.trendingTVShows("week"),
  //       queryFn: () => getTrendingTVShows("week"),
  //     });
  //     return (
  //       <HydrationBoundary state={dehydrate(queryClient)}>
  //         <HomeScreen />
  //       </HydrationBoundary>
  //     );
  //   } catch (error) {
  //     console.error(error);
  // return <HomeScreen />;
  //   }
  return <p>Home</p>;
}
