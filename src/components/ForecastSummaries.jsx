import React from "react";
import "../styles/ForecastSummaries.css";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

function ForecastSummaries(props) {
  const { forecasts } = props;

  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => {
        return <ForecastSummary forecast={forecast} key={forecast.date} />;
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
};

export default ForecastSummaries;
