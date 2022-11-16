import React, { useEffect, useState } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastDailySummaries from "./ForecastDailySummaries";
import TopBar from "./TopBar";
import ForecastMoreDetails from "./ForecastMoreDetails";
import getForecast from "../requests/getForecast";
import useUnitContext from "../hooks/useUnitContext";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [location, setLocation] = useLocalStorage("location", "London, GB");
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const [errMessage, setErrMessage] = useState("");
  const { units } = useUnitContext();

  const selectedForecast = forecasts.find(
    (forecast) => forecast[0].dateTime === selectedDate
  );

  const handleCitySearch = (locationInput, unitsInput) => {
    const selectedLocation = locationInput || location;
    const selectedUnits = unitsInput || units;

    getForecast(
      setLocation,
      setForecasts,
      setSelectedDate,
      setErrMessage,
      selectedLocation,
      selectedUnits
    );
  };

  useEffect(() => {
    handleCitySearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="weather-app">
      <TopBar handleSearch={handleCitySearch} location={location} />
      <LocationDetails location={location} errMessage={errMessage} />
      {!errMessage && (
        <>
          <ForecastDailySummaries
            forecasts={forecasts}
            handleForecastSelect={setSelectedDate}
            selectedDate={selectedDate}
          />
          {selectedForecast && (
            <ForecastMoreDetails forecasts={selectedForecast} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
