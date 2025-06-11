export const getCategoryMovie = async (categoryName:string, page:number=1) =>{
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${categoryName}?language=en-US&page=${page}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            },
        }
    );
    const movie =await response.json();

    return movie;
}