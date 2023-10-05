/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import StartRating from "./StartRating"
import { API_URL } from "./config/config"
import { useKey } from "./hooks/useKey"


function MovieDetails({ selectedId, onClose, onAddWatched, isInTheList }) {
    const [movie, setMovie] = useState({})
    const [userRating, setUserRating] = useState(0)

    useKey(onClose, 'escape')


    const { Title: title, Year: year,
        Poster: poster, Runtime: runtime,
        imdbRating, Plot: plot, Released: released,
        Actors: actors, Director: director, Genre: genre } = movie



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

    function handleAdd() {
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


export default MovieDetails