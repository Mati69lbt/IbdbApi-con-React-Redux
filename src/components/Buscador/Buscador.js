import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add_Movie_Favorite, getMovies } from "../actions";

const Buscador = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(state.title);
  };

  return (
    <div>
      <h2>Buscador</h2>
      <form className="form.container" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label className="label" htmlFor="title">
            Película
          </label>
          <input
            type="text"
            id="title"
            autoComplete="off"
            value={title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit" onClick={() => dispatch(getMovies(title))}>
          Buscar
        </button>
      </form>
      <ul>
        {state.moviesLoaded &&
          state.moviesLoaded.map((movie) => (
            <div key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
              <button
                onClick={() =>
                  dispatch(
                    add_Movie_Favorite({
                      title: movie.Title,
                      id: movie.imdbID,
                    })
                  )
                }
              >
                Favs
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Buscador;
