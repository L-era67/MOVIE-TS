"use client";

import { ArrowRight } from "lucide-react";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MovieCard } from "../MovieCard";
import { GetPopularMovies } from "@/utils/home/get-popular-now";
import { MovieProps } from "@/types";
import { HomeTitles, MovieCardLoader } from "../skeletons/upComingHomeLoader";

export const Popular = () => {
  const [popularMov, setPopularMovies] = useState<MovieProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const PopularFetchM = async () => {
      setError(null);
      try {
        const FetchPopular = await GetPopularMovies();
        setPopularMovies(FetchPopular);
      } catch (error) {
        console.log("POPULAR ERROR", error);
        setError("Failed to load popular movies. Please try again.");
      } finally {
        setLoading(false);
      }
      setTimeout(()=> setLoading(false),300);
    };

    PopularFetchM();
  }, []);

  if (error) {
    return (
      <div className="w-screen flex items-center h-64 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div>
      {loading && <HomeTitles />}

      {!loading && (
        <div className="flex justify-between mx-[20px] my-[32px] md:mt-[52px] text-[#09090B]">
          <p className=" font-semibold text-[24px] dark:text-white ">Popular</p>
          <Link href={`/seeMore/popular`}>
            <button className="text-[14px] flex items-center gap-[8px] justify-center dark:text-white cursor-pointer hover:underline">
              See more
              <ArrowRight className="w-[16px] h-[16px]" />
            </button>
          </Link>
        </div>
      )}

      {loading && <MovieCardLoader />}

      <div className="grid grid-cols-2 gap-[20px] md:grid-cols-5 ">
        {!loading &&
          popularMov
            .slice(0, 10)
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};
