export const getSimilar = async (id:number, morePage:number=1) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${id}/similar?language=en-US&page=${morePage}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
      },
    }
  );

  const similarMov = await response.json();
 
  return similarMov;
};
