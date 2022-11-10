import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import useUnits from "../helpers/getUnits";
import useUnitContext from "../hooks/useUnitContext";
import "../styles/ForecastBreakdown.css";

function ForecastBreakdown({
  icon,
  temp,
  minTemp,
  maxTemp,
  humidity,
  windSpeed,
  weather,
}) {
  const { units } = useUnitContext();
  const { tempUnits, speedUnits } = useUnits(units);

  return (
    <div className="forecast-breakdown">
      <div className="forecast-breakdown__right">
        <div className="forecast-breakdown__icon" data-testid="forecast-icon">
          <WeatherIcon name="owm" iconId={icon} />
        </div>
        <p className="forecast-breakdown__weather">{weather}</p>
      </div>
      <div className="forecast-breakdown__left">
        <p className="forecast-breakdown__temp">
          {temp}
          <span>{tempUnits}</span>
        </p>
        <p className="forecast-breakdown__min-temp">
          <span>Min: </span>
          {minTemp}
          {tempUnits}
        </p>
        <p className="forecast-breakdown__max-temp">
          <span>Max: </span>
          {maxTemp}
          {tempUnits}
        </p>
        <p className="forecast-breakdown__humidity">
          <span>Humidity: </span>
          {humidity}%
        </p>
        <p className="forecast-breakdown__wind-speed">
          <span>Wind Speed: </span>
          {windSpeed}
          {speedUnits}
        </p>
      </div>
    </div>
  );
}

ForecastBreakdown.propTypes = {
  icon: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  minTemp: PropTypes.string.isRequired,
  maxTemp: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  windSpeed: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
};

export default ForecastBreakdown;
