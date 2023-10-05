/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

const Navbar = ({ query, setQuery, results }) => {
    const search = useRef()

    useEffect(() => {
        search.current.focus()
    }, [])

    return (<nav className="nav-bar">
        <div className="logo">
            <span role="img">🍿</span>
            <h1>usePopcorn</h1>
        </div>
        <input
            ref={search}
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <p className="num-results">
            Found <strong>{results}</strong> results
        </p>
    </nav>)
};

export default Navbar;


