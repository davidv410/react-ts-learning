import { Routes, Route } from 'react-router-dom';
import { Homepage } from "@/pages/homepage.tsx";
import { Movies } from "@/pages/movies.tsx";
import { MovieDetail } from "@/pages/movieDetail.tsx";
import { Login } from "@/pages/login.tsx";
import { Reservations } from "@/pages/reservations.tsx";
import { Showtimes } from "@/pages/showtimes.tsx";
import { ShowtimeDetail } from "@/pages/showtimeDetail.tsx"
import { ProtectedRoute } from "@/pages/ProtectedRoute.tsx";

function App() {

  return (
    <>
        <main style={{ padding: '1rem' }}>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<MovieDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/showtimes" element={<Showtimes />} />
                <Route path="/showtimes/:id" element={<ShowtimeDetail />} />
                <Route path="/reservations" element={
                    <ProtectedRoute>
                        <Reservations />
                    </ProtectedRoute>
                } />
            </Routes>
        </main>
    </>
  )
}

export default App
