/* eslint-disable react/prop-types */
import { useState } from "react";
import { useMovies } from "./hooks/useMovies";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import WatchedBox from "./WatchedBox";
import MovieDetails from "./movieDetails";
import { useLocalStore } from "./hooks/useLocalStore";


export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null)
  const [isInTheList, setIsInTheList] = useState(false)
  const { movies, error, isLoading } = useMovies(query)
  const [watched, setWatched] = useLocalStore([], 'watched')


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

