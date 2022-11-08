import React, {
  createContext,
  useEffect,
  useState,
  useMemo,
  useContext,
} from "react";
import PropTypes from "prop-types";
import {
  getLocalStorage,
  populateLocalStorage,
} from "../requests/localStorage";

const initialValue = getLocalStorage("units") || "metric";

const UnitContext = createContext({
  units: "",
  setUnits: () => {},
});

const useUnitContext = () => useContext(UnitContext);

function UnitProvider({ children }) {
  const [units, setUnits] = useState(initialValue);

  useEffect(() => {
    populateLocalStorage("units", units);
  }, [units]);

  const unitsMemo = useMemo(() => {
    return {
      units,
      setUnits,
    };
  }, [units]);

  return (
    <UnitContext.Provider value={unitsMemo}>{children}</UnitContext.Provider>
  );
}

UnitProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export { UnitProvider, useUnitContext };
