import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/DropDownMenu.css";
import menu from "../images/menu.png";
import OptionsMenu from "./OptionsMenu";

function DropDownMenu({ handleSearch }) {
  const [visible, setVisible] = useState(false);

  const handleHamburger = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <button
        type="button"
        className="drop-down-menu-button"
        onClick={handleHamburger}
      >
        <img src={menu} alt="hamburger menu" />
      </button>
      <div
        className={`drop-down-menu ${!visible && "drop-down-menu__hidden"}`}
        data-testid="drop-down-menu"
      >
        <OptionsMenu handleSearch={handleSearch} setVisible={setVisible} />
      </div>
    </>
  );
}

DropDownMenu.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default DropDownMenu;
