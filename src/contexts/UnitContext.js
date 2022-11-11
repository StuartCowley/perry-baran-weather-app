import React, { createContext, useMemo } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";

const UnitContext = createContext({
  units: "metric",
  setUnits: () => {},
});

function UnitProvider({ children }) {
  const [units, setUnits] = useLocalStorage("units", "metric");

  const unitsMemo = useMemo(() => {
    return {
      units,
      setUnits,
    };
  }, [setUnits, units]);

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

export { UnitProvider, UnitContext };
