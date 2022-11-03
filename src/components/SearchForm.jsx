import React, { useRef, useContext } from "react";
import PropTypes from "prop-types";
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
      <input type="text" ref={searchRef} />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
      <div>
        <h3>Units</h3>
        <div>
          <label htmlFor="metric">
            Metric:
            <input
              id="metric"
              type="radio"
              checked={selectedUnits === "metric"}
              onChange={handleRadioChange}
            />
          </label>
          <label htmlFor="imperial">
            Imperial:
            <input
              id="imperial"
              type="radio"
              checked={selectedUnits === "imperial"}
              onChange={handleRadioChange}
            />
          </label>
        </div>
      </div>
    </form>
  );
}

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  setSelectedUnits: PropTypes.func.isRequired,
};

export default SearchForm;
