import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import WatchedBox from "./WatchedBox";
import StartRating from "./StartRating";


const API_KEY = 'edcee4cf'
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`


export default function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null)
  const [isInTheList, setIsInTheList] = useState(false)
  const [watched, setWatched] = useState(function () {
    const storedValue = localStorage.getItem('watched')
    if (!storedValue) return []
    return JSON.parse(storedValue)
  })



  function handlerSelectId(id) {
    setSelectedId(id)
    if (watched.some(m => m.imdbID === id)) {
      setIsInTheList(true)
    }
  }

  function handlerCloseMovie() {
    setSelectedId(null)
    setIsInTheList(false)
  }



  function handlerAddWatched(movie) {
    setWatched(watched => [...watched, movie])
  }


  function handlerDeleteWatched(id) {
    setWatched((watched) => watched.filter(movie => movie.imdbID !== id))
  }

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched))
  }, [watched])


  useEffect(() => {
    const data = localStorage.getItem('watched')
    const dataParse = JSON.parse(data)

    if (dataParse.length >= 1) setWatched(dataParse)
  }, [])



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




  return (
    <>
      <header>
        <Navbar query={query} setQuery={setQuery} results={movies.length} />
      </header>

      <main className="main">
        <section className="box">
          {isLoading && <p className="loader">Loading...</p>}
          {!isLoading && !error && movies.length !== 0 && <SearchBox movies={movies}
            onSelect={handlerSelectId} />}
          {movies.length === 0 && <p>Please search for movies</p>}
          {error && <p>{error}</p>}
        </section>
        <section className="box">
          {selectedId ? <MovieDetails isInTheList={isInTheList} selectedId={selectedId} onClose={handlerCloseMovie}
            onAddWatched={handlerAddWatched} /> : <WatchedBox watched={watched} onDelete={handlerDeleteWatched} />}
        </section>

      </main>

    </>
  );
}

function MovieDetails({ selectedId, onClose, onAddWatched, isInTheList }) {
  const [movie, setMovie] = useState({})
  const [userRating, setUserRating] = useState(0)


  const { Title: title, Year: year,
    Poster: poster, Runtime: runtime,
    imdbRating, Plot: plot, Released: released,
    Actors: actors, Director: director, Genre: genre } = movie

  useEffect(() => {
    function callback(e) {
      if (e.code === "Escape") {
        onClose()
      }
    }
    document.addEventListener('keydown', callback)

    return () => {
      document.removeEventListener('keydown', callback)
    }
  }, [])


  useEffect(() => {
    async function getMovieDetails() {
      try {
        const respond = await fetch(API_URL + "i=" + selectedId)
        if (!respond.ok) throw new Error('can not fetch data')
        const data = await respond.json()
        if (data.Response === 'False') throw new Error(data.Error)

        setMovie(data)


      } catch (error) {
        console.log(error.message)

      }

    }
    getMovieDetails()
  }, [selectedId])

  function handleAdd(movie) {
    const newMovie = {
      imdbID: selectedId, title, year, poster,
      imdbRating: Number(imdbRating), runtime: Number(runtime.split(' ').at(0)), userRating
    }
    onAddWatched(newMovie)
    onClose()
  }



  return <div className="details" >
    <header>
      <button className="btn-back" onClick={onClose}>&larr;</button>
      <img src={poster} alt="poster" />
      <div className="details-overview">
        <h2>{title}</h2>
        <p>
          {released} &bull; {runtime}
        </p>
        <p>
          {genre}
        </p>
        <p>
          <span>
            ⭐
          </span>
          {imdbRating} IMDB rating
        </p>
      </div>

    </header>
    <section>
      <div className="rating">
        <StartRating size={24} maxRating={10} onSetRatingHandler={setUserRating} />
        {isInTheList ? <p>This movie is already in your list</p> : <button className="btn-add" onClick={handleAdd}>Add to list</button>}

      </div>
      <p>
        <em>{plot}</em>
      </p>
      <p>Starring {actors}</p>
      <p>Directed bt {director}</p>

    </section>

  </div>
}
