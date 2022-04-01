import {
  ADD_MOVIE_FAVORITE,
  GET_MOVIES,
  GET_MOVIES_DETAIL,
  REMOVE_MOVIE_FAVORITE,
} from "../types";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload,
      };

    case GET_MOVIES_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };

    case ADD_MOVIE_FAVORITE:
      console.log(state.moviesLoaded);
      console.log(state.moviesFavourites);
      console.log(`action.payload: ${action.payload.id}`);

      let newMovie = state.moviesLoaded.find(
        (movie) => movie.imdbID === action.payload.id
      );
      console.log(newMovie);
      console.log(`newMovieimdbID: ${newMovie.imdbID}`);
      let movieInState = state.moviesFavourites.find(
        (movie) => movie.imdbID === newMovie.imdbID
      );
      console.log(movieInState);
      return movieInState
        ? alert("ya está la peli")
        : {
            ...state,
            moviesFavourites: [...state.moviesFavourites, newMovie],
          };
    case REMOVE_MOVIE_FAVORITE: {
      console.log(state.moviesFavourites);
      console.log(action.payload);
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
}
