import { Season } from "@/types/tmdb";
import { useParams } from "next/navigation";
import { useState } from "react";
import CustomSelect from "../common/custom-select";
import EpisodeDetail from "./EpisodeDetail";

interface SeasonListProps {
  seasons: Season[];
}

function SeasonList({ seasons }: SeasonListProps) {
  const params = useParams();
  const seriesId: number = Number(params?.series_id) || 0;
  const [selectedSeason, setSelectedSeason] = useState<string>(
    seasons[0]?.season_number.toString() || "",
  );

  return (
    <div className="space-y-6">
      <div className="px-4 md:px-6">
        <CustomSelect
          options={
            seasons
              ? seasons.map((season) => ({
                  id: season?.id?.toString(),
                  label: season?.name || `Season ${season?.season_number}`,
                  value: season?.season_number.toString(),
                }))
              : []
          }
          value={selectedSeason}
          onValueChange={(value) => setSelectedSeason(value)}
        />
      </div>
      <EpisodeDetail
        seasonNumber={Number(selectedSeason)}
        seriesId={seriesId}
      />
    </div>
  );
}

export default SeasonList;
