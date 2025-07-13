
import { MovieCard } from "@/components/MovieCard";
import { MovieProps} from "@/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type DetailMoreLike = {
  similarMovies: MovieProps[];
  movieId: number;
}

export const MoreLikeThis = ({ similarMovies, movieId }:DetailMoreLike) => {


  return (
    <div className="">
      <div className="flex justify-between mx-5 items-center">
        <p className="py-8 text-[24px] font-semibold">More like this</p>

        <Link href={`/moreLike/${movieId}`}>
          <button className="text-[14px] flex items-center gap-2 justify-center cursor-pointer hover:underline">
            See more
            <ArrowRight className="w-[16px] h-[16px]" />
          </button>
        </Link>
      </div>
      <div className="grid  gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 m-5">
        {similarMovies?.slice(0, 5).map((movie, index) => (
          <div key={index}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};