export type Movie = {
    id: string
    title: string
    description: string
    posterUrl: string | null
    durationMinutes: number
    isActive: boolean
    createdAt: string
    updatedAt: string
    genreIds?: string[]
}

export type Genre = {
    id: string
    name: string
    slug: string
}

export type MovieWithGenre = {
    movies: Movie,
    movie_genre: {
        movieId: string;
        genreId: string;
    }
}