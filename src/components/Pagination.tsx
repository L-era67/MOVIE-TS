import { MovieResponse } from "@/types";
import { Button } from "./ui/button";

type PaginationProp = {
  more: MovieResponse;
  setMorePage: (a: number) => void; //void ni yu ch butsaahgui gesen ug state uurchluh uyd l set Function ajillah uchir;
  morePage: number;
};

export const Pagination = ({ more, setMorePage, morePage }: PaginationProp) => {
  const totalPage = more.total_pages;

  console.log("TOTALPAGEE", totalPage);

  const arr = Array(totalPage - 1)
    .fill(null)
    .map((_, index) => index + 1);
  console.log(arr);

  const handlePrev = () => {
    if (morePage === 1) return;
    setMorePage(morePage - 1);
  };

  const handleNext = () => {
    if (morePage === totalPage) return;
    setMorePage(morePage + 1);
  };

  const handleSelect = (number: number) => {
    setMorePage(number);
  };
  return (
    <div>
      <Button variant="outline" onClick={handlePrev}>
        Previous
      </Button>
      {arr.length > 0 &&
        arr.map((number, i) => {
          if (morePage + 1 >= number && morePage - 1 < number) {
            return (
              <Button onClick={() => handleSelect(number)} variant="outline" key={i}>
                {number}
              </Button>
            );
          }
        })}
      ...
      <Button onClick={() => handleSelect(totalPage)} variant="outline">
        {totalPage}
      </Button>
      <Button onClick={handleNext} variant="outline">
        Next
      </Button>
    </div>
  );
};
