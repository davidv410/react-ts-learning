import { z } from 'zod';

export const createShowtimeSchema = z.object({
    movieId: z.uuid("Movie is required"),
    startsAt: z.string().min(1, ("Enter valid time")),
    endsAt: z.string().min(1, ("Enter valid time")),
    hall: z.string().min(1),
    totalSeats: z.number("Number of seats is required").int().positive()
});

export const editShowtimeSchema = z.object({
    id: z.uuid().optional(),
    startsAt: z.string().optional(),
    endsAt: z.string().optional(),
    hall: z.string().optional(),
    totalSeats: z.number().int().positive().optional(),
});

export type CreateShowtimeFormData = z.infer<typeof createShowtimeSchema>
export type EditShowtimeFormData = z.infer<typeof editShowtimeSchema>