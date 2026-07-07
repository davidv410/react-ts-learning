import type {Movie} from '@/features/movies/types.ts'
import {useEditMovie} from "@/features/movies/hooks/useEditMovie.ts";
import {useGenres} from "@/features/movies/hooks/useGenres.ts";

export const EditMovieForm = ({ movie }: { movie: Movie }) => {

    const { register, handleSubmit, submitForm, isSubmitting } = useEditMovie(movie)

    const { data, isLoading, error } = useGenres()

    return(
        <>
         <form onSubmit={handleSubmit(submitForm)}>
             <input {...register('title')} className="border"></input><br/>

             <input {...register('description')} className="border"></input><br/>

             <input {...register('durationMinutes', { valueAsNumber: true })} className="border"></input><br/>

             {isLoading && <p>Loading genres...</p>}
             {error && <p>Failed to load genres</p>}
             {
                 (data ?? []).map(genre => (
                     <>
                         <label key={genre.id}>
                             <input
                                 type="checkbox"
                                 value={genre.id}
                                 {...register('genreIds')}
                             />
                             {genre.name}
                         </label><br/>
                     </>
                 ))
             }

             <button className="border" type="submit" disabled={isSubmitting}>APPLY EDITS</button>
         </form>
        </>
    )
}