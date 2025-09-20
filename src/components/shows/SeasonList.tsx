import { Season } from "@/types/tmdb";
import { useParams } from "next/navigation";
import { TabList, type TabConfig } from "../common/tab-list";
import EpisodeDetail from "./EpisodeDetail";

interface SeasonListProps {
  seasons: Season[];
}

function SeasonList({ seasons }: SeasonListProps) {
  const params = useParams();
  const seriesId: number = Number(params?.series_id) || 0;

  const tabs: TabConfig[] = seasons.map((season, idx) => ({
    id: season.id.toString(),
    label: season.name || `Season ${season.season_number || idx + 1}`,
    content: (
      <EpisodeDetail seasonNumber={season.season_number} seriesId={seriesId} />
    ),
  }));

  return (
    <div>
      <TabList tabs={tabs} />
    </div>
  );
}

export default SeasonList;
