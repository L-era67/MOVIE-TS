"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getGenre } from "@/utils/get-Genre";
import { useRouter } from "next/navigation";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";

type GenreProps = {
  id: number;
  name: string;
};

export const SearchGenres = () => {
  const [allGenre, setAllGenre] = useState<GenreProps[]>([]);

  const { push } = useRouter();
  const searchParams = useSearchParams();

  const genreIds = (searchParams.get("genreIds") || "")
    ?.split(",")
    .filter((id) => id != ""); // (["", "28"] gehees sergiilsen

  const genreNames = (searchParams.get("names") || "")
    .split(", ")
    .filter((name) => name != "");

  // ALLGENRE API
  const handleSearchGenre = async () => {
    try {
      const data = await getGenre();
      const allGen = data.genres || [];
      setAllGenre(allGen);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  useEffect(() => {
    handleSearchGenre();
  }, []);

  //SELECT GENRE
  const handleGenreClick = (id: string, name: string) => {
    const search = new URLSearchParams();

    const newIds = genreIds.includes(id)
      ? genreIds.filter((genreId) => genreId !== id)
      : [...genreIds, id];

    const newNames = genreNames.includes(name)
      ? genreNames.filter((genreName) => genreName !== name)
      : [...genreNames, name];

    console.log("newNames:", newNames);

    const queryIds = newIds.join(",");
    const queryNames = newNames.join(", ");

    search.set("genreIds", queryIds);
    search.set("names", queryNames);

    push(`/genre?${search.toString()}`);
  };

  const pathName = usePathname();
  const isOnSearchPage = pathName.includes("/search");

  return (
    <div className="bg-white/40 dark:bg-black/40 backdrop-blur-sm pl-5 pb-5 rounded-lg">
      <DropdownMenuLabel className="font-bold text-[24px] ">
        {isOnSearchPage ? "Search by genre" : "Genres"}
      </DropdownMenuLabel>
      <DropdownMenuLabel className="pb-5">
        See lists of movies by genre
      </DropdownMenuLabel>
      <DropdownMenuSeparator />

      <div className="flex flex-wrap gap-3 pt-5 font-bold ">
        {allGenre?.map((genre) => {
          const isSelected = genreIds.includes(String(genre.id));

          return (
            <Button
              //   movie={genre}
              onClick={() => handleGenreClick(String(genre.id), genre.name)}
              key={genre.id}
              variant={isSelected ? "default" : "secondary"}
              className="rounded-full px-[10px] py-[2px] flex font-bold "
            >
              {genre.name} <ChevronRight />
            </Button>
          );
        })}
      </div>
    </div>
  );
};
