'use client' // Error components must be Client Components
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>{error.message}</p>
            <Link href={'/'}>&larr; Go back</Link>
        </div>
    );
}