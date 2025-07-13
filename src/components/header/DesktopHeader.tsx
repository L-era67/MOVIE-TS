import { FilmIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

import { ModeToggle } from "../theme/modeToggle";
import { SearchInput } from "@/app/search/_components/searchValue";
import { Genre } from "@/app/genre/_components/Genres";

export const DesktopHeader = () => {
  return (
    <>
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
      <div className="hidden gap-3 md:flex">
        <Genre />
        <Button variant="outline">
          <SearchInput />
        </Button>
      </div>

      <div className="hidden md:block">
        <ModeToggle />
      </div>
    </>
  );
};
