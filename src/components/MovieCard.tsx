import { StarIcon } from "lucide-react";
import Link from "next/link";
import { Image } from "./Image";
import {  MovieProps } from "@/types";

type MovieCardProps = {
    movie: MovieProps;
}

export const MovieCard = ({ movie}:MovieCardProps) => {
  return (
    <div className="flex gap-1 flex-col w-full bg-[#F4F4F5] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-black dark:border-[1px] dark:shadow-lg dark:shadow-gray-800/50 dark:hover:shadow:2xl">
      <Link href={`/details/${movie?.id}`}>

        <Image
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt="card1"
          // className="w-full object-cover h-[233px] md:h-[340px]"
        />

        <div className="p-[8px] ">
          <div className="flex gap-[4px]">
            <StarIcon className="h-[16px] w-[16px] fill-yellow-300 text-yellow-300" />

            <div className="flex dark:text-white">
              <p className="font-medium text-[#09090b] dark:text-white">
                {movie?.vote_average?.toFixed(1)}
              </p>
              <p className="font-medium text-[#71717a]">/10</p>
            </div>

          </div>

          <p className="font-medium h-[40px] text-[#09090b] dark:text-white">{movie?.title}</p>
        </div>
      </Link>
    </div>
  );
};