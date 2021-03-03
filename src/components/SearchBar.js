import React from "react";
import "../styles/SearchBar.css";

function SearchBar() {
    return (
    <div className="input-group mb-3 row justify-content-md-center">
  <span className="input-group-text" className="SearchBtn">Search</span>
  <input type="text" className="form-control" aria-label="" className="SearchInput"></input>
</div>
    );
}

export default SearchBar;