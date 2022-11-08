import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";

function SearchForm({ handleSearch }) {
  const searchRef = useRef(null);
  const [focus, setFocus] = useState(false);

  const handleSubmit = () => {
    handleSearch(searchRef.current.value);
    searchRef.current.value = "";
  };

  const keyDownHandler = (e) => {
    if (focus && e.code === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => window.removeEventListener("keydown", keyDownHandler);
  });

  return (
    <div className="search-form">
      <input
        type="text"
        ref={searchRef}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <button type="button" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchForm;
