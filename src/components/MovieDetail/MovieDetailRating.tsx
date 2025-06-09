import { StarIcon } from "lucide-react";

export const MovieDetailTitle = ({ movieDetail }) => {
  console.log("ahah", movieDetail);

  const time = movieDetail?.runtime;
  const runTime = `${Math.floor(time / 60)}h ${time % 60}m`;

  const voteAverage = movieDetail?.vote_average;
  const voteCount = movieDetail?.vote_count;

  return (
    <div className="flex justify-between items-end pt-8 pl-5 pr-[33px] ">
      <div>
        <h1 className="text-[24px] text-foreground font-semibold md:text-[36px] md:font-bold">
          {movieDetail?.title}
        </h1>
        <p className="text-[14px] font-normal md:text-[18px]">
          {movieDetail?.release_date} · PG · {time ? runTime : "N/A"}
        </p>
      </div>

      <div className="flex items-center gap-1">
        <StarIcon className="fill-yellow-300 text-yellow-300" />

        <div className="flex flex-col justify-center">
          <p className="text-[14px] md:text-[16px] text-muted-foreground">
            <span className="text-foreground font-semibold md:text-[18px]">
              {voteAverage ? voteAverage?.toFixed(1) : "N/A"}
            </span>
            /10
          </p>
          <p className="text-[12px] text-muted-foreground">
            {voteCount? voteCount.toLocaleString(): "No Votes"}
          </p>
        </div>
      </div>
    </div>
  );
};