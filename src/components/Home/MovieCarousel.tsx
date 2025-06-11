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
import { getNowPlayingMovies } from "@/utils/home/get-playing-now";
import { MovieProps } from "@/types";
import { CarouselLoader } from "../skeletons/CarouselLoader";

// import { CarouselLoader } from "./skeletons/CarouselLoader";

export const MovieCarousel = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMoviesPlayNow = async () => {
      setLoading(true);
      setError(null);
      try {
        const NowMovies = await getNowPlayingMovies();
        setNowPlayingMovie(NowMovies);

        // console.log(JSON.stringify(NowMovies, null , 2))
      } catch (error) {
        console.log("PLAY NOW ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesPlayNow();
  }, []);

  if (loading) {
    return <CarouselLoader/>
  }

  return (
    <div>
      {/* <div className="w-screen ">{loading && <CarouselLoader/>}</div> */}

      <Carousel
        className="realtive"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {!loading && nowPlayingMovie?.slice(0, 5).map((movie, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <MovieCardCarouselItem movie={movie} />
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
