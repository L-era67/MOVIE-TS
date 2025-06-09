"use client"

import { ArrowRight } from "lucide-react";


import { useEffect, useState } from "react";
import Link from "next/link";
// import { HomeTitles, MovieCardLoader } from "./skeletons/upComingHomeLoader";
import { MovieCard } from "../MovieCard";
import { GetPopularMovies } from "@/utils/get-popular-now";
import { Movie } from "@/types";

export const Popular = () => {
  const [popularMov, setPopularMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const PopularFetchM = async () => {
      try {
        const FetchPopular = await GetPopularMovies();
        setPopularMovies(FetchPopular);
      } catch (error) {
        console.log("POPULAR ERROR", error);
      }
      setLoading(false)
    };

    PopularFetchM();
  }, []);

  return (
    <div>

      {/* {loading && <HomeTitles/>} */}

     {!loading && <div className="flex justify-between mx-[20px] my-[32px] md:mt-[52px] text-[#09090B]">
        <p className=" font-semibold text-[24px] dark:text-white">Popular</p>
        <Link href={`/category/popular`}>
          <button className="text-[14px] flex items-center gap-[8px] justify-center dark:text-white">
            See more
            <ArrowRight className="w-[16px] h-[16px]" />
          </button>
        </Link>
      </div>}

     {/* {loading && <MovieCardLoader/>} */}

      <div className="grid grid-cols-2 gap-[20px] md:grid-cols-5 ">
        {!loading && popularMov.slice(0, 10).map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};