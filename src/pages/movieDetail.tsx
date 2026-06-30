import {useMovie} from "@/features/movies/hooks/useMovie.ts";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
    const { id } = useParams()

    if(!id) return <p>Movie not found</p>

    const { data, isLoading, error } = useMovie(id)

    if(isLoading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    return(
        <>
        {data && (
            <div>
                <p>{data.title}</p>
                <p>{data.description}</p>
                <p>{data.durationMinutes}</p>
            </div>
        )}
        </>
    )
}