import {useShowtimes} from "@/features/showtimes/hooks/useShowtimes.ts";
import {useNavigate} from "react-router-dom";

export const Showtimes = () => {
    const navigate = useNavigate()
    const { data, isLoading, error } = useShowtimes()
    console.log(data)
    if(isLoading) return <p>Loading</p>
    if(error) return <p>{error.message}</p>

    return(
        <>
            {
               (data ?? []).map(item => (
                   <div key={item.showtimes.id}>
                       <p>{item.showtimes.hall}</p>
                       <p>{item.showtimes.totalSeats} seats</p>
                       <p>{item.showtimes.startsAt}</p>
                       <p>Playing: {item.movies.title}</p>
                       <button onClick={() => navigate(`/showtimes/${item.showtimes.id}`)}>CHECK SEATS</button>
                   </div>
               ))
            }
        </>
    )
}