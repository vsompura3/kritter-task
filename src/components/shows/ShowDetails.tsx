"use client";
import { useTVShowDetails } from "@/hooks/useTMDBService";
import {
  getLanguageNameIntl,
  getRatingStars,
  getTMDBBackdropImageUrl,
  getYearFromISODate,
} from "@/lib/utils";
import Image from "next/image";
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

  return <div></div>;
}

export default ShowDetails;
