import React, { useContext } from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import getUnits from "../helpers/getUnits";
import UnitContext from "../context/UnitContext";
import "../styles/ForecastBreakdown.css";

function ForecastBreakdown(props) {
  const { icon, temp, minTemp, maxTemp, humidity, windSpeed, weather } = props;
  const selectedUnits = useContext(UnitContext);
  const { tempUnits, speedUnits } = getUnits(selectedUnits);

  return (
    <div className="forecast-breakdown">
      <div className="forecast-breakdown__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <p className="forecast-breakdown__weather">{weather}</p>
      <p className="forecast-breakdown__temp">
        <span>Temperture: </span>
        {temp}
        {tempUnits}
      </p>
      <p className="forecast-breakdown__min-temp">
        <span>Minimum Temperature: </span>
        {minTemp}
        {tempUnits}
      </p>
      <p className="forecast-breakdown__max-temp">
        <span>Maximum Temperature: </span>
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
