import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove_Movie_Favorite } from "../actions";
import "./favorites.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state.moviesFavourites);
  return (
    <div>
      <div class="tituloo">
        <h2>Peliculas Favoritas</h2>
      </div>

      {state.moviesFavourites &&
        state.moviesFavourites.map((movie) => (
          <div key={movie.imdbID} className="fav">
            <article className="item">
              <img src={movie.Poster} alt={movie.title} height={120} />
            </article>
            <article>
              <Link to={`/movie/${movie.imdbID}`} className="item">
                <span>{movie.Title}</span>
              </Link>
            </article>
            <article>
              <button
                onClick={() => dispatch(remove_Movie_Favorite(movie.imdbID))}
                className="item"
              >
                X
              </button>
            </article>
          </div>
        ))}
    </div>
  );
};

export default Favorites;
