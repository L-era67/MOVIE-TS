import { SearchGenres } from "@/app/genre/_components/Allgenres";
import { MovieCard } from "@/components/MovieCard";
import { Pagination } from "@/components/Pagination";
import { MovieResponse } from "@/types";

type SearchPageProps = {
  searchData: MovieResponse | null;
  search: string | null;
  page: number;
  setPage: (value: number) => void;
};

export const SearchPage = ({
  searchData,
  search,
  page,
  setPage,
}: SearchPageProps) => {

  if (!searchData || searchData?.results?.length == 0 ) {
    return (
      <div className="px-5 py-16 text-center text-gray-600 dark:text-gray-300">
        <div className="text-5xl mb-4">🔍</div>
        <h2 className="text-xl font-semibold">No results found</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          We couldn’t find anything for
          <span className="font-bold"> "{search}"</span>.
        </p>
      </div>
    );
  }

  const { total_results } = searchData;

  return (
    <div className="px-5 :pl-10 lg:px-20  2xl:pr-[250px]">
      <h1 className="text-[30px] font-semibold my-8">Search Results</h1>
      <p className="text-[20px] text-foreground font-semibold mb-8 ">
        {total_results} results for "{search}"
      </p>

      <div className="grid w-full grid-cols-2 sm:grid-cols-3 gap-5 md:hidden">
        {searchData?.results?.map((m, i) => (
          <MovieCard movie={m} key={i} />
        ))}
      </div>

      <div className="md:flex md:gap-5 lg:gap-20 py-8">
        <div className="md:flex flex-col w-[65%]">
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {searchData?.results?.map((m, i) => (
              <MovieCard movie={m} key={i} />
            ))}
          </div>

          <div className="flex items-center justify-end gap-2  mt-8 ">
            {searchData && (
              <Pagination
                more={searchData}
                setMorePage={setPage}
                morePage={page}
              />
            )}
          </div>
        </div>

        <div className="py-5 md:w-[35%]">
          <SearchGenres />
        </div>

      </div>
    </div>
  );
};
