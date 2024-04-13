import React, { useEffect } from "react";
import { useState } from "react";
import "./search.css";

function SearchApp({ initialQuery, onSearch }) {
  const [query, setSearchQuery] = useState(initialQuery);

  const handleSearch = () => {
    onSearch(query);
  };

  const handleInputChange = (event) => {
    console.log("Hndale input change______________");
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (e) => {
    console.log("Hndale key press______________");
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  const handleOnClick = () => {
    console.log("Hndale on lcikc ______________");
    setSearchQuery("");
  };

  return (
    <div className="search-bar-container">
      <p className="header-element">Find your movie</p>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onKeyDown={handleKeyPress}
        onChange={handleInputChange}
        onClick={handleOnClick}
        value={query}
      />
      <span style={{ margin: "0 10px" }}></span>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchApp;
