
import { useEffect, useState } from "react"

import { getSimilar } from "@/utils/MoreLikeALL";
import { MoreLikeThis } from "./MorelikeThis";
import { MovieProps} from "@/types";

export const MoreLikeData =({movieId}:{movieId:number})=>{

    
    const [similar, setSimilar] = useState<MovieProps[]>([]);
    
    const movId = async()=>{
        const similarMov= await getSimilar(movieId)
        console.log("SIMILAR MAVIE", similarMov);
        
        setSimilar(similarMov.results)
    }
    
    useEffect(()=>{
        if(!movieId) return;
        movId()
    },[movieId])

    return(
        <MoreLikeThis similarMovies={similar} movieId={movieId}/>
    )
}