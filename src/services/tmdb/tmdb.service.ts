import coreApi from "@/lib/coreApi";
import { TMDBResponseBody, TVShow } from "@/types/tmdb";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "Failed to fetch data from TMDB";
}

export const getTrendingTVShows = async (
  timeWindow: "day" | "week" = "week",
): Promise<TMDBResponseBody<TVShow[]>> => {
  try {
    const response = await coreApi.get(`/trending/tv/${timeWindow}`);
    return response.data;
  } catch (error: unknown) {
    console.error("ERROR: TMDB Trending Fetch Error:", error);
    throw new Error(getErrorMessage(error));
  }
};

export const getTVShowDetails = async (tvShowId: number): Promise<TVShow> => {
  try {
    const response = await coreApi.get(`/tv/${tvShowId}`);
    return response.data;
  } catch (error: unknown) {
    console.error("ERROR: TMDB TV Show Details Fetch Error:", error);
    throw new Error(getErrorMessage(error));
  }
};
