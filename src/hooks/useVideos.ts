import {
    useQuery,
} from 'react-query'

type Viedo = {
    id: string,
    type: string,
    title: string,
    genres: string,
    img: string,
    video: string,
}

const baseUrl = 'https://netflix-clone-db.pjpure.repl.co/videos/'

export const useMovies = () => {
    return useQuery<Viedo[], { message: string }>('movies', () =>
        fetch(`${baseUrl}?type=movie`).then((res) => res.json()).then((data) => data),
    )
}

export const useSeries = () => {
    return useQuery<Viedo[], { message: string }>('series', () =>
        fetch(`${baseUrl}?type=series`).then((res) => res.json()).then((data) => data),
    )
}

export const useAnimes = () => {
    return useQuery<Viedo[], { message: string }>('animes', () =>
        fetch(`${baseUrl}?type=anime`).then((res) => res.json()).then((data) => data),
    )
}

