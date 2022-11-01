import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";

function ForecastSummary({ forecast, handleForecastSelect }) {
  const {
    date,
    description,
    icon,
    temperature: { max: maxTemp },
  } = forecast;

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon.toString()} />
      </div>
      <div className="forecast-summary__temperature">{maxTemp}&deg;C</div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" onClick={() => handleForecastSelect(date)}>
        More Details
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
    }),
  }).isRequired,
  handleForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
