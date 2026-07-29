import { useMemo } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

import "../assets/styles/MovieGrid.css";

function MovieGrid({ movies = [] }) {
  const filters = useSelector((state) => state.filters);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch =
        movie.title
          .toLowerCase()
          .includes(filters.search.toLowerCase());

      const matchesRating =
        movie.vote_average >= filters.rating;

      // Category filtering can be added later using TMDB genre_ids
      return matchesSearch && matchesRating;
    });
  }, [movies, filters]);

  if (filteredMovies.length === 0) {
    return (
      <div className="movie-grid">
        <h2>No movies found.</h2>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {filteredMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}

export default MovieGrid;