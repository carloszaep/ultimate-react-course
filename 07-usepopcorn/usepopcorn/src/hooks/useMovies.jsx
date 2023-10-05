import { useEffect, useState } from "react"
import { API_URL } from "../config/config"



export function useMovies(query) {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {

        const controller = new AbortController()
        const fetchMovies = async () => {
            try {
                setIsLoading(true)
                setError('')
                const respond = await fetch(API_URL + "s=" + query, { signal: controller.signal })
                if (!respond.ok) throw new Error('can not fetch data')
                const data = await respond.json()
                if (data.Response === 'False') throw new Error(data.Error)
                setMovies(data.Search)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                setError(error.message)
            }

        }

        if (query.length < 3) {
            setMovies([])
            setError('')
            return
        }

        fetchMovies()

        return function () {
            controller.abort()
        }

    }, [query])


    return { movies, error, isLoading }

}


