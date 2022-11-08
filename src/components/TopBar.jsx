import React from "react";
import PropTypes from "prop-types";
import "../styles/TopBar.css";
import SearchForm from "./SearchForm";
import OptionsMenu from "./OptionsMenu";

function TopBar({ handleSearch }) {
  return (
    <div className="top-bar">
      <SearchForm handleSearch={handleSearch} />
      <OptionsMenu />
    </div>
  );
}

TopBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default TopBar;
