import React from "react";
import PropTypes from "prop-types";

function LocationDetails({ location, errMessage }) {
  const { city, country } = location;

  return <h1>{errMessage || `${city}, ${country}`}</h1>;
}

LocationDetails.defaultProps = {
  errMessage: "",
};

LocationDetails.propTypes = {
  errMessage: PropTypes.string,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default LocationDetails;
