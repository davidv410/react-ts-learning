import {useEffect, useState} from "react";
import type { Movie } from "@/features/movies/types.ts";
import { fetchMovies } from "@/features/movies/api.ts";

export const Movies = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await fetchMovies()
                setMovies(response)
                setLoading(false)
            }catch(err){
                if (err instanceof Error) setError(err.message)
                else setError('Something went wrong')
                setLoading(false)
            }
        }
        getData()
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return(
        <>
            {
                movies.map(movie => (
                    <p key={movie.id}>{movie.title}</p>
                ))
            }
        </>
    )
}