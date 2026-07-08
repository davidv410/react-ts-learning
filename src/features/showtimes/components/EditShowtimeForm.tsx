import { useEditShowtime } from "@/features/showtimes/hooks/useEditShowtime.ts";
import type {EditShowtimeFormData} from "@/features/showtimes/schema.ts";


export const EditShowtimeForm = ({showtimeData}: {showtimeData: EditShowtimeFormData}) => {
    const { register, handleSubmit, submitForm, errors, isSubmitting } = useEditShowtime(showtimeData)

    return(
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <div>
                    <select {...register('hall')} className="border">
                        <option value="" disabled>Select a hall</option>

                        <option value="HALL A">HALL A</option>
                        <option value="HALL B">HALL B</option>
                        <option value="HALL C">HALL C</option>
                    </select><br/>
                { errors.hall && <p>{errors.hall.message}</p> }
                </div>


                {/*TIMESTAMPS SU POKVARENE MORAM POPRAVIT*/}
                <input {...register('startsAt')} className="border" type="datetime-local"></input><br/>
                { errors.startsAt && <p>{errors.startsAt.message}</p> }

                <input {...register('endsAt')} className="border" type="datetime-local"></input><br/>
                { errors.endsAt && <p>{errors.endsAt.message}</p> }

                <input {...register('totalSeats', { valueAsNumber: true })} className="border" type="number"></input><br/>
                { errors.totalSeats && <p>{errors.totalSeats.message}</p> }

            <button type="submit" disabled={isSubmitting}>
                APPLY EDIT
            </button>
            </form>
        </>
    )
}