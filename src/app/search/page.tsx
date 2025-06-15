"use client";

import {
  parseAsArrayOf,
  parseAsIndex,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
import { use, useEffect, useState } from "react";
import { SearchPage } from "./_components/SearchPage";
import { getSearch } from "@/utils/get-Search";
import { useSearchParams } from "next/navigation";
import { MovieResponse } from "@/types";

export default function SearchValue() {
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
    <div className="w-[80%] mx-auto ">
      <SearchPage searchData={searchData} search={search} page = {page} setPage = {setPage}/>
    </div>
  );
}
