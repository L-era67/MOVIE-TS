import { FilmIcon, Search, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

import { useState } from "react";

import { ModeToggle } from "../theme/modeToggle";
import { Genre } from "@/app/genre/_components/Genres";
import { SearchInput } from "@/app/search/_components/searchValue";

export const MobileHeader = () => {
  const [searchBtn, setSearchBtn] = useState(false);

  if (searchBtn) {
    return (
      <div className="flex  items-center w-full  justify-between">
        <div className="flex items-center gap-[10%]">
          <Genre searchBtn={searchBtn} />
          <SearchInput />
        </div>

        <div onClick={() => setSearchBtn(false)}>
          <X className="w-[16px], h-[16px]" />
        </div>
      </div>
    );
  }

  return (
    <>
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

      <div className="flex gap-3 ">
        <Button variant="outline" onClick={() => setSearchBtn(true)}>
          <Search />
        </Button>

        <ModeToggle />
      </div>
    </>
  );
};
