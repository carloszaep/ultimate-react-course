'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'


function SearchOrder() {
    const [query, setQuery] = useState('')
    const router = useRouter()

    function handlerSummit(e) {
        e.preventDefault()
        if (!query) return
        router.push(`/order/${query}`)
    }

    return (
        <form onSubmit={handlerSummit}>
            <input className='rounded-full transition-all focus:ring-opacity-50 
            focus:outline-none focus:ring focus:ring-yellow-500 duration-300
             sm:focus:w-72 px-4 py-2 text-sm bg-yellow-100
              placeholder:text-stone-400 w-40 sm:w-64' placeholder='Search order #'
                value={query} onChange={(e) => setQuery(e.target.value)} />
        </form>
    );
}

export default SearchOrder;