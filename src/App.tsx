import { Routes, Route } from 'react-router-dom';
import { Homepage } from "@/pages/homepage.tsx";
import { Movies } from "@/pages/movies.tsx";
import { MovieDetail } from "@/pages/movieDetail.tsx";
import { Login } from "@/pages/login.tsx";
import { Reservations } from "@/pages/reservations.tsx";

function App() {

  return (
    <>
        <main style={{ padding: '1rem' }}>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<MovieDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reservations" element={<Reservations />} />
            </Routes>
        </main>
    </>
  )
}

export default App
