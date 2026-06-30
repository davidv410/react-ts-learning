import {useShowtime} from "@/features/showtimes/hooks/useShowtime.ts";
import {useParams} from "react-router-dom";

export const ShowtimeDetail = () => {
    const { id } = useParams()

    if(!id) return <p>Movie not found</p>

    const { data, isLoading, error } = useShowtime(id)

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>{error.message}</p>

    return(
        <>
            {data && (
            <div>
                <p>{data.id}</p>
            </div>
            )}
        </>
    )
}