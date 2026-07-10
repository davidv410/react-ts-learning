import { useShowtime } from "@/features/showtimes/hooks/useShowtime.ts";
import { useParams } from "react-router-dom";
import { Seats } from "@/pages/seats.tsx";
import { EditShowtimeForm } from "@/features/showtimes/components/EditShowtimeForm.tsx";
import { useAuth } from "@/features/auth/context.tsx";

export const ShowtimeDetail = () => {
    const { id = '' } = useParams()

    const { user } = useAuth()

    const { data, isLoading, error } = useShowtime(id)

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>
    if (!id) return <p>Movie not found</p>

    return (
        <>
            {data && (
                <div>
                    <p>{data.id}</p>
                </div>
            )}

            <section>
                <Seats showtimeId={id}/>
            </section>

            {user?.role === 'admin' &&
                <div>
                    {data ?
                        <EditShowtimeForm showtimeData={data}/>
                        :
                        <div>Showtime not found.</div>
                    }
                </div>
            }
        </>
    )
}