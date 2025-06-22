"use client";

import { ChevronDown, FilmIcon, Moon, Search, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

import { useState } from "react";
import { ModeToggle } from "./modeToggle";
import { Genre } from "@/app/genre/_components/Genres";
import { SearchValue } from "../app/search/_components/searchValue";

export const Header = () => {
  const [searchBtn, setSearchBtn] = useState<Boolean>(false);

  //   const router = useRouter();
  //    const [searchUrl, setSearchUrl]=useQueryState("search", parseAsString)

  // const getSearch=()=>{
  //   router.push(`/search/searchValue?search=${search}`)
  // }

  return (
    <div className="relative flex justify-between items-center px-5 mt-4 mb-6">
      {/*MD UYD GARCH LOGO md ba utas gej tus tusdan logo bichehgui bol phone uyd logo-ni alga bolgohoor windows heseg bas alga bolood baina*/}
      <div className="hidden md:flex items-center  text-indigo-700">
        <Link href={"/"}>
          <div className="flex gap-2 items-center">
            <FilmIcon />
            <p className="text-base">
              <b>
                <i>Movie Z</i>
              </b>
            </p>
          </div>
        </Link>
      </div>

      {/*MD UYD GARCH IREH GENRE*/}
      <div className="hidden gap-3 md:flex">
        <Genre />
        <Button variant="outline">
          <SearchValue />
        </Button>
      </div>

      {/*MD UYD GARCH IREH Toggle*/}
      <div className="hidden md:block">
        <ModeToggle />
      </div>

      {/*Phone*/}
      <div className="flex justify-between items-center w-full md:hidden">
        {/*State F uyd garah LOGO*/}
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
        {/*State F uyd search & toggle*/}
        {!searchBtn && (
          <div className="flex gap-3 ">
            {/*"HAILT HIIH TOWCH" anhnii utga F uchir ehelj ene haragdan state F uyd ajilna gehdee ene ni utgaa T esreg bolgon*/}

            <Button variant="outline" onClick={() => setSearchBtn(true)}>
              <Search />
            </Button>

            <div className="block md:hidden">
              <ModeToggle />
            </div>
          </div>
        )}

        {/*State T boloh uyd garch ireh Input*/}
        {searchBtn && (
          <div className="flex  items-center w-full  justify-between">
            {/*SearchInput ba genre heseg state T uyd ajilna*/}
            <div className="flex items-center gap-[10%]">
              <Genre searchBtn={searchBtn} />
              <SearchValue />
            </div>

            {/*Erunhiiduu hailt hiih btn-s urwuu hamraaltai l gesen ug shdee hu "X" btn*/}
            <div className="" onClick={() => setSearchBtn(false)}>
              <X className="w-[16px], h-[16px]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
