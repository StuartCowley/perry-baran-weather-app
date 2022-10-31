import React from "react";
import "../styles/ForecastDetails.css";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const {
    date,
    humidity,
    temperature: { max, min },
    wind: { speed, direction },
  } = forecast;

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__max-temp">
        <span>Max Temperature:</span> {max}&deg;C
      </div>
      <div className="forecast-details__min-temp">
        <span>Min Temperature:</span> {min}&deg;C
      </div>
      <div className="forecast-details__humidity">
        <span>Humidity:</span> {humidity}%
      </div>
      <div className="forecast-details__wind">
        <span>Wind:</span> {speed}mph {direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};

export default ForecastDetails;
