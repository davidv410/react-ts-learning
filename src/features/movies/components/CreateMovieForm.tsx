import {useCreateMovie} from "@/features/movies/hooks/useCreateMovie.ts";

export const CreateMovieForm = () => {
    const { register, handleSubmit, submitForm, setValue, errors, isSubmitting } = useCreateMovie();
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

                <label>
                    <input
                        type="checkbox"
                        value="7e4c22d1-003f-457e-927b-160713166602"
                        onChange={(e) => {
                            if (e.target.checked) {
                                setValue('genreIds', [e.target.value])
                            } else {
                                setValue('genreIds', [])
                            }
                        }}
                    />
                    Action
                </label><br/>
                {errors.genreIds && <p>{errors.genreIds.message}</p>}

                <button className="border cursor-pointer" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'ADDING MOVIE...' : 'ADD MOVIE'}
                </button>
            </form>
        </>
    )
}