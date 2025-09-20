"use client";

import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-sm">
      <Link href={"/"} className="text-foreground text-xl font-bold">
        Kritter/Star
      </Link>
      <div className="flex items-center gap-2">
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground relative"
        >
          <Link href={`/explore`}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Explore Shows</span>
          </Link>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground"
        >
          <User className="h-5 w-5" />
          <span className="sr-only">Account</span>
        </Button>
      </div>
    </header>
  );
}
