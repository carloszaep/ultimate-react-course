'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'


function SearchOrder() {
    const [query, setQuery] = useState('')
    const router = useRouter()

    function handlerSummit(e) {
        e.preventDefault()
        router.push(`/order/${query}`)
        if (!query) return
    }

    return (
        <form onSubmit={handlerSummit}>
            <input placeholder='Search order #' value={query} onChange={(e) => setQuery(e.target.value)} />
        </form>
    );
}

export default SearchOrder;