"use client";

import { ArrowRight } from "lucide-react";
// import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";

import Link from "next/link";
// import { HomeTitles, MovieCardLoader } from "./skeletons/upComingHomeLoader";
import { GetUpComing } from "@/utils/get-upcoming-movie";
import { Movie } from "@/types";
import { MovieCard } from "../MovieCard";
// import { MovieCardLoader } from "./skeletons/HomeSkeleton";

export const Upcoming = () => {
  const [upComing, setUpcoming] = useState<Movie[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUpcoming = async () => {
      try {
        const fetchUpComing = await GetUpComing();

        setUpcoming(fetchUpComing);
      } catch (error) {
        console.log("UP COMING ERR:", error);
      }
      setLoading(false);
    };
    getUpcoming();
  }, []);

  return (
    <div>
      {/* <div className="w-full">{loading && <HomeTitles />}</div> */}

      {!loading && (
        <div className="flex justify-between mx-5 my-[32px] md:mt-[52px]  text-[#09090B] ">
          <p className=" font-semibold text-[24px] dark:text-white ">
            Upcoming
          </p>

          <Link href={`/category/upcoming`}>
            <button className="text-[14px] flex items-center gap-2 justify-center dark:text-white ">
              See more
              <ArrowRight className="w-[16px] h-[16px]" />
            </button>
          </Link>
        </div>
      )}

      {/* <div className="w-full">{loading && <MovieCardLoader />}</div> */}

      <div className="grid grid-cols-2 gap-[20px]  md:grid-cols-5 ">
        {!loading &&
          upComing
            .slice(0, 10)
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};
