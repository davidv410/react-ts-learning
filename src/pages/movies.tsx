import {useMovies} from "@/features/movies/hooks/useMovies.ts";

export const Movies = () => {

    const { data, isLoading, error } = useMovies()
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    return(
        <>
            {
                (data ?? []).map(movie => (
                    <p key={movie.id}>{movie.title}</p>
                ))
            }
        </>
    )
}