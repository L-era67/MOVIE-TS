"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { HomeTitles, MovieCardLoader } from "../skeletons/upComingHomeLoader";

import Link from "next/link";

import { GetUpComing } from "@/utils/home/get-upcoming-movie";
import { MovieProps } from "@/types";
import { MovieCard } from "../MovieCard";

export const Upcoming = () => {
  const [upComing, setUpcoming] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUpcoming = async () => {
      try {
        const fetchUpComing = await GetUpComing();

        setUpcoming(fetchUpComing);
      } catch (error) {
        console.log("UP COMING ERR:", error);
        setError("Failed to load up coming movies. Please try again.");
      } finally {
        setTimeout(()=> setLoading(false),300);
      }
    };
    getUpcoming();
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
      <div className="w-full">{loading && <HomeTitles />}</div>

      {!loading && (
        <div className="flex justify-between mx-5 my-[32px] md:mt-[52px]  text-[#09090B] ">
          <p className=" font-semibold text-[24px] dark:text-white ">
            Upcoming
          </p>

          <Link href={`/seeMore/upcoming`}>
            <button className="text-[14px] flex items-center gap-2 justify-center dark:text-white cursor-pointer hover:underline">
              See more
              <ArrowRight className="w-[16px] h-[16px]" />
            </button>
          </Link>
        </div>
      )}

      <div className="w-full">{loading && <MovieCardLoader />}</div>

      <div className="grid grid-cols-2 gap-[20px]  md:grid-cols-5 ">
        {!loading &&
          upComing
            .slice(0, 10)
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};
