"use client";

import { TVShow } from "@/types/tmdb";
import CardSkeleton from "../common/card-skeleton";
import ContentCard from "./ContentCard";

interface Props {
  title: string;
  isLoading: boolean;
  shows: TVShow[];
}

export default function ContentRow({ title, shows, isLoading }: Props) {
  return (
    <section className="mb-6">
      <h2 className="mb-3 px-4 text-xl font-semibold md:text-2xl">{title}</h2>
      <div className="scrollbar-hide flex space-x-3 overflow-x-auto px-4">
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <CardSkeleton key={idx} />
            ))
          : shows?.map((show) => <ContentCard key={show.id} show={show} />)}
      </div>
    </section>
  );
}
