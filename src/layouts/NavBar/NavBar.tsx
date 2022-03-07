import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import netflixLogo from "../../assets/netflix-logo.png";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function NavBar() {
  const [search, setSearch] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const navigate = useNavigate();
  const searchToggle = () => {
    setIsSearch(!isSearch);
    setSearch("");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="my-nav-bar">
      <span onClick={() => navigate("/")}>
        <img
          style={{ cursor: "pointer" }}
          src={netflixLogo}
          alt="Netflix Logo"
        />
      </span>
      <ul>
        <li>
          <span onClick={() => navigate("/")}>Home</span>
        </li>
        <li>
          <span onClick={() => navigate("/mylist")}>My List</span>
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
