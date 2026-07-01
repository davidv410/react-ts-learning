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

export type CreateReservationBody = {
    showtimeId: string;
    seatId: string;
}

export type ReservationResponse = {
    id: string;
    userId: number;
    showtimeId: string;
    seatId: string;
    status: string;
    pricePaid: string;
    createdAt: string;
    cancelledAt: string | null;
}