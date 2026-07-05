export type Movie = {
    id: string;
    title: string;
    description: string;
    posterUrl: string | null;
    durationMinutes: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export type Genre = {
    id: string
    name: string
    slug: string
}