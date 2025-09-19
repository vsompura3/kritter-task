"use client";

import { Button } from "@/components/ui/button";
import { getPosterImageUrl } from "@/lib/utils";
import { TVShow } from "@/types/tmdb";
import { Play, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ContentCardProps {
  show: TVShow;
}

export function ContentCard({ show }: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      title={show.name}
      href={`/tv/${show.id}`}
      className="group relative w-44 flex-shrink-0 cursor-pointer md:w-48"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`bg-card relative overflow-hidden rounded-lg transition-all duration-300 ease-out ${isHovered ? "scale-105" : "scale-100"} `}
      >
        <div className="relative aspect-[2/3]">
          <img
            src={getPosterImageUrl(show.poster_path) || "/placeholder.svg"}
            alt={show.name}
            className="h-full w-full object-cover"
          />

          {/* {show.badge && (
            <div className="bg-primary absolute top-2 left-2 rounded px-2 py-1 text-xs font-medium text-white">
              {show.badge}
            </div>
          )} */}

          <div
            className={`absolute inset-0 flex items-center justify-center bg-black/60 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"} `}
          >
            <Button
              size="icon"
              className="h-12 w-12 rounded-full bg-white text-black hover:bg-white/90"
            >
              <Play className="ml-0.5 h-5 w-5 fill-current" />
            </Button>
          </div>
        </div>

        <div
          className={`absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/90 to-transparent p-3 transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"} `}
        >
          <h3 className="mb-1 line-clamp-1 text-sm font-medium text-white">
            {show.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-300">{"Comedy"}</p>
            {/* <p className="text-xs text-gray-300">{show.genre}</p> */}

            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-white">{"PG"}</span>
              {/* <span className="text-xs text-white">{show.rating}</span> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 md:hidden">
        <h3 className="text-foreground mb-1 line-clamp-1 text-sm font-medium">
          {show.name}
        </h3>
        <div className="flex items-center justify-between">
          {/* <p className="text-muted-foreground text-xs">{show.genre}</p> */}
          <p className="text-muted-foreground text-xs">Comedy</p>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-foreground text-xs">{"PG"}</span>
            {/* <span className="text-foreground text-xs">{show.rating}</span> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
