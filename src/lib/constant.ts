export const tmdbQueryKeys = {
  trendingTVShows: (timeWindow: "day" | "week") => [
    "tv",
    "trending",
    timeWindow,
  ],
  airingTodayTVShows: ["tv", "airing_today"],
  onTheAirTVShows: ["tv", "on_the_air"],
  popularTVShows: ["tv", "popular"],
  topRatedTVShows: ["tv", "top_rated"],
  tvShowDetails: (tvShowId: number) => ["tv", "details", tvShowId],
};
