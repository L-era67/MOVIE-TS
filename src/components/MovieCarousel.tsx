"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";
import { MovieCardCarouselItem } from "./MovieCarouselitem";
import { getNowPlayingMovies } from "@/utils/get-playing-now";
import { Movie } from "@/types";

// import { CarouselLoader } from "./skeletons/CarouselLoader";

export const MovieCarousel = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState<Movie[]>([]);
  //   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoviesPlayNow = async () => {
      try {
        const NowMovies = await getNowPlayingMovies();
        setNowPlayingMovie(NowMovies);
        console.log("Movie carousel Item", NowMovies);
      } catch (error) {
        console.log("PLAY NOW ERROR:", error);
      }
      //   setLoading(false)
    };

    fetchMoviesPlayNow();
  }, []);

  return (
    <div>
      {/* <div className="w-screen ">{loading && <CarouselLoader/>}</div> */}

      <Carousel
        className="realtive mt-13"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {nowPlayingMovie?.slice(0, 5).map((movie, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <MovieCardCarouselItem
                  movie={movie}
                  id={movie.id}
                  // loading={loading}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" hidden md:block left-[20px] " />
        <CarouselNext className=" hidden md:block right-[20px]" />
      </Carousel>
    </div>
  );
};
