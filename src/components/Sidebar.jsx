import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setRating,
  resetFilters,
} from "../features/filters/filterSlice";

function Sidebar() {
  const dispatch = useDispatch();

  const { category, rating } = useSelector(
    (state) => state.filters
  );

  return (
    <aside className="sidebar">
      <h2>Filters</h2>

      <div className="filter-group">
        <label>Category</label>

        <select
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Animation">Animation</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Minimum Rating</label>

        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={rating}
          onChange={(e) =>
            dispatch(setRating(Number(e.target.value)))
          }
        />

        <p>{rating} / 10</p>
      </div>

      <button
        className="reset-btn"
        onClick={() => dispatch(resetFilters())}
      >
        Reset Filters
      </button>
    </aside>
  );
}

export default Sidebar;