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

  const { push } = useRouter();
  const searchParams = useSearchParams();

  const [allGenre, setAllGenre] = useState<GenreProps[]>([]);

  // const [genreIds, setGenreIds] = useState([])
  
  const genreIds = (searchParams.get("genreIds") || "")?.split(",");

  // useRouter-r push-g awch baina
  // useSearchParams

  // const genreIds = searchParams.get("genreIds")

  console.log("genreIds :", genreIds);

  // const [selectedGenreIds, setSelectedGenreIds] = useState<number[]>([]);

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

    search.set("genreIds", newIds.join(","));

    push(`/genre?${search.toString()}`);
    console.log(":P", search);
  };

  return (
    <div className="bg-white/40 dark:bg-black/40 backdrop-blur-sm pl-5 pb-5 rounded-lg">
      <DropdownMenuLabel className="font-bold text-[24px] ">
        Genres
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
