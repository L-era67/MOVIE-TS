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
import { SearchDropLoader } from "@/components/skeletons/searchLoader";

export const SearchValue = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState<MovieResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [noResults, setNoResults] = useState();

  // const [searchUrl, setSearchUrl] = useQueryState(
  //   "search",
  //   parseAsString.withDefault("")
  // );

  const [searchUrl, setSearchUrl] = useState("");

  const getInput = (event: any) => {
    setSearch(event.target.value);
  };

  const fetchSearch = async () => {
    setLoading(true);
    try {
      const input = await getSearch(search);
      setSearchData(input);
    } catch (error) {
      setSearchData(null);
    } finally {
      setTimeout(() => setLoading(false), 700);
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

  // if(!searchData?.results || !searchData?.results?.length) return;
  return (
    <div>
      <div className="flex items-center gap-1">
        <div onClick={() => searchPage()}>
          <Search className=" text-gray-500" />
        </div>
        <input
          type="text"
          value={search}
          placeholder="Search Movie..."
          onChange={getInput}
          className="outline-none w-[80%] md:max-w-[900px] relative"
        />
      </div>

      {searchData?.results?.length === 0 && search && (
        <div className="absolute bg-yellow-300 left-1/2 -translate-x-1/2 mt-2 z-99">
          {loading && <SearchDropLoader />}
        </div>
      )}

      {!loading && search && searchData?.results?.length === 0 && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 z-99">
          No results found.
        </div>
      )}

      {!loading && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 z-99">
          {searchData?.results && searchData?.results?.length > 0 && (
            <SearchDrop searchData={searchData} setSearch={setSearch} />
          )}
        </div>
      )}
    </div>
  );
};
