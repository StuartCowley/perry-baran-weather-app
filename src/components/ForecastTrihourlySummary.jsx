import React, { useContext } from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import UnitContext from "../context/UnitContext";
import "../styles/ForecastTrihourlySummary.css";
import getUnits from "../helpers/getUnits";

function ForecastTrihourlySummary({ time, weather, icon, temp }) {
  const selectedUnits = useContext(UnitContext);
  const { tempUnits } = getUnits(selectedUnits);
  const description = weather ? weather.split(" ") : [weather];

  return (
    <div
      className="forecast-trihourly-summary"
      data-testid="forecast-trihourly-summary"
    >
      <p className="forecast-trihourly-summary__time">{time}</p>
      {!icon ? (
        <p className="forecast-trihourly-summary__no-data">
          No <br />
          Data
        </p>
      ) : (
        <>
          <div
            className="forecast-trihourly-summary__icon"
            data-testid="forecast-icon"
          >
            <WeatherIcon name="owm" iconId={icon} />{" "}
          </div>
          <div className="forecast-trihourly-summary__description">
            {description.length === 1 ? (
              <p>{description[0]}</p>
            ) : (
              <p>
                {description[0]} <br />
                {description[1]}
              </p>
            )}
          </div>
          <p className="forecast-trihourly-summary__temp">
            {temp.toFixed(1)}
            {tempUnits}
          </p>
        </>
      )}
    </div>
  );
}

ForecastTrihourlySummary.defaultProps = {
  icon: null,
  temp: null,
  weather: null,
};

ForecastTrihourlySummary.propTypes = {
  time: PropTypes.string.isRequired,
  icon: PropTypes.string,
  temp: PropTypes.number,
  weather: PropTypes.string,
};

export default ForecastTrihourlySummary;
