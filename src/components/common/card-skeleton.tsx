import { Skeleton } from "../ui/skeleton";

function CardSkeleton() {
  return (
    <Skeleton className="w-36 sm:w-40 md:w-44 lg:w-48">
      <Skeleton className="relative aspect-[2/3] overflow-hidden rounded-lg bg-gray-800" />
    </Skeleton>
  );
}

export default CardSkeleton;
