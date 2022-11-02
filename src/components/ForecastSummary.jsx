import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import "../styles/ForecastSummary.css";

function ForecastSummary({ forecast, handleForecastSelect }) {
  const { key, dateOrTime, weather, icon, temp } = forecast;

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <p className="forecast-summary__dateOrTime">{dateOrTime}</p>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {icon ? <WeatherIcon name="owm" iconId={icon} /> : "No Data"}
      </div>
      <p className="forecast-summary__description">{weather}</p>
      <p className="forecast-summary__temp">{temp ? `${temp}°C` : null}</p>
      {handleForecastSelect && (
        <button type="button" onClick={() => handleForecastSelect(key)}>
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
