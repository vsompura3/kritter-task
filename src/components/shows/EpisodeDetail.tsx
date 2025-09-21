import { useTVShowEpisodeDetails } from "@/hooks/useTMDBService";
import { formatRuntime, getTMDBPosterImageUrl } from "@/lib/utils";
import { Play } from "lucide-react";
import Image from "next/image";
import Loader from "../common/loader";

interface EpisodeDetailProps {
  seasonNumber?: number;
  seriesId: number;
}

function EpisodeDetail({ seasonNumber = 1, seriesId }: EpisodeDetailProps) {
  const { data: episodesData, isPending } = useTVShowEpisodeDetails(
    seriesId,
    seasonNumber,
  );
  const episodes = episodesData?.episodes || [];

  if (isPending) {
    return (
      <div className="mt-4">
        <Loader />
      </div>
    );
  }

  return (
    <div className="mx-2 space-y-4">
      {episodes.map((episode) => (
        <div
          key={episode.id}
          className="group flex cursor-pointer gap-4 rounded-lg p-4 transition-colors hover:bg-white/5"
        >
          <div className="relative h-24 w-40 flex-shrink-0 overflow-hidden rounded-md bg-gray-800">
            <Image
              src={getTMDBPosterImageUrl(episode?.still_path)}
              alt={episode.name}
              width={160}
              height={96}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <Play className="h-8 w-8 fill-white text-white" />
            </div>
          </div>

          {/* Episode Info */}
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold text-white">{episode.name}</h3>
            <div className="text-sm text-gray-400">
              S{episode.season_number} E{episode.episode_number} •{" "}
              {episode.air_date} • {formatRuntime(episode.runtime)}
            </div>
            <p className="line-clamp-3 text-sm leading-relaxed text-gray-300 md:line-clamp-none">
              {episode.overview || "No overview available."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EpisodeDetail;
