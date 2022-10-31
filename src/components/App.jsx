import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";

function App({ location }) {
  const { city, country } = location;

  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={city} country={country} />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
