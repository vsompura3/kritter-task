"use client";
import { useTrendingTVShows } from "@/hooks/useTMDBService";
import Image from "next/image";
import Loader from "../common/loader";
import { Button } from "../ui/button";

function HomeScreen() {
  const { data, isPending, refetch } = useTrendingTVShows();

  if (isPending) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Trending TV Shows</h1>
      <Button onClick={() => refetch()}>Refresh</Button>
      {data &&
        data?.results?.map((show) => {
          return (
            <div key={show.id}>
              <Image
                width={168}
                height={240}
                alt={`Poster for ${show.name}`}
                src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_PREFIX_URL}/w185${show.poster_path}`}
              />
              <p>{show.name}</p>
              <p>{show.overview}</p>
              <p>First Air Date: {show.first_air_date}</p>
              <p>Vote Average: {show.vote_average}</p>
              <hr />
            </div>
          );
        })}
    </div>
  );
}

export default HomeScreen;
