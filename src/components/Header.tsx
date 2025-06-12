"use client";

import { ChevronDown, FilmIcon, Moon, Search } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

import { useState } from "react";
// import { parseAsString, useQueryState } from "nuqs";
import { useRouter } from "next/router";
import { ModeToggle } from "./modeToggle";
import { Genre } from "@/components/skeletons/components/Genres";
import { SearchValue } from "./search/search";

export const Header = () => {
  //   const router = useRouter();

  //    const [searchUrl, setSearchUrl]=useQueryState("search", parseAsString)

  // const getSearch=()=>{
  //   router.push(`/search/searchValue?search=${search}`)
  // }

  return (
    <div className="relative flex justify-between px-5 mt-4 mb-6">
      <Link href={"/"}>
        <div className="flex items-center gap-2 text-indigo-700">
          <FilmIcon />
          <p className="text-base">
            <b>
              <i>Movie Z</i>
            </b>
          </p>
        </div>
      </Link>

      <div className="hidden gap-3 md:flex">
        {/* <Button variant="outline">
          <ChevronDown className="w-4 h-4" />
          Genre
        </Button> */}

        <Genre />
        <Button variant="outline">
          <SearchValue />

          {/* <input
            type="text"
            placeholder="Search"
            className="hidden md:block outline-none min-w-[251px] md:max-w-[900px]"
          /> */}

          {/* <button onClick={() => getSearch()}>
            <Search />
          </button> */}
        </Button>
      </div>

      <div className="">
        {/* <div className="block md:hidden"></div>
        <Button variant="outline">
          <Moon className="w-4 h-4" />
        </Button> */}

        <ModeToggle />
      </div>
    </div>
  );
};
