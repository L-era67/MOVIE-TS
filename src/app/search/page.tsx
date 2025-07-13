"use client";

import {
  parseAsArrayOf,
  parseAsIndex,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { SearchPage } from "./_components/SearchPage";
import { getSearch } from "@/utils/get-Search";
import { MovieResponse } from "@/types";

export default function Page() {
  const searchParam = useSearchParams();
  console.log("search params", searchParam);

  const search = searchParam.get("searchValue");
  console.log("search params", search);

  //   const searchParamValue = searchParam.get("searchValue")
  //   const search = searchParamValue !==null ? searchParamValue : "";

  const [searchData, setSearchData] = useState<MovieResponse | null>(null);

  console.log("search data", searchData);

  const [page, setPage] = useQueryState<number>(
    "page",
    parseAsInteger.withDefault(1)
  );

  const fetchSearch = async () => {
    if (!search) return;
    try {
      const input = await getSearch(search);
      console.log("SEARCH INPUTTT", input);
      setSearchData(input);
    } catch (error) {}
  };

  useEffect(() => {
    if (!search) return;
    fetchSearch();
  }, [search]);

  return (
    <SearchPage
      searchData={searchData}
      search={search}
      page={page}
      setPage={setPage}
    />
  );
}
