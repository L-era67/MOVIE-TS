import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import { ChevronDown } from "lucide-react";
import { SearchGenres } from "./Allgenres";
import { usePathname } from "next/navigation";

type GenreType = {
  searchBtn?: boolean;
};

export const Genre = ({ searchBtn }: GenreType) => {
  const pathName = usePathname();
  console.log("pathName:", pathName);

  //if()
  //  const isOnGenrePage = pathName === "/genre";

  const isOnGenrePage = pathName.includes("/genre");
  console.log("ISONGENREPAGE:", isOnGenrePage);

  // const isOnGenrePage = pathName.inclu
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            {!searchBtn && (
              <Button variant="outline">
                Genre
                <ChevronDown />
              </Button>
            )}
            {searchBtn && (
              <Button variant="outline">
                <ChevronDown />
              </Button>
            )}
          </div>
        </DropdownMenuTrigger>
        {!isOnGenrePage && (
          <DropdownMenuContent className="w-100 md:w-120 lg:w-150 p-5 z-99">
            <SearchGenres />
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
};
