import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";

function ThemeToggle() {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      className="theme-btn"
      onClick={() => dispatch(toggleTheme())}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;