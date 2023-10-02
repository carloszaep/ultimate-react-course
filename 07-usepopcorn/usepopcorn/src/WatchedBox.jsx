import { useState } from "react";

const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);



const WatchedBox = ({ watched, onDelete }) => {
    const [isOpen, setIsOpen] = useState(true);

    const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
    const avgUserRating = average(watched.map((movie) => movie.userRating));
    const avgRuntime = average(watched.map((movie) => movie.runtime));

    return <div className="box">
        <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
        >
            {isOpen ? "–" : "+"}
        </button>
        {isOpen && (
            <>
                <div className="summary">
                    <h2>Movies you watched</h2>
                    <div>
                        <p>
                            <span>#️⃣</span>
                            <span>{watched.length} movies</span>
                        </p>
                        <p>
                            <span>⭐️</span>
                            <span>{avgImdbRating.toFixed(2)}</span>
                        </p>
                        <p>
                            <span>🌟</span>
                            <span>{avgUserRating.toFixed(2)}</span>
                        </p>
                        <p>
                            <span>⏳</span>
                            <span>{avgRuntime.toFixed(0)} min</span>
                        </p>
                    </div>
                </div>

                <ul className="list">
                    {watched.map((movie) => (
                        <li key={movie.imdbID}>
                            <img src={movie.poster} alt={`${movie.title} poster`} />
                            <h3>{movie.title}</h3>
                            <div>
                                <p>
                                    <span>⭐️</span>
                                    <span>{movie.imdbRating}</span>
                                </p>
                                <p>
                                    <span>🌟</span>
                                    <span>{movie.userRating}</span>
                                </p>
                                <p>
                                    <span>⏳</span>
                                    <span>{movie.runtime} min</span>
                                </p>
                                <button className="btn-delete" onClick={() => onDelete(movie.imdbID)}>X</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        )}
    </div>
};

export default WatchedBox;