import {useCreateShowtime} from "@/features/showtimes/hooks/useCreateShowtime.ts";
import {useMovies} from "@/features/movies/hooks/useMovies.ts";

export const CreateShowtimeForm = () => {
    const { register, handleSubmit, submitForm, errors, isSubmitting, serverError } = useCreateShowtime()

    const { data, isLoading, error } = useMovies()

    return(
        <>
            <form onSubmit={handleSubmit(submitForm)} className="mt-20">

                {isLoading && <p>Loading movies...</p>}
                {error && <p>Failed to load movies</p>}
                <select {...register('movieId')} className="border">
                    <option value="">--</option>
                    {
                        (data ?? []).map(movie => (
                            <option key={movie.id} value={movie.id}>{movie.title}</option>
                        ))
                    }
                </select><br/>
                {errors.movieId && <p>{errors.movieId.message}</p>}

                <input {...register('startsAt')} className="border" placeholder="starts at" type="datetime-local"></input><br/>
                {errors.startsAt && <p>{errors.startsAt.message}</p>}

                <input {...register('endsAt')} className="border" placeholder="ends at" type="datetime-local"></input><br/>
                {errors.endsAt && <p>{errors.endsAt.message}</p>}

                <select {...register('hall')} className="border">
                    <option>HALL A</option>
                    <option>HALL B</option>
                    <option>HALL C</option>
                </select><br/>
                {errors.hall && <p>{errors.hall.message}</p>}

                <input {...register('totalSeats')} className="border" placeholder="total seats" type="number"></input><br/>
                {errors.totalSeats && <p>{errors.totalSeats.message}</p>}

                {serverError && <p>{serverError}</p>}
                <button className="border cursor-pointer" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'ADDING SHOWTIME...' : 'ADD SHOWTIME'}
                </button>
            </form>
        </>
    )
}