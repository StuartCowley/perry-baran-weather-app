import React from "react";
import PropTypes from "prop-types";

function ForecastBreakdown(props) {
  const { temp, minTemp, maxTemp, humidity, windSpeed } = props;

  return (
    <div className="forecast-breakdown">
      <p className="forecast-breakdown__temp">
        <span>Temperture: </span>
        {temp}°C
      </p>
      <p className="forecast-breakdown__min-temp">
        <span>Minimum Temperature: </span>
        {minTemp}°C
      </p>
      <p className="forecast-breakdown__max-temp">
        <span>Maximum Temperature: </span>
        {maxTemp}°C
      </p>
      <p className="forecast-breakdown__humidity">
        <span>Humidity: </span>
        {humidity}%
      </p>
      <p className="forecast-breakdown__wind-speed">
        <span>Wind Speed: </span>
        {windSpeed}km/h
      </p>
    </div>
  );
}

ForecastBreakdown.propTypes = {
  temp: PropTypes.string.isRequired,
  minTemp: PropTypes.string.isRequired,
  maxTemp: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  windSpeed: PropTypes.string.isRequired,
};

export default ForecastBreakdown;
