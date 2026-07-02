export type Reservation = {
    id: string;
    userId: number;
    showtimeId: string;
    seatId: string;
    status: string;
    pricePaid: string;
    createdAt: string;
    cancelledAt: string | null;
}

export type ReservationWithSeat = {
    reservations: Reservation
    seats: {
        id: string;
        showtimeId: string;
        row: string;
        number: number;
        type: string;
        price: string;
        isAvailable: boolean;
    }
}