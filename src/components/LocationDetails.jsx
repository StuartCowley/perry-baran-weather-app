import React from "react";
import "../styles/LocationDetails.css";
import PropTypes from "prop-types";

function LocationDetails({ location, errMessage }) {
  return <h1>{errMessage || location}</h1>;
}

LocationDetails.defaultProps = {
  errMessage: "",
};

LocationDetails.propTypes = {
  errMessage: PropTypes.string,
  location: PropTypes.string.isRequired,
};

export default LocationDetails;
