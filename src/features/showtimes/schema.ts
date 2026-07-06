import { z } from 'zod';

export const createShowtimeSchema = z.object({
    movieId: z.uuid(),
    startsAt: z.string().min(1),
    endsAt: z.string().min(1),
    hall: z.string().min(1),
    totalSeats: z.string().min(1),
});

export type CreateShowtimeFormData = z.infer<typeof createShowtimeSchema>