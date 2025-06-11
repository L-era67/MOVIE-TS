import { MovieTrailer } from "@/components/MovieTrailer";
import { MovieProps } from "@/types";

export const TrailerDetail = ({ movieDetail }:{movieDetail: MovieProps}) => {
  
  return (
    <div className="flex gap-8 w-full  justify-center relative min-h-[211px] md:max-h-[428px] lg:max-h-[500px] xl:max-h-[600px] 2xl:max-h-[700px]">
      <img
        src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
        alt=""
        className="hidden md:block w-1/5  object-cover rounded-sm"
      />

      <img
        src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
        alt="D"
        className="w-screen  md:w-4/5 object-cover rounded-sm"
      />

      <div className="absolute flex items-center top-[80%] left-4 gap-3 md:left-[30vh] lg:left-[40vh] xl:left-[50vh] 2xl:left-[60vh]">
     
          <MovieTrailer movieId={movieDetail?.id}/>
      
        <p className="text-white text-[16px]">PLay Trailer 2:35</p>
      </div>
    </div>
  );
};