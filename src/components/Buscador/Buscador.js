import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add_Movie_Favorite, getMovies } from "../actions";
import "./buscador.css";

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
    setTitle("");
  };

  return (
    <div>
      <div className="inicio">
        <h2>Buscador: </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            id="title"
            autoComplete="off"
            value={title}
            onChange={(e) => handleChange(e)}
            type="search"
            placeholder=" Search"
            aria-label="Search"
          />
          <button type="submit" onClick={() => dispatch(getMovies(title))}>
            Buscar
          </button>
        </form>
      </div>

      <div className="imb">
        <article>Poster</article>
        <article>Pelicula</article>
        <article>Fav</article>
      </div>
      {state.moviesLoaded &&
        state.moviesLoaded.map((movie) => (
          <div key={movie.imdbID} className="imb">
            <article>
              <img src={movie.Poster} alt={movie.title} height={120} />
            </article>
            <article>
              {" "}
              <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
            </article>
            <article>
              {" "}
              <button
                className="nl"
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
            </article>
          </div>
        ))}
    </div>
  );
};

//   {/* <div class="login-html">
//   <h2>Buscador</h2>
//   <form class="form-inline my-2 my-lg-0" onSubmit={(e) => handleSubmit(e)}>
//     <div>
//       <input
//         id="title"
//         autoComplete="off"
//         value={title}
//         onChange={(e) => handleChange(e)}
//         class="form-control mr-sm-2"
//         type="search"
//         placeholder="Search"
//         aria-label="Search"
//       />
//     </div>
//     <button
//       class="btn btn-outline-success my-2 my-sm-0"
//       type="submit"
//       onClick={() => dispatch(getMovies(title))}
//     >
//       Buscar
//     </button>
//   </form>
//   <ul>
//     {state.moviesLoaded &&
//       state.moviesLoaded.map((movie) => (
//         <div key={movie.imdbID}>
//           <table
//             style={{
//               width: "80%",
//               border: "1px solid black",
//               textAlign: "center",
//             }}
//           >
//             <tr>
//               <th>Poster</th>
//               <th>Pelicula</th>
//               <th>Fav</th>
//             </tr>
//             <tr>
//               <td>
//                 <img src={movie.Poster} alt={movie.title} height={100} />
//               </td>
//               <td>
//                 {" "}
//                 <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
//               </td>
//               <td>
//                 {" "}
//                 <button
//                   onClick={() =>
//                     dispatch(
//                       add_Movie_Favorite({
//                         title: movie.Title,
//                         id: movie.imdbID,
//                       })
//                     )
//                   }
//                 >
//                   Favs
//                 </button>
//               </td>
//             </tr>
//           </table>
//         </div>
//       ))}
//   </ul>
// </div>; */ */}

export default Buscador;
