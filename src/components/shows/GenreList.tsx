import { Genre } from "@/types/tmdb";
import React from "react";

interface GenreListProps {
  genres: Genre[];
}

function GenreList({ genres }: GenreListProps) {
  if (!genres || genres.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 flex items-center gap-4 text-lg text-gray-200">
      {genres.map((genre, index) => (
        <React.Fragment key={genre.id}>
          <span className="font-semibold">{genre.name}</span>
          {index < genres.length - 1 && <span>|</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default GenreList;
