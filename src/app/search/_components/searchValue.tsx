import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { getSearch } from "@/utils/get-Search";
import { MovieResponse } from "@/types";
import { SearchDrop } from "./searchDrop";
import { NoResultSearch } from "@/components/skeletons/searchLoader";

export const SearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState<MovieResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const getInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!search.trim()) return;
    if (e.key === "Enter") {
      // const newSearchValue = search;
      router.push(`/search?searchValue=${search}`);
      setSearch("");
    }
  };

  const fetchSearch = async () => {
    setLoading(true);
    try {
      const input = await getSearch(search);
      setSearchData(input);
    } catch (error) {
      console.log(error);
      
    } finally {
      setLoading(false);
      // setTimeout(() => setLoading(false), 100);
    }
  };

  const searchPage = () => {
    if (!search.trim()) return;
    const newSearchValue = search;
    router.push(`/search?searchValue=${newSearchValue}`);
    setSearch("");
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
        <div
          onClick={() => searchPage()}
          className="text-gray-500 hover:text-black dark:hover:text-white transition"
        >
          <Search />
        </div>
        <input
          type="text"
          value={search}
          placeholder="Search Movie..."
          onChange={getInput}
          onKeyDown={handleKeyDown}
          className="outline-none w-[80%] md:max-w-[900px] relative"
        />
      </div>

      {loading && search && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 z-50">
          <NoResultSearch />
        </div>
      )}

      {!loading && search && searchData?.results?.length === 0 && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 z-50">
          No results found.
        </div>
      )}

      {!loading && (searchData?.results?.length ?? 0) > 0 && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 z-50">
          {searchData?.results && searchData?.results?.length > 0 && (
            <SearchDrop searchData={searchData} setSearch={setSearch} />
          )}
        </div>
      )}
    </div>
  );
};
