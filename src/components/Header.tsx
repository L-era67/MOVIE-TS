"use client";

import { ChevronDown, FilmIcon, Moon, Search, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

import { useState } from "react";
import { ModeToggle } from "./modeToggle";
import { Genre } from "@/app/genre/_components/Genres";
import { SearchValue } from "../app/search/_components/inputSearch";

export const Header = () => {
  const [searchBtn, setSearchBtn] = useState<Boolean>(false);

  //   const router = useRouter();
  //    const [searchUrl, setSearchUrl]=useQueryState("search", parseAsString)

  // const getSearch=()=>{
  //   router.push(`/search/searchValue?search=${search}`)
  // }

  return (
    <div className="relative flex justify-between items-center px-5 mt-4 mb-6 bg-amber-500">
      <div className="hidden md:flex items-center  text-indigo-700 w-full">
        <Link href={"/"}>
          <div className="flex gap-2 items-center ">
            <FilmIcon />
            <p className="text-base">
              <b>
                <i>Movie Z</i>
              </b>
            </p>
          </div>
        </Link>
      </div>

      <div className="hidden gap-3 md:flex bg-blue-600">
        <Genre />
        <Button variant="outline">
          <SearchValue />
        </Button>
      </div>

      <div className="flex justify-between w-full bg-amber-300 md:hidden">
        <div className=" ">
          {!searchBtn && (
            <div className="flex items-center  text-indigo-700  ">
              <Link href={"/"}>
                <div className="flex items-center gap-2">
                  <FilmIcon />
                  <p className="text-base">
                    <b>
                      <i>Movie Z</i>
                    </b>
                  </p>
                </div>
              </Link>
            </div>
          )}
        </div>

        <div className="flex">
          <div className="flex items-center w-full justify-center md:hidden">
            {searchBtn && (
              <div className="flex items-center md:hidden">
                <Genre searchBtn={searchBtn} />
                <SearchValue />
              </div>
            )}

            {!searchBtn && (
              <Button variant="outline" onClick={() => setSearchBtn(true)}>
                <Search />
              </Button>
            )}

            {searchBtn && (
              <div className="" onClick={() => setSearchBtn(false)}>
                <X className="w-[16px], h-[16px]" />
              </div>
            )}
          </div>

          {/*MODE TOGGLE */}

          <div className="">
            <ModeToggle />
          </div>
        </div>
      </div>

      <div className="">
        <ModeToggle />
      </div>
    </div>
  );
};
