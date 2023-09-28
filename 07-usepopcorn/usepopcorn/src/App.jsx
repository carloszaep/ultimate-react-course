import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import WatchedBox from "./WatchedBox";



const API_KEY = 'edcee4cf'
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`


export default function App() {
  const [movies, setMovies] = useState([])
  const [watched, setWatched] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null)


  function handlerSelectId(id) {
    setSelectedId(id)
  }

  function handlerCloseMovie() {
    setSelectedId(null)
  }


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true)
        setError('')
        const respond = await fetch(API_URL + query)
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

  }, [query])


  return (
    <>
      <header>
        <Navbar query={query} setQuery={setQuery} />
      </header>

      <main className="main">
        <section>
          {isLoading && <p className="loader">Loading...</p>}
          {!isLoading && !error && movies.length !== 0 && <SearchBox movies={movies} onSelect={handlerSelectId} />}
          {movies.length === 0 && <p>Please search for movies</p>}
          {error && <p>{error}</p>}
        </section>
        <section>
          {selectedId ? <MovieDetails selectedId={selectedId} onClose={handlerCloseMovie} /> : <WatchedBox watched={watched} />}
        </section>

      </main>

    </>
  );
}

function MovieDetails({ selectedId, onClose }) {
  return <div className="details" >
    <button className="btn" onClick={onClose}>&larr;</button>
    {selectedId}
  </div>
}
