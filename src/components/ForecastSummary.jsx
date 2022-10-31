import React from "react";
import PropTypes from "prop-types";

function ForecastSummary({ forecast }) {
  const {
    date,
    description,
    icon,
    temperature: { max: maxTemp },
  } = forecast;

  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {icon}
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
