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

export const GENRE_MAP: Record<number, string> = {
  10_759: "Action & Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10_751: "Family",
  10_762: "Kids",
  9648: "Mystery",
  10_763: "News",
  10_764: "Reality",
  10_765: "Sci-Fi & Fantasy",
  10_766: "Soap",
  10_767: "Talk",
  10_768: "War & Politics",
  37: "Western",
};
