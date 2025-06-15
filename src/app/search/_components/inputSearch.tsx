import { useEffect, useState } from "react";
import { Delete, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";

import { getSearch } from "@/utils/get-Search";
import { MovieResponse } from "@/types";
import { SearchDrop } from "./inputDrop";

export const SearchValue = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState<MovieResponse | null>(null);

  // const [searchUrl, setSearchUrl] = useQueryState(
  //   "search",
  //   parseAsString.withDefault("")
  // );
  const [searchUrl, setSearchUrl] = useState("");

  const getInput = (event) => {
    setSearch(event.target.value);
  };
  const fetchSearch = async () => {
    try {
      const input = await getSearch(search);

      setSearchData(input);
    } catch (error) {
      setSearchData(null);
    }
  };

  const searchPage = () => {
    const newSearchValue = search;
    setSearchUrl(newSearchValue);
    router.push(`/search/?searchValue=${newSearchValue}`);
    setSearch("");

    // router.push(`/search/searchValue?search=${search}`);
    // setSearch("")
  };

  useEffect(() => {
    if (!search) {
      setSearchData(null);
      return;
    }
    fetchSearch();
  }, [search]);

  return (
    <div>
      <div className="flex items-center ">
        <input
          type="text"
          value={search}
          placeholder="Search Movie..."
          onChange={getInput}
          className="hidden md:block outline-none min-w-[251px] md:max-w-[900px] relative"
        />

        <div onClick={() => searchPage()}>
          <Search />
        </div>

        {/* <button >
          <Delete className="text-gray-200 hover:text-gray-600"/>
        </button> */}
      </div>

      <div className="absolute mt-2 z-99">
        {searchData?.results && searchData?.results?.length > 0 && (
          <SearchDrop searchData={searchData} setSearch={setSearch} />
        )}
      </div>
    </div>
  );
};
