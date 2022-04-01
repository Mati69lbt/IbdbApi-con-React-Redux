import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_Movie_Details } from "../actions";
import "./movie.css";
const Movie = () => {
  const movieID = useParams();
  console.log(movieID);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state.movieDetail);
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

  useEffect(() => {
    try {
      dispatch(get_Movie_Details(movieID));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, movieID]);

  return (
    <div>
      <h1>Movie</h1>
      <h2>{Title}</h2>
      <ul>
        <li>
          Raiting: <i>{imdbRating}</i>
        </li>
        <li>
          Votos: <i>{imdbVotes} </i>
        </li>
        <li>
          Duracion: <i>{Runtime}</i>
        </li>
        <li>
          Estreno: <i>{Released}</i>
        </li>
      </ul>
      <p>{Plot}</p>
      <ul>
        <li>
          Director: <span>{Director} </span>
        </li>
        <li>
          Actores: <span>{Actors}</span>
        </li>
        <li>
          Género: <span>{Genre}</span>
        </li>
        <li>
          Pais: <span>{Country}</span>
        </li>
        <li>
          Idioma: <span>{Language}</span>
        </li>
      </ul>
      <img src={Poster} alt={Title} />
    </div>
  );
};

export default Movie;
