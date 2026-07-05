import { api } from '@/lib/axios';
import type { Movie, Genre } from './types.ts';
import type { CreateMovieFormData } from "@/features/movies/schema.ts";

export const fetchMovies = async (): Promise<Movie[]> => {
    const { data } = await api.get<{ movies: Movie[] }>('/movies')
    return data.movies
}

export const fetchMovie = async (id: string): Promise<Movie> => {
    const { data } = await api.get<{ movie: Movie } >(`/movies/${id}`)
    return data.movie
}

export const fetchGenres = async () => {
    const { data } = await api.get<Genre[]>('/genres')
    return data
}

export const createMovie = async (movie: CreateMovieFormData) => {
    const { data } = await api.post('/movies', movie)
    return data
}