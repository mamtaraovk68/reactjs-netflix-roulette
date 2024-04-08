import React, { useEffect } from "react";
import { useState } from "react";
import "./search.css";

function SearchApp({ initialQuery, onSearch }) {
  const [query, setSearchQuery] = useState(initialQuery);

  // Need to remove
  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const handleSearch = () => {
    onSearch(query);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  const handleOnClick = () => {
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
