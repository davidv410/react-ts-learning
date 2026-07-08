import { z } from 'zod';

export const createShowtimeSchema = z.object({
    movieId: z.uuid(),
    startsAt: z.string().min(1),
    endsAt: z.string().min(1),
    hall: z.string().min(1),
    totalSeats: z.string().min(1),
});

export const editShowtimeSchema = z.object({
    id: z.uuid().optional(),
    startsAt: z.string().optional(),
    endsAt: z.string().optional(),
    hall: z.string().optional(),
    totalSeats: z.number().optional(),
});

export type CreateShowtimeFormData = z.infer<typeof createShowtimeSchema>
export type EditShowtimeFormData = z.infer<typeof editShowtimeSchema>