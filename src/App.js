import { Route, Routes } from "react-router-dom";
import "./App.css";
import Buscador from "./components/Buscador/Buscador";
import Favorites from "./components/Favorites/Favorites";
import Movie from "./components/Movie/Movie";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div style={{ margin: "2%" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Buscador />} />
        <Route path="/favs" element={<Favorites />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
