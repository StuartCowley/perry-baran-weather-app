import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/OptionsMenu.css";
import useUnitContext from "../hooks/useUnitContext";
import menu from "../images/menu.png";

function OptionsMenu({ handleSearch }) {
  const { units, setUnits } = useUnitContext();
  const [visisble, setVisible] = useState(false);
  const [selectedUnits, setSelectedUnits] = useState(units);

  const handleHamburger = () => {
    setVisible((prev) => !prev);
  };

  const changeHandler = (e) => {
    setSelectedUnits(e.target.value);
  };

  const handleApply = (e) => {
    e.preventDefault();
    setUnits(selectedUnits);
    handleSearch(undefined, selectedUnits);
    setVisible(false);
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
        <form
          className={`options-menu-form ${!visisble && "hidden"}`}
          name="options menu form"
        >
          <h2>Options</h2>
          <div className="options-menu-form__units">
            <h3>Units:</h3>
            <label htmlFor="standardRadio" className="options-menu-form__label">
              Scientific
              <input
                id="standardRadio"
                type="radio"
                value="standard"
                name="units"
                checked={selectedUnits === "standard"}
                onChange={changeHandler}
              />
            </label>
            <label htmlFor="metricRadio" className="options-menu-form__label">
              Metric
              <input
                id="metricRadio"
                type="radio"
                value="metric"
                name="units"
                checked={selectedUnits === "metric"}
                onChange={changeHandler}
              />
            </label>
            <label htmlFor="imperialRadio" className="options-menu-form__label">
              Imperial
              <input
                id="imperialRadio"
                type="radio"
                value="imperial"
                name="units"
                checked={selectedUnits === "imperial"}
                onChange={changeHandler}
              />
            </label>
          </div>
          <button
            type="submit"
            onClick={handleApply}
            className="options-menu-form__apply"
          >
            Apply
          </button>
        </form>
      </div>
    </>
  );
}

OptionsMenu.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default OptionsMenu;
