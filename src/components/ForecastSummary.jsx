import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";

function ForecastSummary({ forecast }) {
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
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">{maxTemp}&deg;C</div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.string,
    temperature: PropTypes.shape({
      max: PropTypes.number,
    }),
  }).isRequired,
};

export default ForecastSummary;
