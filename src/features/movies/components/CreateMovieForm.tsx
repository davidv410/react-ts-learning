import {useCreateMovie} from "@/features/movies/hooks/useCreateMovie.ts";
import {useGenres} from "@/features/movies/hooks/useGenres.ts";

export const CreateMovieForm = () => {
    const { register, handleSubmit, submitForm, errors, isSubmitting, movieSuccessMessage } = useCreateMovie();

    const { data, isLoading, error } = useGenres()

    return (
        <>
            <form className="mt-10" onSubmit={handleSubmit(submitForm)}>
                <input className="border" {...register('title')} placeholder="title"></input><br/>
                {errors.title && <p className="text-red-500">{errors.title.message}</p>}

                <input className="border" {...register('description')} placeholder="description"></input><br/>
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}

                {/*<input placeholder="poster"></input>*/}
                <input className="border" {...register('durationMinutes', { valueAsNumber: true })} placeholder="duration in minutes"></input><br/>
                {errors.durationMinutes && <p className="text-red-500">{errors.durationMinutes.message}</p>}


                {isLoading && <p>Loading genres...</p>}
                {error && <p className="text-red-500">Failed to load genres</p>}
                {
                    (data ?? []).map(genre => (
                        <>
                        <label>
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
                { movieSuccessMessage && <p className="accent-green-500">{movieSuccessMessage}</p>}
                {errors.genreIds && <p className="text-red-500">{errors.genreIds.message}</p>}

                <button className="border cursor-pointer" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'ADDING MOVIE...' : 'ADD MOVIE'}
                </button>
            </form>
        </>
    )
}