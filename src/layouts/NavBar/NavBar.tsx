import React, { useState } from "react";
import "./NavBar.css";
import netflixLogo from "../../assets/netflix-logo.png";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
function NavBar() {
  const [search, setSearch] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const searchToggle = () => {
    setIsSearch(!isSearch);
    setSearch("");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="my-nav-bar">
      <a href="/">
        <img
          style={{ cursor: "pointer" }}
          src={netflixLogo}
          alt="Netflix Logo"
        />
      </a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">My List</a>
        </li>
      </ul>
      <div
        className="my-nav-search"
        style={isSearch ? { border: "1px solid #ddd" } : {}}
      >
        <FaSearch size={20} onClick={searchToggle} />
        {isSearch && (
          <input
            value={search}
            onChange={handleSearchChange}
            type="text"
            placeholder="Title, people, genres"
          />
        )}
        {search.length > 0 && <ImCross size={15} onClick={searchToggle} />}
      </div>
    </div>
  );
}

export default NavBar;
