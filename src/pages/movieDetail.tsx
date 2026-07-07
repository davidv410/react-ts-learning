import {useShowtimes} from "@/features/showtimes/hooks/useShowtimes.ts";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useAuth} from "@/features/auth/context.tsx";
import {useRemoveMovie} from "@/features/movies/hooks/useRemoveMovie.ts";
import {useMovie} from "@/features/movies/hooks/useMovie.ts";
import {EditMovieForm} from "@/features/movies/components/EditMovieForm.tsx";
import {useState} from "react";

export const MovieDetail = () => {
    const { id = '' } = useParams()
    const navigate = useNavigate();

    const { user } = useAuth()
    const { mutate, isPending } = useRemoveMovie();

    const { data: movieData, isLoading: movieLoading, error: movieError } = useMovie(id)
    const { data, isLoading, error } = useShowtimes(id)

    const [form, setForm] = useState<boolean>(false)

    const toggleForm = () => {
        setForm(!form);
    }

    if(!movieData) return <p>Movie not found</p>
    if(isLoading || movieLoading) return <p>Loading...</p>
    if(error || movieError) return <p>Error...</p>

    return(
        <>
         <h1>{movieData.title}</h1>
            <ul>
                <li>{movieData.description}</li>
                <li>{movieData.durationMinutes}</li>
            </ul>

        {(data ?? []).map(item => (
            <div className="border">
                <p>{item.showtimes.hall}</p>
                <p>Starts at {item.showtimes.startsAt}</p>
                <p>total seats: {item.showtimes.totalSeats}</p>
                <button onClick={() => navigate(`/showtimes/${item.showtimes.id}`)}>CHECK SEATS</button>
            </div>
        ))}
                { user?.role === "admin" &&
                    <div className="mt-5">
                        <button className="cursor-pointer border" onClick={() => toggleForm()}>EDIT MOVIE</button><br/>
                        <button className="cursor-pointer border" onClick={() => mutate(movieData.id)} disabled={isPending}>
                            REMOVE MOVIE
                        </button>

                    { form &&
                    <EditMovieForm movie={movieData}/>
                    }

                    </div>
                }

        </>
    )
}