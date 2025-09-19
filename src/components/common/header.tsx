"use client";

import { Button } from "@/components/ui/button";
import { Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-sm">
      <div className="text-foreground text-xl font-bold">Kritter/Star</div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground relative"
        >
          <Bell className="h-5 w-5" />
          <div className="bg-primary absolute -top-1 -right-1 h-2 w-2 rounded-full"></div>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground"
        >
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
