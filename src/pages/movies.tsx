import { useMovies } from "@/features/movies/hooks/useMovies.ts";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/features/auth/context.tsx";
import { useRemoveMovie } from "@/features/movies/hooks/useRemoveMovie.ts";

export const Movies = () => {
    const navigate = useNavigate()

    const { user } = useAuth()
    const { mutate, isPending } = useRemoveMovie();

    const { data, isLoading, error } = useMovies()
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    return(
        <>
            <section className="flex">
            {
                (data ?? []).map(movie => (
                    <div key={movie.id} className="
                    m-10
                    p-2
                    border
                    w-100
                    ">
                        <p>{movie.title}</p>
                        <p>{movie.description} desc</p>
                        <div className="flex justify-between mt-3 mb-3 flex-col">
                            <p>{movie.durationMinutes} min</p>
                            <button className="cursor-pointer border" onClick={() => navigate(`/movies/${movie.id}`)}>WATCH</button>
                            { user?.role === "admin" &&
                                <>
                                    <button className="cursor-pointer border">EDIT MOVIE</button>
                                    <button className="cursor-pointer border" onClick={() => mutate(movie.id)} disabled={isPending}>
                                        REMOVE MOVIE
                                    </button>
                                </>
                            }
                        </div>
                    </div>
                ))
            }
            </section>
        </>
    )
}