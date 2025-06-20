"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getGenre } from "@/utils/get-Genre";
import { useRouter } from "next/navigation";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";

type GenreProps = {
  id: number;
  name: string;
};

export const SearchGenres = () => {
  const router = useRouter();

  const [allGenre, setAllGenre] = useState<GenreProps[]>([]);

  // //QUERY IDS
  // const [selectedGenreIds, setSelectedGenreIds] = useQueryState(
  //   "genreIds",
  //   parseAsArrayOf(parseAsInteger).withDefault([])
  // );
  // // NAMES
  // const [selectedGenreNames, setSelectedGenreNames] = useQueryState(
  //   "names",
  //   parseAsArrayOf(parseAsString).withDefault([])
  // );
  const [selectedGenreIds, setSelectedGenreIds] = useState<number[]>([])
  const[selectedGenreNames, setSelectedGenreNames] = useState<string[]>([])

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
  const handleGenreClick = (id: number, name: string) => {
    const newIds = selectedGenreIds.includes(id)
      ? selectedGenreIds.filter((genreId) => genreId !== id)
      : [...selectedGenreIds, id];
    setSelectedGenreIds(newIds);

    const newNames = selectedGenreNames.includes(name)
      ? selectedGenreNames.filter((n) => n !== name)
      : [...selectedGenreNames, name];
    setSelectedGenreNames(newNames);
    router.push(`/genre?genreIds=${newIds}&names=${newNames}`);
    // router.push(`/genre`);
  };
  return (
    <div>
      <DropdownMenuLabel className="font-bold text-[24px]">
        Genres
      </DropdownMenuLabel>
      <DropdownMenuLabel className="pb-5">
        See lists of movies by genre
      </DropdownMenuLabel>
      <DropdownMenuSeparator />

      <div className="flex flex-wrap gap-3 pt-5 font-bold">
        {allGenre?.map((genre) => {
          const isSelected = selectedGenreIds.includes(genre.id);

          return (
            <Button
              //   movie={genre}
              onClick={() => handleGenreClick(genre.id, genre.name)}
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
