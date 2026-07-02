import {useReservation} from "@/features/reservations/hooks/useReservation.ts";

export const Reservations = () => {

    const { data, isLoading, error } = useReservation();
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
                        <button className="cursor-pointer">CANCEL RESERVATIONS</button>
                    </div>
                ))
            }
        </>
    )
}