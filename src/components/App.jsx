import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

function App(props) {
  const {
    data: { forecasts, location },
  } = props;

  return (
    <div className="weather-app">
      <LocationDetails location={location} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

App.propTypes = {
  data: PropTypes.shape({
    forecasts: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.number,
        description: PropTypes.string,
        icon: PropTypes.string,
        temperature: PropTypes.shape({
          max: PropTypes.number,
          min: PropTypes.number,
        }),
      })
    ),
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }),
  }).isRequired,
};

export default App;
