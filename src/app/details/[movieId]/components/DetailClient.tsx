"use client";

import { MovieProps } from "@/types";
import { getMovieDetails } from "@/utils/detail/get-Movie-details";
import { useEffect, useState } from "react";
import { MovieDetailTitle } from "./MovieDetailRating";
import { TrailerDetail } from "./DetailTrailer";
import { GenreDetail } from "./GenreDetail";
import { InfoData } from "./Info-data";

export const DetailClient = ({ movieId }: { movieId: number }) => {
  const [movieDetail, setMovieDetail] = useState<MovieProps>({} as MovieProps);
  
  console.log("Movie props", movieDetail);

  useEffect(() => {
    if (!movieId) return;

    const FetchMovieDetail = async () => {
      try {
        const movDetail = await getMovieDetails(movieId);
        console.log("movie detail", movDetail);

        setMovieDetail(movDetail);
      } catch (error) {
        console.log("MOVIE DETAIL ID ERROR:", error);
      }
    };
    FetchMovieDetail();
  }, [movieId]);

  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className="md:w-[80%] flex flex-col gap-8">
          {/* <Header /> */}

          {/* <div className="md:w-[80%]"> {loader && <DetailLoader />}</div> */}

          {/* Movie Detail Title */}
          <MovieDetailTitle movieDetail={movieDetail} />
          <TrailerDetail movieDetail={movieDetail} />
          <GenreDetail movieDetail={movieDetail} />

          <InfoData movieId={movieId} />

          {/* <MoreLikeData movieId={movieId} /> */}
        </div>

        <div className="w-screen mt-10">{/* <Footer /> */}</div>
      </div>
    </div>
  );
};
