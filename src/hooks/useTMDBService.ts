"use client";
import { tmdbQueryKeys } from "@/lib/constant";
import {
  getPopularTVShows,
  getTopRatedTVShows,
  getTrendingTVShows,
  getTVShowDetails,
  getTVShowEpisodeDetails,
  getTVShowsAiringToday,
  getTVShowsOnTheAir,
  searchTVShows,
} from "@/services/tmdb/tmdb.service";
import { Season, TMDBResponseBody, TVShow } from "@/types/tmdb";
import { useQuery } from "@tanstack/react-query";

export const useTrendingTVShows = (timeWindow: "day" | "week" = "week") => {
  return useQuery<TMDBResponseBody<TVShow[]>, Error>({
    queryKey: tmdbQueryKeys.trendingTVShows(timeWindow),
    queryFn: () => getTrendingTVShows({ body: timeWindow }),
    enabled: !timeWindow,
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};

export const useTopRatedTVShows = () => {
  return useQuery<TMDBResponseBody<TVShow[]>, Error>({
    queryKey: tmdbQueryKeys.topRatedTVShows,
    queryFn: () => getTopRatedTVShows(),
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};

export const usePopularTVShows = () => {
  return useQuery<TMDBResponseBody<TVShow[]>, Error>({
    queryKey: tmdbQueryKeys.popularTVShows,
    queryFn: () => getPopularTVShows(),
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};

export const useOnTheAirTVShows = () => {
  return useQuery<TMDBResponseBody<TVShow[]>, Error>({
    queryKey: tmdbQueryKeys.onTheAirTVShows,
    queryFn: () => getTVShowsOnTheAir(),
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};

export const useAiringTodayTVShows = () => {
  return useQuery<TMDBResponseBody<TVShow[]>, Error>({
    queryKey: tmdbQueryKeys.airingTodayTVShows,
    queryFn: () => getTVShowsAiringToday(),
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};

export const useTVShowDetails = (tvShowId: number) => {
  return useQuery<TVShow, Error>({
    queryKey: tmdbQueryKeys.tvShowDetails(tvShowId),
    queryFn: () => getTVShowDetails(tvShowId),
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};

export const useTVShowEpisodeDetails = (
  seriesId: number,
  seasonNumber: number,
) => {
  return useQuery<Season, Error>({
    queryKey: tmdbQueryKeys.tvShowEpisodeDetails(seriesId, seasonNumber),
    queryFn: () => getTVShowEpisodeDetails(seriesId, seasonNumber),
    enabled: !seriesId || !seasonNumber,
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};

export const useSearchTVShows = (query: string) =>
  useQuery<TMDBResponseBody<TVShow[]>, Error>({
    queryKey: ["search-tv", query],
    queryFn: () =>
      searchTVShows({
        body: { query: query?.trim()?.toLowerCase() || "" },
      }),
    enabled: !!query,
    staleTime: 1000 * 60,
  });
