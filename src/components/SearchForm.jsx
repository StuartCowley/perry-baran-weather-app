import React, { useRef, useContext } from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";
import UnitContext from "../context/UnitContext";
import { populateLocalStorage } from "../requests/localStorage";

function SearchForm({ handleSearch, setSelectedUnits }) {
  const searchRef = useRef(null);
  const selectedUnits = useContext(UnitContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchRef.current.value);
  };

  const handleRadioChange = (e) => {
    const units = e.target.id;
    setSelectedUnits(units);
    populateLocalStorage("units", units);
  };

  return (
    <form className="search-form">
      <div className="search-form__search">
        <input type="text" ref={searchRef} />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </div>
      <div className="search-form__radio">
        <h3>Units:</h3>
        <label htmlFor="metric" className="search-form__radio__label">
          Metric
          <input
            id="metric"
            type="radio"
            checked={selectedUnits === "metric"}
            onChange={handleRadioChange}
          />
        </label>
        <label htmlFor="imperial" className="search-form__radio__label">
          Imperial
          <input
            id="imperial"
            type="radio"
            checked={selectedUnits === "imperial"}
            onChange={handleRadioChange}
          />
        </label>
      </div>
    </form>
  );
}

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  setSelectedUnits: PropTypes.func.isRequired,
};

export default SearchForm;
