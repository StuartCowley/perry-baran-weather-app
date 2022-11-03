import React, { useContext } from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import "../styles/ForecastSummary.css";
import UnitContext from "../context/UnitContext";
import getUnits from "../helpers/getUnits";

function ForecastSummary({ forecast, handleForecastSelect }) {
  const { key, dateOrTime, weather, icon, temp } = forecast;
  const selectedUnits = useContext(UnitContext);
  const { tempUnits } = getUnits(selectedUnits);
  const description = weather ? weather.split(" ") : [weather];

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <p className="forecast-summary__dateOrTime">{dateOrTime}</p>
      {icon ? (
        <div className="forecast-summary__icon" data-testid="forecast-icon">
          <WeatherIcon name="owm" iconId={icon} />{" "}
        </div>
      ) : (
        <p className="forecast-summary__no-data">
          No <br />
          Data
        </p>
      )}
      <div className="forecast-summary__description">
        {description.length === 1 ? (
          <p>{description[0]}</p>
        ) : (
          <p>
            {description[0]} <br />
            {description[1]}
          </p>
        )}
      </div>
      <p className="forecast-summary__temp">
        {temp ? `${temp}${tempUnits}` : null}
      </p>
      {handleForecastSelect && (
        <button
          type="button"
          onClick={() => handleForecastSelect(key)}
          className="forecast-summary__more-details"
        >
          More Details
        </button>
      )}
    </div>
  );
}

ForecastSummary.defaultProps = {
  handleForecastSelect: undefined,
};

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dateOrTime: PropTypes.string,
    weather: PropTypes.string,
    icon: PropTypes.string,
    temp: PropTypes.string,
  }).isRequired,
  handleForecastSelect: PropTypes.func,
};

export default ForecastSummary;
