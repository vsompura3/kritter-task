"use client";

import { useRouter } from "next/navigation";
import ShowDetails from "../shows/ShowDetails";
import { ScrollArea } from "../ui/scroll-area";
import { Sheet, SheetContent } from "../ui/sheet";

export default function DetailsModal() {
  const router = useRouter();

  return (
    <Sheet
      defaultOpen={true}
      open={true}
      onOpenChange={() => router.back()}
      modal={false}
    >
      <SheetContent
        side="bottom"
        className="mx-auto h-[80vh] max-w-4xl overflow-hidden rounded-t-md"
      >
        <ScrollArea className="h-full rounded-t-md">
          <ShowDetails />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
