import { Skeleton } from "../ui/skeleton";

function CardSkeleton() {
  return (
    <div className="relative w-44 flex-shrink-0 md:w-48">
      <div className="bg-card relative overflow-hidden rounded-lg">
        <Skeleton className="bg-muted/20 relative aspect-[2/3]" />
        <Skeleton className="bg-muted/30 absolute top-2 left-2 h-5 w-16 rounded" />
      </div>
      <div className="mt-2 space-y-1 md:hidden">
        <Skeleton className="bg-muted/20 h-4 w-32 rounded" />
        <div className="flex items-center justify-between">
          <Skeleton className="bg-muted/20 h-3 w-16 rounded" />
          <Skeleton className="bg-muted/20 h-3 w-8 rounded" />
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
