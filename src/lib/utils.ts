import { TMDBRequestBody } from "@/types/tmdb";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImageUrl = (path: string | null | undefined, size = "w500") => {
  if (!path) return "/placeholder.png";
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const apiPayloadWithDefaults = <T>(data: T): TMDBRequestBody<T> => {
  return {
    page: 1,
    search: "",
    sort_by: "",
    body: data,
  };
};
