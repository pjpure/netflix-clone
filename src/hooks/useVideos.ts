import {
    useQuery,
} from 'react-query'

type Video = {
    id: string,
    type: string,
    title: string,
    genres: string,
    img: string,
    video: string,
}

const baseUrl = 'https://netflix-clone-backend-pjpure.herokuapp.com'

export const useMovies = () => {
    return useQuery<Video[], { message: string }>('movies', () =>
        fetch(`${baseUrl}/videos/?type=movie`).then((res) => res.json()).then((data) => data),
    )
}

export const useSeries = () => {
    return useQuery<Video[], { message: string }>('series', () =>
        fetch(`${baseUrl}/videos/?type=series`).then((res) => res.json()).then((data) => data),
    )
}

export const useAnimes = () => {
    return useQuery<Video[], { message: string }>('animes', () =>
        fetch(`${baseUrl}/videos/?type=anime`).then((res) => res.json()).then((data) => data),
    )
}

export const useWatch = (id: string | undefined) => {
    return useQuery<Video, { message: string }>(['watch', id], () =>
        fetch(`${baseUrl}/videos/${id}`).then((res) => res.json()).then((data) => data),
    )
}

