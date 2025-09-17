// services/tmdb/tv.service.ts

import coreApi from "@/lib/coreApi";
import { TMDBResponseBody, TVShow } from "@/types/tmdb";

export const getTrendingTVShows = async (
  timeWindow: "day" | "week" = "week",
): Promise<TMDBResponseBody<TVShow[]>> => {
  try {
    const response = await coreApi.get(`/trending/tv/${timeWindow}`);
    return response.data;
  } catch (error: any) {
    console.error("ERROR: TMDB Trending Fetch Error:", error);
    throw new Error(
      error?.response?.data?.status_message ||
        "Failed to fetch trending TV shows",
    );
  }
};

export const getTVShowDetails = async (tvShowId: number): Promise<TVShow> => {
  try {
    const response = await coreApi.get(`/tv/${tvShowId}`);
    return response.data;
  } catch (error: any) {
    console.error("ERROR: TMDB TV Show Details Fetch Error:", error);
    throw new Error(
      error?.response?.data?.status_message ||
        "Failed to fetch TV show details",
    );
  }
};
