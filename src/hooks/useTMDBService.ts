"use client";
import { tmdbQueryKeys } from "@/lib/constant";
import {
  getTrendingTVShows,
  getTVShowDetails,
} from "@/services/tmdb/tmdb.service";
import { TMDBResponseBody, TVShow } from "@/types/tmdb";
import { useQuery } from "@tanstack/react-query";

export const useTrendingTVShows = (timeWindow: "day" | "week" = "week") => {
  return useQuery<TMDBResponseBody<TVShow[]>, Error>({
    queryKey: tmdbQueryKeys.trendingTVShows(timeWindow),
    queryFn: () => getTrendingTVShows(timeWindow),
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
