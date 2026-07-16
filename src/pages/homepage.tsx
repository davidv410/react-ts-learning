import { useAuth } from "@/features/auth/context.tsx";
import { logoutUser } from "@/features/auth/api.ts";
import {useNavigate} from "react-router-dom";
import {CreateMovieForm} from "@/features/movies/components/CreateMovieForm.tsx";
import {useState} from "react";
import {CreateShowtimeForm} from "@/features/showtimes/components/CreateShowtimeForm.tsx"

export const Homepage = () => {
    const { user, logout } = useAuth()

    const navigate = useNavigate()

    const [movieForm, setMovieForm] = useState(false)
    const [showtimeForm, setShowtimeForm] = useState(false)

    const handleMovieForm = () => {
        setMovieForm(!movieForm)
    }

    const handleShowtimeForm = () => {
        setShowtimeForm(!showtimeForm)
    }

    const handleLogout = async () => {
        await logoutUser()
        logout()
        navigate("/login")
    }

    return(
        <>
            { user &&
                <div>
                    <p>{user.role} - {user.email}</p>
                    <button onClick={() => handleLogout()} className="text-red-500">Logout</button>
                </div>
            }

            <ul>
                { user &&
                <li><button className="cursor-pointer border" onClick={() => navigate('/reservations')}>reservations</button></li>
                }
                <li><button className="cursor-pointer border" onClick={() => navigate('/movies')}>movies</button></li>
                <li><button className="cursor-pointer border" onClick={() => navigate('/showtimes')}>showtimes</button></li>
            </ul>

            { user?.role === "admin" &&
                <>
                    <button className={`border cursor-pointer ${movieForm ? 'text-gray-400' : ''}`} onClick={() => handleMovieForm()}>Add movies</button><br></br>
                    <button className={`border cursor-pointer ${showtimeForm ? 'text-gray-400' : ''}`} onClick={() => handleShowtimeForm()}>Create showtimes</button>
                    { movieForm &&
                        <CreateMovieForm/>
                    }
                    { showtimeForm &&
                        <CreateShowtimeForm/>
                    }
                </>
            }
        </>
    )
}