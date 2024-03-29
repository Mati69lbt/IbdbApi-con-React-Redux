import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_Movie_Details } from "../actions";
import "./movie.css";
const Movie = () => {
  const movieID = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const {
    Title,
    imdbRating,
    imdbVotes,
    Runtime,
    Poster,
    Plot,
    Director,
    Actors,
    Genre,
    Language,
    Released,
    Country,
  } = state.movieDetail;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(get_Movie_Details(movieID))
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });

    return () => {
      dispatch({ type: "CLEAR_MOVIE_DETAILS" });
    };
  }, [dispatch, movieID]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-text">
          <b>Loading...</b>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="titulo">
        <h1>Movie:</h1>
        <h2>{Title}</h2>
      </div>
      <div className="flex-container">
        <div className="flex-item">
          <ul className="listado">
            <li>
              <b>Raiting:</b>
              <i>{imdbRating}</i>
            </li>
            <li>
              <b>Votos:</b> <i>{imdbVotes} </i>
            </li>
            <li>
              <b>Duración:</b>
              <i>{Runtime}</i>
            </li>
            <li>
              <b>Estreno:</b>
              <i>{Released}</i>
            </li>
            <li className="liplot">
              <i>{Plot} </i>
            </li>
            <li>
              <b>Director:</b>
              <span>{Director} </span>
            </li>
            <li>
              <b>Actores:</b>
              <span>{Actors}</span>
            </li>
            <li>
              <b>Género:</b>
              <span>{Genre}</span>
            </li>
            <li>
              <b>Pais:</b>
              <span>{Country}</span>
            </li>
            <li>
              <b>Idioma:</b>
              <span>{Language}</span>
            </li>
          </ul>
        </div>
        <div className="flex-item">
          <img src={Poster} alt={Title} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
