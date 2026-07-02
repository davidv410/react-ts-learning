import {useReservation} from "@/features/reservations/hooks/useReservation.ts";
import {useCancelReservation} from "@/features/reservations/hooks/useCancelReservation.ts";

export const Reservations = () => {

    const { data, isLoading, error } = useReservation();

    const { mutate } = useCancelReservation()

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>{error.message}</p>;

    return(
        <>
            <p>Your reservations</p>

            {
                (data ?? []).map(item => (
                    <div className="border">
                        <p>{item.seats.row} - {item.seats.number}</p>
                        <p>{item.seats.price} KM</p>
                        { item.reservations.status === 'cancelled' ? 'reservations has be cancelled' :
                        <button className="cursor-pointer" onClick={() => mutate(item.reservations.id)}>CANCEL RESERVATIONS</button>
                        }
                    </div>
                ))
            }
        </>
    )
}