import {
  ADD_MOVIE_FAVORITE,
  GET_MOVIES,
  GET_MOVIES_DETAIL,
  REMOVE_MOVIE_FAVORITE,
} from "../types";

export function getMovies(title) {
  return async function (dispatch) {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=6d022ee2&s=${title}`
    );
    const movies = await response.json();
    return dispatch({ type: GET_MOVIES, payload: movies.Search });
  };
}

export const clearMovieDetails = () => ({
  type: "CLEAR_MOVIE_DETAILS",
});

export function get_Movie_Details(id) {
  var aa = Object.values(id);
  return async function (dispatch) {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=6d022ee2&i=${aa}`
    );
    const detail = await response.json();
    return dispatch({ type: GET_MOVIES_DETAIL, payload: detail });
  };
}

export const add_Movie_Favorite = (title) => ({
  type: ADD_MOVIE_FAVORITE,
  payload: title,
});
export const remove_Movie_Favorite = (id) => ({
  type: REMOVE_MOVIE_FAVORITE,
  payload: id,
});
