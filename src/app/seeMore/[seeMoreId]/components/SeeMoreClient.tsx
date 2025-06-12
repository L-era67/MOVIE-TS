"use client";

import { MovieCard } from "@/components/MovieCard";
import { Pagination } from "@/components/Pagination";
import { SeeMoreLoader } from "@/components/skeletons/upComingHomeLoader";
import { MovieResponse } from "@/types";
import { getCategoryMovie } from "@/utils/get-category";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";

interface SeeMoreClientProps {
  SeeMoreId: string;
}

export const SeeMoreClient = ({ SeeMoreId }: SeeMoreClientProps) => {
  const [more, setMore] = useState<MovieResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [morePage, setMorePage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1)
  );

  const moreCat = async () => {
    setError(null);
    try {
      const fetchMore = await getCategoryMovie(SeeMoreId, morePage);
      console.log("MORE LIKE THIS ", fetchMore);
      setMore(fetchMore);
    } catch (error) {
      console.log(error);
      setError("Failed to load movies. Please try again.");
    } finally{
      setLoading(false)
    }
  };

  console.log("PAGE NUMBER555", more);

  useEffect(() => {
    if (!SeeMoreId) return;
    moreCat();
  }, [SeeMoreId, morePage]);

  if (!more || !more.results) return null;

  const dataMore = more.results;

  if (error) {
    return (
      <div className="w-screen flex justify-center items-center h-64 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="w-screen ">
      <div className="w-[90%] md:w-[70%] mx-auto">
        <p className="pt-[52px] text-[30px] font-semibold">
          {(SeeMoreId === "upcoming" && "Upcoming") ||
            (SeeMoreId === "popular" && "Popular") ||
            (SeeMoreId === "top_rated" && "Top rated")}
        </p>
        {loading && <SeeMoreLoader/>}
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
              morePage={morePage}
              setMorePage={setMorePage}
              more={more}
            />
          </div>
        )}
      </div>
    </div>
  );
};
