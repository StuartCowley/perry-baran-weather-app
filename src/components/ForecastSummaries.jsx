import React from "react";
import "../styles/ForecastSummaries.css";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

function ForecastSummaries(props) {
  const { forecasts, handleForecastSelect } = props;

  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => {
        return (
          <ForecastSummary
            forecast={forecast}
            handleForecastSelect={handleForecastSelect}
            key={forecast.key}
          />
        );
      })}
    </div>
  );
}

ForecastSummaries.defaultProps = {
  handleForecastSelect: undefined,
};

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      dateOrTime: PropTypes.string,
      weather: PropTypes.string,
      icon: PropTypes.string,
      temp: PropTypes.string,
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  handleForecastSelect: PropTypes.func,
};

export default ForecastSummaries;
