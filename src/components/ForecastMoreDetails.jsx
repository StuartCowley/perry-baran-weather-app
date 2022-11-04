import React from "react";
import "../styles/ForecastDetails.css";
import PropTypes from "prop-types";
import ForecastTrihourlySummaries from "./ForecastTrihourlySummaries";
import ForecastBreakdown from "./ForecastBreakdown";
import { calcMean, calcMax, calcMin } from "../helpers/calculateValues";

function ForecastMoreDetails({ forecasts }) {
  const [{ date, icon, weather }] = forecasts;
  const temp = calcMean(forecasts, "temp", 2);
  const minTemp = calcMin(forecasts, "minTemp", 2);
  const maxTemp = calcMax(forecasts, "maxTemp", 2);
  const humidity = calcMean(forecasts, "humidity", 2);
  const windSpeed = calcMean(forecasts, "windSpeed", 2);

  return (
    <div className="forecast-details">
      <h3>{date}</h3>
      <ForecastBreakdown
        icon={icon}
        temp={temp}
        minTemp={minTemp}
        maxTemp={maxTemp}
        humidity={humidity}
        windSpeed={windSpeed}
        weather={weather}
      />
      <ForecastTrihourlySummaries forecasts={forecasts} />
    </div>
  );
}

ForecastMoreDetails.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string,
      icon: PropTypes.string,
      temp: PropTypes.number,
      maxTemp: PropTypes.number,
      minTemp: PropTypes.number,
      humidity: PropTypes.number,
      weather: PropTypes.string,
      windSpeed: PropTypes.number,
    })
  ).isRequired,
};

export default ForecastMoreDetails;
