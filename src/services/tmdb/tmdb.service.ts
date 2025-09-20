import coreApi from "@/lib/coreApi";
import { apiPayloadWithDefaults } from "@/lib/utils";
import {
  Season,
  TMDBRequestBody,
  TMDBResponseBody,
  TVShow,
} from "@/types/tmdb";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "Failed to fetch data from TMDB";
}

export const getTrendingTVShows = async (
  payload: TMDBRequestBody<"week" | "day"> = apiPayloadWithDefaults("week"),
): Promise<TMDBResponseBody<TVShow[]>> => {
  try {
    const response = await coreApi.get(`/trending/tv/${payload?.body}`);
    return response.data;
  } catch (error: unknown) {
    console.error("ERROR: TMDB Trending TV Shows Fetch Error:", error);
    throw new Error(getErrorMessage(error));
  }
};

export const getTVShowsAiringToday = async (
  payload: TMDBRequestBody<null> = apiPayloadWithDefaults(null),
): Promise<TMDBResponseBody<TVShow[]>> => {
  try {
    const response = await coreApi.get(`tv/airing_today?page=${payload.page}`);
    return response.data;
  } catch (error: unknown) {
    console.error("ERROR: TMDB Airing Today TV Shows Fetch Error:", error);
    throw new Error(getErrorMessage(error));
  }
};

export const getTVShowsOnTheAir = async (
  payload: TMDBRequestBody<null> = apiPayloadWithDefaults(null),
): Promise<TMDBResponseBody<TVShow[]>> => {
  try {
    const response = await coreApi.get(`tv/on_the_air?page=${payload.page}`);
    return response.data;
  } catch (error: unknown) {
    console.error("ERROR: TMDB On The Air TV Shows Fetch Error:", error);
    throw new Error(getErrorMessage(error));
  }
};

export const getPopularTVShows = async (
  payload: TMDBRequestBody<null> = apiPayloadWithDefaults(null),
): Promise<TMDBResponseBody<TVShow[]>> => {
  try {
    const response = await coreApi.get(`tv/popular?page=${payload.page}`);
    return response.data;
  } catch (error: unknown) {
    console.error("ERROR: TMDB Popular TV Shows Fetch Error:", error);
    throw new Error(getErrorMessage(error));
  }
};

export const getTopRatedTVShows = async (
  payload: TMDBRequestBody<null> = apiPayloadWithDefaults(null),
): Promise<TMDBResponseBody<TVShow[]>> => {
  try {
    const response = await coreApi.get(`tv/top_rated?page=${payload.page}`);
    return response.data;
  } catch (error: unknown) {
    console.error("ERROR: TMDB Top Rated TV Shows Fetch Error:", error);
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

export const getTVShowEpisodeDetails = async (
  seriesId: number,
  seasonNumber: number,
): Promise<Season> => {
  try {
    const response = await coreApi.get(
      `/tv/${seriesId}/season/${seasonNumber}`,
    );
    return response.data;
  } catch (error: unknown) {
    console.error("ERROR: TMDB TV Show Episode Details Fetch Error:", error);
    throw new Error(getErrorMessage(error));
  }
};
