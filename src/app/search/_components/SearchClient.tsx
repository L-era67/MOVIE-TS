"use client";

import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";

import { getSearch } from "@/utils/get-Search";
import { MovieResponse } from "@/types";
import { SearchPage } from "./SearchPage";

type SearchClientType = {
  searchValue: string;
};

export const SearchClient = ({ searchValue }: SearchClientType) => {
//   const searchParam = useSearchParams();
//   console.log("search params", searchParam);

//   const search = searchParam.get("searchValue");
//   console.log("search params", search);

  //   const searchParamValue = searchParam.get("searchValue")
  //   const search = searchParamValue !==null ? searchParamValue : "";

  const [searchData, setSearchData] = useState<MovieResponse | null>(null);

  console.log("search data", searchData);

  const [page, setPage] = useQueryState<number>(
    "page",
    parseAsInteger.withDefault(1)
  );

  const fetchSearch = async () => {
    if (!searchValue) return;
    try {
      const input = await getSearch(searchValue);
      console.log("SEARCH INPUTTT", input);
      setSearchData(input);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!searchValue) return;
    fetchSearch();
  }, [searchValue]);

  return (
    <SearchPage
      searchData={searchData}
      search={searchValue}
      page={page}
      setPage={setPage}
    />
  );
};
