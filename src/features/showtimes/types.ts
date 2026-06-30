export type Showtime = {
    id: string;
    movieId: string;
    startsAt: string;
    endsAt: string;
    hall: string;
    totalSeats: number;
    createdAt: string;
}

export type Seats = {
    id: string;
    showtimeId: string;
    row: string;
    number: number;
    type: string;
    price: string;
    isAvailable: boolean;
}

export type SeatsProps = {
    showtimeId: string
}