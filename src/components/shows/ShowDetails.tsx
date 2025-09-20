"use client";
import { useTVShowDetails } from "@/hooks/useTMDBService";
import {
  getLanguageNameIntl,
  getRatingStars,
  getTMDBBackdropImageUrl,
  getYearFromISODate,
} from "@/lib/utils";
import { useParams } from "next/navigation";
import Loader from "../common/loader";
import MediaMetadata from "../common/media-metadata";
import { Button } from "../ui/button";
import { EpisodesSection } from "./EpisodeSection";
import GenreList from "./GenreList";

function ShowDetails() {
  const params = useParams();
  const seriesId = Number(params?.series_id);

  const { data: showData, isPending } = useTVShowDetails(seriesId);

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-dvh">
      <div className="absolute inset-0">
        <img
          src={getTMDBBackdropImageUrl(showData?.backdrop_path)}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <div className="mb-6">
          <h1 className="mb-2 text-5xl font-bold tracking-wider">
            {showData?.name}
          </h1>
          <div className="mb-4 flex items-center gap-2 text-orange-400">
            {showData?.vote_average && (
              <div className="mb-4 flex items-center gap-3 text-orange-400">
                <div className="flex items-center gap-1">
                  <span className="text-xl">
                    {getRatingStars(showData.vote_average)}
                  </span>
                  {/* <span className="ml-2 text-lg font-semibold text-white">
                    {formatRating(showData.vote_average)}/10
                  </span> */}
                </div>
                {showData?.vote_count && (
                  <span className="text-sm text-gray-400">
                    ({showData.vote_count.toLocaleString()} votes)
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        <MediaMetadata
          year={
            (showData?.first_air_date &&
              getYearFromISODate(showData.first_air_date)) ||
            undefined
          }
          rating={showData?.adult ? "A" : "U/A 13+"}
          language={
            showData?.original_language &&
            getLanguageNameIntl(showData.original_language)
          }
        />

        <p className="mb-6 max-w-2xl text-lg leading-relaxed text-gray-200">
          {showData?.overview}
        </p>

        {showData?.genres && <GenreList genres={showData?.genres} />}

        <div className="flex items-center gap-4">
          <Button className="flex transform items-center gap-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Now
          </Button>
        </div>
        {showData?.seasons && <EpisodesSection seasons={showData?.seasons} />}
      </div>
    </div>
  );
}

export default ShowDetails;
