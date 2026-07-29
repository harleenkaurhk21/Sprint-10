import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/filters/filterSlice";

import "../assets/styles/SearchBar.css";

function SearchBar() {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.filters.search);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;