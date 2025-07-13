import { MovieCarousel } from "@/components/Home/MovieCarousel";
import { Upcoming } from "@/components/Home/UpComing";
import { TopRated } from "@/components/Home/TopRated";
import { Popular } from "@/components/Home/Popular";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-full max-w-[100%]">
        <MovieCarousel />
      </div>

      <div className="w-[80%]">
        <Upcoming />
        <Popular />
        <TopRated />
      </div>
    </div>
  );
}
