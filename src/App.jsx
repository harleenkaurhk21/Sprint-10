import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieGrid from "./components/MovieGrid";
import Loader from "./components/Loader";

import { getPopularMovies } from "./services/tmdb";

import "./assets/styles/App.css";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Header />

      <div className="container">
        <Sidebar />

        {loading ? (
          <Loader />
        ) : (
          <MovieGrid movies={movies} />
        )}
      </div>
    </div>
  );
}

export default App;