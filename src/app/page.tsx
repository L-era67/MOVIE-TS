import { MovieCarousel } from "@/components/MovieCarousel";
import { Upcoming } from "@/components/Home/UpComing";
import Image from "next/image";
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

        
        <TopRated/>
        <Popular/>
      </div>
    </div>
  );
}
