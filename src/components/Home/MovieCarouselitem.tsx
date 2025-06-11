import {  MovieProps } from "@/types";
import {  StarIcon } from "lucide-react";
import Link from "next/link";
import { MovieTrailer } from "../MovieTrailer";

type MovieCarouselProps = {
  movie: MovieProps;
};

export const MovieCardCarouselItem = ({ movie}: MovieCarouselProps) => {

  
  return (
    <div className="md:relative">
      <Link href={`/details/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt="CartPLayNow"
          //   className="min-w-[375px] min-h-[246px] md:max-w-[1440px] md:max-h-[600px]"
          className="w-screen min-h-[246px] md:max-h-[600px] object-cover"
        />
      </Link>

      <div className="m-[20px] flex flex-col gap-[16px] md:absolute top-[178px] left-[148px] md:w-[404px] md:flex ">
        <div className="flex items-center justify-between md:flex-col md:items-start">
          <div className="md:text-white ">
            <p className="text-[14px] font-normal md:text-[16px]">
              Now Playing:
            </p>
            <h1 className="text-[24px] font-semibold md:text-[36px]">
              {movie?.title}
            </h1>
          </div>

          <div className="flex items-center gap-[4px] ">
            <StarIcon className="text-yellow-300 fill-yellow-300" />
            <span className="text-[18px] font-semibold md:text-[#FAFAFA]">
              {movie?.vote_average?.toFixed(1)}
            </span>
            <span className="text-[16px] text-[#71717A]">/10</span>
          </div>
        </div>

        <div className=" text-[14px] md:text-[12px] md:text-[#FAFAFA]">
          {movie?.overview}
        </div>

        <div><MovieTrailer movieId={movie.id} /></div>
      </div>
    </div>
  );
};
