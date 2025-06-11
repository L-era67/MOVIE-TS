"use client"

import { Pagination } from "@/components/Pagination";
import { SearchGenres } from "./components/Allgenres";
import { MovieCard } from "@/components/MovieCard";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    console.log("GENRE ID router:", router);
    
  return (
    <div>
      <div className="lg:pl-20 lg:pr-[300px]">
        <p className="text-[30px] font-semibold">Search filter</p>

        <div className="flex justify-between gap-20 py-8">
          <div className="w-[500px]">
            <SearchGenres />
          </div>

          {/* <div className="flex flex-col w-full ">
            <p>
              {movies.total_results} titles in “{genreNames}”
            </p>

            <div className="grid gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:pr-[50px] md:gap-x-12 md:gap-y-8">
              {results?.map((k) => (
                <MovieCard movie={k} key={k.id} />
              ))}
            </div>
          </div> */}
        </div>

        {/* <div className="flex items-center justify-end gap-2">
          <Pagination />
        </div> */}
      </div>
    </div>
  );
}
