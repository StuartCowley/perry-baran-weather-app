import React, { useRef } from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";

function SearchForm({ handleSearch, placeholder }) {
  const searchRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchRef.current.value);
    searchRef.current.value = "";
  };

  const handleKeyDown = (e) => e.code === "Enter" && handleSubmit(e);

  return (
    <div className="search-form">
      <input
        type="text"
        ref={searchRef}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

SearchForm.defaultProps = {
  placeholder: "",
};

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchForm;
