"use client";

import { TVShow } from "@/types/tmdb";
import { ContentCard } from "./ContentCard";

interface Props {
  title: string;
  shows: TVShow[];
}

export default function ContentRow({ title, shows }: Props) {
  console.log(shows);
  return (
    <section className="space-y-2 pl-6">
      <div className="flex items-center justify-between">
        <h2 className="text-foreground ml-2 text-2xl font-bold md:text-xl">
          {title}
        </h2>
      </div>
      <div className="scrollbar-hide flex gap-4 overflow-x-auto p-2">
        {shows.map((show) => (
          <ContentCard key={show.id} show={show} />
        ))}
      </div>
    </section>
  );
}
