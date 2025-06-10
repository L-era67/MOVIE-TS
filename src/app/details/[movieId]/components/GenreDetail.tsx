import { MovieProps } from "@/types";

export const GenreDetail = ({ movieDetail }:{movieDetail: MovieProps}) => {

  return (
    <div className="flex m-5 md:m-0 gap-[34px]">
      <img
        src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
        alt=""
        className="w-[100px] h-[148px] md:hidden"
      />

      <div>
        <div className="flex gap-4 flex-wrap font-bold">
          {movieDetail?.genres?.map((genre, index) => (
            
            <span className="py-[2px] px-[10px] border-1 border-[#E4E4E7] rounded-xl" key={index}>
              {genre.name}
            </span>
          ))}
        </div>

        <p className="text-[16px] font-normal pt-5">{movieDetail?.overview}</p>
      </div>
    </div>
  );
};