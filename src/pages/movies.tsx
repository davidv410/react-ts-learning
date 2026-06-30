import { useMovies } from "@/features/movies/hooks/useMovies.ts";
import { useNavigate } from "react-router-dom";

export const Movies = () => {
    const navigate = useNavigate()

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
                    w-50
                    ">
                        <p>{movie.title}</p>
                        <p>{movie.description} desc</p>
                        <div className="flex justify-between mt-3 mb-3">
                        <p>{movie.durationMinutes} min</p>
                        <button className="cursor-pointer" onClick={() => navigate(`/movies/${movie.id}`)}>WATCH</button>
                        </div>
                    </div>
                ))
            }
            </section>
        </>
    )
}