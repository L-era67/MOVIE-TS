"use client";

import { Pagination } from "@/components/Pagination";
import { SearchGenres } from "./components/Allgenres";
import { MovieCard } from "@/components/MovieCard";
// import { useRouter } from "next/router";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getFilteredGenre } from "@/utils/get-filtered-genre";
import { MovieResponse } from "@/types";
import { parseAsInteger, useQueryState } from "nuqs";

export default function Page() {
  // const router = useRouter();

  // const {genreId, names} = router.query as {genreId?:string; names?: string};
  // console.log("Genre ids:",genreId)
  const params = useSearchParams();
  console.log("genre Search", params);

  const genreId = params.get("genreIds");
  console.log("genre ID", genreId);

  const names = params.get("names");
  console.log("ID NAMES:", names);

  const [genreMovies, setGenreMovies] = useState<MovieResponse | null>(null);
   const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));


  const fetchGenre = async () => {
    try {
      const movies = await getFilteredGenre(genreId);
      console.log("movie genre:", movies);

      setGenreMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if(!selectedGenreIds || !selectedGenreNames) return;
    if (!genreId.length || !names.length) return;
    fetchGenre();
  }, [genreId.length, genreId.length]);

  return (
    <div>
      <div className="lg:pl-20 lg:pr-[300px]">
        <p className="text-[30px] font-semibold">Search filter</p>

        <div className="flex justify-between gap-20 py-8">
          <div className="w-[500px]">
            <SearchGenres />
          </div>

          <div className="flex flex-col w-full ">
            <p>
              {genreMovies?.total_results} titles in “{names}”
            </p>

            <div className="grid gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:pr-[50px] md:gap-x-12 md:gap-y-8">
              {genreMovies?.results?.map((k) => (
                <MovieCard movie={k} key={k.id} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2">
          {/* <Pagination more={genreMovies} setMorePage={setPage} morePage={page}/> */}
        </div>
      </div>
    </div>
  );
}
