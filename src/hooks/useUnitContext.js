import { useContext } from "react";
import { UnitContext } from "../contexts/UnitContext";

const useUnitContext = () => useContext(UnitContext);

export default useUnitContext;
