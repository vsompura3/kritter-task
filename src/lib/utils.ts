import { TMDBRequestBody } from "@/types/tmdb";
import { clsx, type ClassValue } from "clsx";
import { getYear, parseISO } from "date-fns";
import { twMerge } from "tailwind-merge";
import { GENRE_MAP } from "./constant";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTMDBPosterImageUrl = (
  path: string | null | undefined,
  size:
    | "w92"
    | "w154"
    | "w185"
    | "w342"
    | "w500"
    | "w780"
    | "original" = "original",
) => {
  if (!path) return "/placeholder.png";
  return `${process.env.NEXT_PUBLIC_TMDB_IMAGE_PREFIX_URL}/${size}${path}`;
};

export const getTMDBBackdropImageUrl = (
  path: string | null | undefined,
  size: "w300" | "w780" | "w1280" | "original" = "original",
) => {
  if (!path) return "/placeholder.png";
  return `${process.env.NEXT_PUBLIC_TMDB_IMAGE_PREFIX_URL}/${size}${path}`;
};

export const apiPayloadWithDefaults = <T>(data: T): TMDBRequestBody<T> => {
  return {
    page: 1,
    search: "",
    sort_by: "",
    body: data,
  };
};

export const getYearFromISODate = (dateString: string): number => {
  return getYear(parseISO(dateString));
};

export const getLanguageNameIntl = (languageCode: string) => {
  try {
    const displayNames = new Intl.DisplayNames(["en"], { type: "language" });
    return displayNames.of(languageCode);
  } catch (error) {
    return languageCode;
  }
};

export const formatRating = (rating: number) => {
  if (!rating) return null;
  return Number(rating).toFixed(1);
};

export const getRatingStars = (rating: number) => {
  if (!rating) return "";
  const normalizedRating = rating / 2;
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 >= 0.5;

  let stars = "★".repeat(fullStars);
  if (hasHalfStar) stars += "☆";

  return stars;
};

export const getGenreFromGenreId = (genreId: number) => {
  return GENRE_MAP[genreId] || "Unknown";
};
