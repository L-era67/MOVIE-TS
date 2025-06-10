// import { Footer } from "@/components/Footer";
// import { Header } from "@/components/Header";
// import { getMovieDetails } from "@/utils/get-Movie-details";
// import { TrailerDetail } from "@/components/movieDetail/DetailTrailer";
// import { GenreDetail } from "@/components/movieDetail/GenreDetail";
// import { InfoData } from "@/components/movieDetail/Info-data";
// import { MoreLikeData } from "@/components/movieDetail/MoreLikeThisData";
// import { MovieDetailTitle } from "@/components/movieDetail/MovieDetailRating";
// import { DetailLoader } from "@/components/skeletons/MovieDetailLoader";
// import { getMovieDetails } from "@/lib/api/getMovieDetails";

import { MovieCard } from "@/components/MovieCard";
import { DetailClient } from "./components/DetailClient";

// import { Loader } from "lucide-react";

// import { useEffect, useState } from "react";

export default async function PageMovieDetail({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const { movieId } = await params;

  // const [movieDetail, setMovieDetail] = useState({});
  //   const [loader, setLoder] = useState(true);

 
  console.log("typeof: ", Number(movieId));
  
  const numberMovieId = Number(movieId)

  return (
    <div>
      <DetailClient movieId={numberMovieId} />
    </div>
  );
}

// usestate -> client
// param server
