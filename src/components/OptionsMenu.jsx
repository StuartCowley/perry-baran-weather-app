import React, { useState, useReducer } from "react";
import "../styles/OptionsMenu.css";
import { useUnitContext } from "../context/UnitContext";
import menu from "../images/menu.png";

const reducer = (state, { type, key, value }) => {
  switch (type) {
    case "update":
      return {
        ...state,
        [key]: value,
      };
    default:
      return state;
  }
};

function OptionsMenu() {
  const { units, setUnits } = useUnitContext();
  const [visisble, setVisible] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    units,
  });

  const updateState = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "update",
      key: name,
      value,
    });
  };

  const handleHamburger = () => {
    setVisible((prev) => !prev);
  };

  const handleApply = (e) => {
    e.preventDefault();
    setUnits(state.units);
    setVisible(false);
  };

  return (
    <>
      <button
        type="button"
        className="options-menu-button"
        onClick={handleHamburger}
        data-testid="hamburger-menu"
      >
        <img src={menu} alt="options menu" />
      </button>
      <div className="options-menu-form__container">
        <form className={`options-menu-form ${!visisble && "hidden"}`}>
          <h3>Options</h3>
          <div className="options-menu-form__units">
            <h4>Units:</h4>
            <label htmlFor="standardRadio" className="options-menu-form__label">
              Scientific
              <input
                className="options-menu-form__radio"
                id="standardRadio"
                type="radio"
                value="standard"
                name="units"
                checked={state.units === "standard"}
                onChange={updateState}
                data-testid="radio-scientific"
              />
            </label>
            <label htmlFor="metricRadio" className="options-menu-form__label">
              Metric
              <input
                className="options-menu-form__radio"
                id="metricRadio"
                type="radio"
                value="metric"
                name="units"
                checked={state.units === "metric"}
                onChange={updateState}
                data-testid="radio-metric"
              />
            </label>
            <label htmlFor="imperialRadio" className="options-menu-form__label">
              Imperial
              <input
                className="options-menu-form__radio"
                id="imperialRadio"
                type="radio"
                value="imperial"
                name="units"
                checked={state.units === "imperial"}
                onChange={updateState}
                data-testid="radio-imperial"
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

export default OptionsMenu;
