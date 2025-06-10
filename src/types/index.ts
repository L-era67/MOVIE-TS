export type Movie = {
  title: string;
  vote_average: number;
  backdrop_path: string;
  overview: string;
  id: number;
  poster_path: string;
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
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type Cast = {
  name: string;
  profile_path: string;
  character: string;
};
export type Crew = {
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: 1.154;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};

export type StaffInfo = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

// export type Director = {
//   job: string;
// };
