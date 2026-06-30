import {useSeats} from "@/features/showtimes/hooks/useSeats.ts";
import type {SeatsProps} from "@/features/showtimes/types.ts";

export const Seats = ({ showtimeId }: SeatsProps) => {

    const { data, isLoading, error } = useSeats(showtimeId)

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>{error.message}</p>

    return (
        <>
            <section className="flex flex-wrap">
            {(data ?? []).map(seat => (
                <div key={seat.id} className="m-2">
                    <p>{seat.row}</p>
                    <p>{seat.number}</p>
                    <p>{seat.price}</p>
                </div>
            ))}
            </section>
        </>
    )
}