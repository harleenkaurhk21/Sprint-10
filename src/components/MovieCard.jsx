import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";

import { imageUrl } from "../services/tmdb";
import { getYear, formatRating } from "../utils/helpers";

import "../assets/styles/MovieCard.css";

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.movies
  );

  const isFavorite = favorites.some(
    (item) => item.id === movie.id
  );

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="movie-card">
      <img
        src={imageUrl(movie.poster_path)}
        alt={movie.title}
      />

      <div className="movie-card-content">
        <h3>{movie.title}</h3>

        <p>
          <strong>Release Year:</strong>{" "}
          {getYear(movie.release_date)}
        </p>

        <p>
          <strong>Rating:</strong> ⭐{" "}
          {formatRating(movie.vote_average)}
        </p>

        <button onClick={handleFavorite}>
          {isFavorite
            ? "Remove Favorite"
            : "Add Favorite"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;