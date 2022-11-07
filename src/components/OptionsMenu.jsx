import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import "../styles/OptionsMenu.css";
import UnitContext from "../context/UnitContext";
import menu from "../images/menu.png";
import { populateLocalStorage } from "../requests/localStorage";

function OptionsMenu({ setSelectedUnits }) {
  const selectedUnits = useContext(UnitContext);
  const [visisble, setVisible] = useState(false);
  const [radioUnits, setRadioUnits] = useState(selectedUnits);

  const handleRadioChange = (e) => {
    const units = e.target.value;
    setRadioUnits(units);
  };

  const handleHamburger = () => {
    setVisible((prev) => !prev);
  };

  const handleApply = (e) => {
    e.preventDefault();
    setSelectedUnits(radioUnits);
    setVisible(false);
    populateLocalStorage("units", radioUnits);
  };

  return (
    <>
      <button
        type="button"
        className="options-menu-button"
        onClick={handleHamburger}
      >
        <img src={menu} alt="options menu" />
      </button>
      <div className="options-menu-form__container">
        <form className={`options-menu-form ${!visisble && "hidden"}`}>
          <h3>Options</h3>
          <div className="options-menu-form__units">
            <h4>Units:</h4>
            <label htmlFor="metricRadio" className="options-menu-form__label">
              Metric
              <input
                className="options-menu-form__radio"
                id="metricRadio"
                type="radio"
                value="metric"
                name="metric"
                checked={radioUnits === "metric"}
                onChange={handleRadioChange}
              />
            </label>
            <label htmlFor="imperialRadio" className="options-menu-form__label">
              Imperial
              <input
                className="options-menu-form__radio"
                id="imperialRadio"
                type="radio"
                value="imperial"
                name="imperial"
                checked={radioUnits === "imperial"}
                onChange={handleRadioChange}
              />
            </label>
          </div>
          <button type="submit" onClick={handleApply}>
            Apply
          </button>
        </form>
      </div>
    </>
  );
}

OptionsMenu.propTypes = {
  setSelectedUnits: PropTypes.func.isRequired,
};

export default OptionsMenu;