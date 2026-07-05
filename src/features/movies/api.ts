import { api } from '@/lib/axios';
import type { Movie, Genre } from './types.ts';

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