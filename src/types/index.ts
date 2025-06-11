
export type MovieResponse = {
  page: number;
  results: MovieProps[];
  total_pages: number;
  total_results: number;
};

type Genre = {
  id: number;
  name: string;
};

export type MovieProps = {
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Crew = {
  gender: number;
  id: number;
  name: string;
  profile_path: string;
  department: string;
  job: string;
};

export type StaffInfo = {
  id: number;
  cast: { name: string }[];
  crew: Crew[];
};

export type MovieTrailerType = {
  name: string;
  size: number;
  official: boolean;
  id: number;
  key:string;
};
