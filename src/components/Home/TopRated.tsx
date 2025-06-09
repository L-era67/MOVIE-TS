"use client"

import { ArrowRight } from "lucide-react";


import { useEffect, useState } from "react";
import Link from "next/link";
import { GetTopRatedMovies } from "@/utils/get-topRated";
import { MovieCard } from "../MovieCard";
import { Movie } from "@/types";
// import { HomeTitles, MovieCardLoader } from "./skeletons/upComingHomeLoader";

export const TopRated = () => {
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const topRatedMov = async () => {
      try {
        const rated = await GetTopRatedMovies();
        setTopRated(rated);
      } catch (error) {
        console.log("TOP RATED ERR", error);
      }
      setLoading(false);
    };
    topRatedMov();
  }, []);

  return (
    <div>

      {/* {loading && <HomeTitles/>} */}

      {!loading && <div className="flex justify-between mx-[20px] my-[32px] md:mt-[52px] text-[#09090B]">
        <p className=" font-semibold text-[24px] dark:text-white">Top rated</p>
        <Link href={`/category/top_rated`}>
          <button className="text-[14px] flex items-center gap-[8px] justify-center dark:text-white">
            See more
            <ArrowRight className="w-[16px] h-[16px]" />
          </button>
        </Link>
      </div>}

      {/* {loading && <MovieCardLoader />} */}

      <div className="grid grid-cols-2 gap-[20px] md:grid-cols-5 ">
        {!loading &&
          topRated
            .slice(0, 10)
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};