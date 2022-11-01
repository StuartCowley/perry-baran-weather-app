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
            key={forecast.date}
          />
        );
      })}
    </div>
  );
}

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
      }),
    })
  ).isRequired,
  handleForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummaries;
