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
  if (!searchData) {
    return <p>Loading movies...</p>;
  }
  const { total_results } = searchData;
  return (
    <div>
      <h1 className="text-[30px] font-semibold my-8">Search Results</h1>
      <p className="text-[20px] text-foreground font-semibold mb-8">
        {total_results} results for "{search}"
      </p>
      <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:hidden ">
        {searchData?.results?.length > 0 ? (
          searchData?.results?.map((m) => <MovieCard movie={m} />)
        ) : (
          <p className="col-span-full text-center pt-11 pb-9 border-1 ">
            No results found.
          </p>
        )}
      </div>
      <div className="md:flex justify-between gap-5 lg:gap-20 py-8">
        <div className="w-[70%]">
          <div className="hidden md:grid w-full sm:grid-cols-2 md:grid-cols-4 gap-5">
            {searchData?.results?.length > 0 ? (
              searchData?.results?.map((m, i) => <MovieCard movie={m} key={i}/>)
            ) : (
              <p className="col-span-full text-center pt-11 pb-9 border-1 ">
                No results found.
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pr-[20px] md:pr-[50px]">
          {searchData && (
            <Pagination
              more={searchData}
              setMorePage={setPage}
              morePage={page}
            />
          )}
        </div>
        <div className="m-5 md:w-[35%]">
          <SearchGenres />
        </div>
      </div>
    </div>
  );
};
