"use client";

import { Button } from "@/components/ui/button";
import { Play, Plus } from "lucide-react";

const featuredShow = {
  title: "The Trial",
  subtitle: "Pyaar • Kanoon • Dhokha",
  description:
    "Noyonika fights for justice, navigating family, politics, betrayal and heartbreak.",
  year: "2025",
  rating: "U/A 16+",
  seasons: "2 Seasons",
  languages: "7 Languages",
  genres: ["Drama", "Family", "Procedural", "Romance"],
  image:
    "https://cdn.dribbble.com/userupload/3225442/file/original-11cf7b4a96b84777e8ce5df0b19d0898.png?resize=2048x1536&vertical=center",
};

export function HeroSection() {
  return (
    <div className="relative h-[60vh] overflow-hidden md:h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${featuredShow.image})` }}
      />
      <div className="from-background via-background/80 absolute inset-0 bg-gradient-to-r to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl leading-tight font-bold text-white md:text-5xl">
                The Trial
              </h1>
              <p className="text-muted-foreground text-lg">
                {featuredShow.subtitle}
              </p>
            </div>

            <div className="text-muted-foreground flex items-center gap-3 text-sm">
              <span>{featuredShow.year}</span>
              <span>•</span>
              <span>{featuredShow.rating}</span>
              <span>•</span>
              <span>{featuredShow.seasons}</span>
            </div>

            <p className="text-foreground/80 text-base leading-relaxed">
              {featuredShow.description}
            </p>

            <div className="text-muted-foreground flex gap-3 text-sm">
              {featuredShow.genres.map((genre, index) => (
                <span key={genre}>
                  {genre}
                  {index < featuredShow.genres.length - 1 && " • "}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-2">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 rounded-lg px-8 py-3 font-medium text-white"
              >
                <Play className="mr-2 h-4 w-4 fill-current" />
                Watch Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border bg-card/50 hover:bg-card rounded-lg px-6 py-3 text-white"
              >
                <Plus className="mr-2 h-4 w-4" />
                Watchlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
