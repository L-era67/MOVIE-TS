export const GetUpComing = async () =>{
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/upcoming?language=en-US&page=1`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            },
        }
    );
    const movie =await response.json();

    return movie?.results;
}