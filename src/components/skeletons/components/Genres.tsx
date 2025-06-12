import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import { ChevronDown } from "lucide-react";
import { SearchGenres } from "./Allgenres";

export const Genre = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Genre
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-150 p-5 z-99">
          <SearchGenres />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};