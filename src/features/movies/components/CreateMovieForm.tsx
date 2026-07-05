import {useCreateMovie} from "@/features/movies/hooks/useCreateMovie.ts";
import {useGenres} from "@/features/movies/hooks/useGenres.ts";

export const CreateMovieForm = () => {
    const { register, handleSubmit, submitForm, setValue, getValues, errors, isSubmitting } = useCreateMovie();

    const { data, isLoading, error } = useGenres()

    return (
        <>
            <form className="mt-10" onSubmit={handleSubmit(submitForm)}>
                <input className="border" {...register('title')} placeholder="title"></input><br/>
                {errors.title && <p>{errors.title.message}</p>}

                <input className="border" {...register('description')} placeholder="description"></input><br/>
                {errors.description && <p>{errors.description.message}</p>}

                {/*<input placeholder="poster"></input>*/}
                <input className="border" {...register('durationMinutes', { valueAsNumber: true })} placeholder="duration in minutes"></input><br/>
                {errors.durationMinutes && <p>{errors.durationMinutes.message}</p>}


                {isLoading && <p>Loading genres...</p>}
                {error && <p>Failed to load genres</p>}
                {
                    (data ?? []).map(genre => (
                        <>
                        <label>
                            <input
                                type="checkbox"
                                value={genre.id}
                                onChange={(e) => {
                                    const current = getValues('genreIds') ?? []
                                    if (e.target.checked) {
                                        setValue('genreIds', [...current, e.target.value])
                                    } else {
                                        setValue('genreIds', [])
                                    }
                                }}
                            />
                            {genre.name}
                        </label><br/>
                        </>
                    ))
                }

                {errors.genreIds && <p>{errors.genreIds.message}</p>}

                <button className="border cursor-pointer" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'ADDING MOVIE...' : 'ADD MOVIE'}
                </button>
            </form>
        </>
    )
}