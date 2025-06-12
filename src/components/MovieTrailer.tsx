import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MovieTrailerType } from "@/types";
import { getMovieTrailer } from "@/utils/get-trailer";
import { DialogTitle } from "@radix-ui/react-dialog";

import { PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
interface MovieTrailerId {
  movieId: number;
}

export const MovieTrailer = ({ movieId }: MovieTrailerId) => {
  const [movieTrailer, setMovieTrailer] = useState<MovieTrailerType[]>([]);

  useEffect(() => {
    if (!movieId) return;

    const getMovieTrailerbyId = async () => {
      try {
        const data = await getMovieTrailer(movieId);
        setMovieTrailer(data.results);
      } catch (error) {
        console.log("trailer err!!", error);
      }
    };

    getMovieTrailerbyId();
  }, [movieId]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  const trailerKey = movieTrailer.find(
    (movie) => movie.name === "Official Trailer"
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="dark:text-white flex px-[16px] py-[10px] w-fit rounded-md text-[14px] items-center gap-[8px] text-[#FAFAFA] bg-[#18181B] md:bg-[#FAFAFA]  md:text-[#18181B]"
        >
          <PlayIcon className="w-[16px] h-[16px] " />
          Watch trailer
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-fit bg-black">
        <DialogTitle className="sr-only">Movie Trailer</DialogTitle>
        <YouTube videoId={trailerKey?.key} opts={opts} />
      </DialogContent>
    </Dialog>
  );
};
