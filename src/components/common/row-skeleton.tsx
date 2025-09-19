import CardSkeleton from "./card-skeleton";

export function RowSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-6">
        <div className="bg-muted/30 h-7 w-32 animate-pulse rounded" />
        <div className="bg-muted/20 h-5 w-16 animate-pulse rounded" />
      </div>

      <div className="flex gap-4 overflow-hidden px-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <CardSkeleton key={idx} />
        ))}
      </div>
    </div>
  );
}
