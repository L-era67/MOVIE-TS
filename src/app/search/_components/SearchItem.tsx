import { MovieProps } from "@/types";
import { ArrowRight, Star } from "lucide-react";
import { useRouter } from "next/navigation";

type SearchItemProps = {
  m: MovieProps;
  setSearch: (a: string) => void;
};
export const SearchItem = ({ m, setSearch }: SearchItemProps) => {

  const router = useRouter();
  const handleSeeMore = () => {
    setSearch("");
    router.push(`/details/${m.id}`);
  };

  return (
    <div key={m.id} className="flex gap-4  border-b-1  pt-[9px] pb-2">
      <img
        src={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
        alt="search"
        className="w-[67px] h-[100px] rounded-md"
      />

      <div className="flex flex-col w-full gap-3 ">
        <div className="flex flex-col items-start ">
          <p className=" text-[20px] font-semibold ">{m.title}</p>

          <div className="flex items-center">
            <Star className="text-yellow-300 fill-yellow-300" />
            <p className="text-[14px] md:text-[16px] text-muted-foreground">
              <span className="text-foreground  md:text-[18px] ">
                {m.vote_average ? m.vote_average?.toFixed(1) : "N/A"}
              </span>
              /10
            </p>
          </div>
        </div>

        <div className="flex justify-between text-foreground">
          <p className="pb-4 ">{m.release_date}</p>

          <button
            onClick={() => handleSeeMore()}
            className=" text-[14px] flex items-center gap-2 justify-center dark:text-white "
          >
            See more
            <ArrowRight className="w-[16px] h-[16px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
