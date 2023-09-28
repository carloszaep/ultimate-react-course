import { useState } from "react";



const SearchBox = ({ movies, onSelect }) => {
    const [isOpen, setIsOpen] = useState(true);


    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen((open) => !open)}
            >
                {isOpen ? "–" : "+"}
            </button>
            {isOpen && (
                <ul className="list list-movies">
                    {movies?.map((movie) => (
                        <li key={movie.imdbID} onClick={() => onSelect(movie.imdbID)}>
                            <img src={movie.Poster} alt={`${movie.Title} poster`} />
                            <h3>{movie.Title}</h3>
                            <div>
                                <p>
                                    <span>🗓</span>
                                    <span>{movie.Year}</span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};

export default SearchBox;