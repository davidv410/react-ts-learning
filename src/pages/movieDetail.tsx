import { useMovie } from "@/features/movies/hooks/useMovie.ts";
import {useShowtimes} from "@/features/showtimes/hooks/useShowtimes.ts";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
    const { id } = useParams()

    if(!id) return <p>Movie not found</p>

    const { data: movie, isLoading: movieLoading, error: movieError } = useMovie(id)
    const { data: showtimes, isLoading: showtimesLoading, error: showtimesError } = useShowtimes(id)

    if(movieLoading || showtimesLoading) return <p>Loading...</p>
    if(movieError || showtimesError) return <p>Something went wrong</p>

    return(
        <>
        {movie && (
            <div>
                <p>{movie.title}</p>
                <p>{movie.description}</p>
                <p>{movie.durationMinutes} min</p>
            </div>
        )}

        <h1>SHOWTIMES:</h1>
        {(showtimes ?? []).map(showtime => (
            <div className="border">
                <p>{showtime.hall}</p>
                <p>Starts at {showtime.startsAt}</p>
                <p>{showtime.totalSeats}</p>
                <button>CHECK SEATS</button>
            </div>
        ))}
        </>
    )
}