export const tmdbQueryKeys = {
  trendingTVShows: (timeWindow: "day" | "week") => [
    "trendingTVShows",
    timeWindow,
  ],
  tvShowDetails: (tvShowId: number) => ["tvShowDetails", tvShowId],
};
