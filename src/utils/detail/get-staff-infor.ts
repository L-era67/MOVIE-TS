export const getStaffInfo = async(id:number) =>{
     const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${id}/credits?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
      },
    }
  );

  const staffInfo = await response.json();

   
  return staffInfo;
}