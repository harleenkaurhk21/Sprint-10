import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";

import "../assets/styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>🎬 MovieFlix</h1>
      </div>

      <SearchBar />

      <ThemeToggle />
    </header>
  );
}

export default Header;
