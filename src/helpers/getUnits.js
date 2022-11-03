const getUnits = (units) => {
  return units === "imperial"
    ? {
        tempUnits: "°F",
        speedUnits: "mph",
      }
    : {
        tempUnits: "°C",
        speedUnits: "m/s",
      };
};

export default getUnits;
