import ShowDetails from "@/components/shows/ShowDetails";
import { tmdbQueryKeys } from "@/lib/constant";
import { makeQueryClient } from "@/lib/queryClient";
import { getTVShowDetails } from "@/services/tmdb/tmdb.service";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React from "react";

interface SeriesPageProps {
  params: Promise<{ series_id: string }>;
}

async function SeriesPage({ params }: SeriesPageProps) {
  const { series_id } = await params;
  const seriesId = Number(series_id);

  try {
    const queryClient = makeQueryClient();
    await queryClient.prefetchQuery({
      queryKey: tmdbQueryKeys.tvShowDetails(seriesId),
      queryFn: () => getTVShowDetails(seriesId),
    });

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ShowDetails />
      </HydrationBoundary>
    );
  } catch (error) {
    console.error("Error loading show details:", error);
    return <ShowDetails />;
  }
}

export default SeriesPage;
