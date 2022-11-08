const getUnits = (units) => {
  let selectedUnits;
  if (typeof units === "string") selectedUnits = units.toLowerCase();
  switch (selectedUnits) {
    case "imperial":
      return {
        tempUnits: "°F",
        speedUnits: "mph",
      };
    case "metric":
      return {
        tempUnits: "°C",
        speedUnits: "m/s",
      };
    case "standard":
    default:
      return {
        tempUnits: "K",
        speedUnits: "m/s",
      };
  }
};

export default getUnits;
