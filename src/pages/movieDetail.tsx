import {useShowtimes} from "@/features/showtimes/hooks/useShowtimes.ts";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";

export const MovieDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate();


    const { data, isLoading, error } = useShowtimes(id)

    if(!id) return <p>Movie not found</p>
    if(isLoading) return <p>Loading...</p>
    if(error) return <p>{error.message}</p>

    return(
        <>
        <h1>SHOWTIMES FOR {data?.[0]?.movies.title}:</h1>

        {(data ?? []).map(item => (
            <div className="border">
                <p>{item.showtimes.hall}</p>
                <p>Starts at {item.showtimes.startsAt}</p>
                <p>total seats: {item.showtimes.totalSeats}</p>
                <button onClick={() => navigate(`/showtimes/${item.showtimes.id}`)}>CHECK SEATS</button>
            </div>
        ))}
        </>
    )
}