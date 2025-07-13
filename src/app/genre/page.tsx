"use client";

import { Pagination } from "@/components/Pagination";
import { SearchGenres } from "./_components/Allgenres";
import { MovieCard } from "@/components/MovieCard";
// import { useRouter } from "next/router";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getFilteredGenre } from "@/utils/get-filtered-genre";
import { MovieResponse } from "@/types";
import { parseAsInteger, useQueryState } from "nuqs";

export default function Page() {
  const params = useSearchParams();
  const genreId = params.get("genreIds");

  const genreNames = params.get("names");
  console.log("genre NAMES::", genreNames);
  

  console.log("GENRE MAIN GENREIDS:", genreId);


  const [genreMovies, setGenreMovies] = useState<MovieResponse | null>(null);
  // const [showGenreList, setShowGenreList] =useState(false)

  const [page, setPage] = useQueryState<number>(
    "page",
    parseAsInteger.withDefault(1)
  );

  const fetchGenre = async () => {
    if (genreId === null) return;
    try {
      const movies = await getFilteredGenre(genreId, page);

      setGenreMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if(!selectedGenreIds || !selectedGenreNames) return;
    if (!genreId) return;
    fetchGenre();
  }, [genreId, page]);

  //   useEffect(() => {
  //   if (!genreId) {
  //     setShowGenreList(true);
  //     <Genre showGenreList={showGenreList} />;
  //   }
  //   fetchGenre();
  // }, [genreId, page]);

  return (
    <div className="md:pl-10 lg:pl-20  2xl:pr-[250px]">
      <p className="ml-5 text-[30px] font-semibold">Search filter</p>

      <div className="pt-0 md:flex justify-between md:gap-5 lg:gap-20 py-8">
        <div className="m-5 md:w-[35%]">
          <SearchGenres />
        </div>

        {/*Windows */}
        <div className="hidden md:flex flex-col w-[65%] ">
          <p>{genreMovies?.total_results} titles in “{genreNames}”</p>

          <div className=" md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:pr-[50px] gap-5">
            {genreMovies?.results?.map((k) => (
              <MovieCard movie={k} key={k.id} />
            ))}
          </div>
        </div>
      </div>

      {/*Phone */}
      <p className="block pl-5 md:hidden">
        {genreMovies?.total_results} titles in “{genreNames}”
      </p>
      <div className="grid gap-[20px] sm:grid-cols-3  grid-cols-2 px-5 mb-8 md:hidden">
        {genreMovies?.results?.map((k) => (
          <MovieCard movie={k} key={k.id} />
        ))}
      </div>

      <div className="flex items-center justify-end gap-2 pr-[20px] md:pr-[50px]">
        {genreMovies && (
          <Pagination
            more={genreMovies}
            setMorePage={setPage}
            morePage={page}
          />
        )}
      </div>
    </div>
  );
}
