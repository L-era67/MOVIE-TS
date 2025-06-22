"use client";
import { MovieCard } from "@/components/MovieCard";
import { Pagination } from "@/components/Pagination";
import { SeeMoreLoader } from "@/components/skeletons/upComingHomeLoader";

import { MovieResponse } from "@/types";
import { getSimilar } from "@/utils/MoreLikeALL";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";

export const MoreLikeClient = ({ moreLikeId }: { moreLikeId: number }) => {
  
  const [more, setMore] = useState<MovieResponse>({} as MovieResponse);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading]= useState(true)

  const [morePage, setMorePage] = useQueryState<number>(
    "page",
    parseAsInteger.withDefault(1)
  );

  const moreCat = async () => {
    setError(null);
    setLoading(true)
    try {
      const fetchMore = await getSimilar(moreLikeId, morePage);
      console.log("MORE LIKE THIS ", fetchMore);
      setMore(fetchMore);
    } catch (error) {
      console.log(error);
      setError("Failed to load similar movies. Please try again.");
    }finally{
      setTimeout(()=> setLoading(false), 300)
    }

  };

  useEffect(() => {
    if (!moreLikeId) return;
    moreCat();
  }, [moreLikeId, morePage]);

  
  if (error) {
    return (
      <div className="w-screen flex justify-center items-center h-64 text-red-500">
        {error}
      </div>
    );
  }

  if (!more || !more.results || more.results.length === 0)
    return (
      <div className="w-screen flex justify-center items center">
        No similar movies found.
      </div>
    );

  const dataMore = more.results;

  return (
    <div className="w-screen ">
      <div className="w-[90%] md:w-[70%] mx-auto">
        <p className="pt-[52px] text-[30px] font-semibold">More like this</p>

        {loading && <SeeMoreLoader />}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 py-8 ">
          {!loading && dataMore.map((movie, id) => (
            <div key={id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        {more.total_pages > 1 && (
          <div className="flex gap-2 justify-end items-center">
            <Pagination
              more={more}
              setMorePage={setMorePage}
              morePage={morePage}
            />
          </div>
        )}
      </div>
    </div>
  );
};
