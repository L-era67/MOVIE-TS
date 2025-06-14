import { MovieResponse } from "@/types";
import { SearchItem } from "./InputItemSearch";


type SearchProps = {
    searchData: MovieResponse;
    setSearch: (a: string) =>void;
}

export const SearchDrop = ({  searchData,  setSearch }: SearchProps) => {
  const results = searchData.results ?? [];

  return (
    <div className="w-[577px] bg-white p-5 dark:bg-black">
      <div className="flex flex-col ">
        {results.slice(0, 5).map((m, i) => (
          <SearchItem m={m} setSearch={setSearch} key={i}/>
        ))}
      </div>
    </div>
  );
};