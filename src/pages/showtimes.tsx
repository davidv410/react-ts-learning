import {useShowtimes} from "@/features/showtimes/hooks/useShowtimes.ts";
import {useNavigate} from "react-router-dom";

export const Showtimes = () => {
    const navigate = useNavigate()
    const { data, isLoading, error } = useShowtimes()

    if(isLoading) return <p>Loading</p>
    if(error) return <p>{error.message}</p>

    return(
        <>
            {
               (data ?? []).map(showtime => (
                   <div key={showtime.id}>
                       <p>{showtime.id}</p>
                       <p>{showtime.hall}</p>
                       <p>{showtime.totalSeats} seats</p>
                       <p>{showtime.startsAt}</p>
                       <button onClick={() => navigate(`/showtimes/${showtime.id}`)}>CHECK SEATS</button>
                   </div>
               ))
            }
        </>
    )
}