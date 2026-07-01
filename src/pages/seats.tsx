import {useSeats} from "@/features/showtimes/hooks/useSeats.ts";
import type {SeatsProps} from "@/features/showtimes/types.ts";
import {useState} from "react";
import {useCreateReservation} from "@/features/showtimes/hooks/useCreateReservation.ts";

export const Seats = ({ showtimeId }: SeatsProps) => {

    const [selectedSeats, setSelectedSeats] = useState<string[]>([])

    const { mutate } = useCreateReservation()

    const { data, isLoading, error } = useSeats(showtimeId)

    const addSeats = (seatId: string) => {
        setSelectedSeats(prev => prev.includes(seatId) ? prev.filter(id => id !== seatId) : [...prev, seatId])
    }

    const confirmSeatReservation = () => {
        if(selectedSeats.length === 0){ return console.log("no seats selected") }
        selectedSeats.forEach(seatId => {
            mutate({ showtimeId, seatId })
        })
        console.log('seat reservation created')
    }

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
                    {seat.isAvailable ?
                        <>
                        <p>available</p>
                        <button className="cursor-pointer" onClick={() => addSeats(seat.id)}>BOOK</button>
                        </>
                        :
                        <p>taken</p>
                    }

                </div>
            ))}
            </section>
            {selectedSeats.map(seat => (
                <p>{seat}</p>
            ))}
            <button onClick={confirmSeatReservation} className="cursor-pointer">confirm bookings</button>
        </>
    )
}