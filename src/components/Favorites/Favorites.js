import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove_Movie_Favorite } from "../actions";

const Favorites = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state.moviesFavourites);
  return (
    <div>
      <h2>Peliculas Favoritas</h2>
      <ul>
        {state.moviesFavourites &&
          state.moviesFavourites.map((movie) => (
            <div key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                <span>{movie.Title}</span>
              </Link>
              <button
                onClick={() => dispatch(remove_Movie_Favorite(movie.imdbID))}
              >
                X
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Favorites;
