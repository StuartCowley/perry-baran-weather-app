import React, { useEffect, useState } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastDailySummaries from "./ForecastDailySummaries";
import TopBar from "./TopBar";
import ForecastMoreDetails from "./ForecastMoreDetails";
import getForecast from "../requests/getForecast";
import UnitContext from "../context/UnitContext";
import {
  getLocalStorage,
  populateLocalStorage,
} from "../requests/localStorage";

function App() {
  const [location, setLocation] = useState({ city: "", country: "" });
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const [errMessage, setErrMessage] = useState("");
  const [selectedUnits, setSelectedUnits] = useState(
    getLocalStorage("units") || "metric"
  );

  const selectedForecast = forecasts.find(
    (forecast) => forecast[0].dateTime === selectedDate
  );

  const handleCitySearch = (city, units) => {
    getForecast(
      setLocation,
      setForecasts,
      setSelectedDate,
      setErrMessage,
      city,
      units
    );
  };

  useEffect(() => {
    const city = getLocalStorage("location") || "London, GB";
    populateLocalStorage("units", selectedUnits);

    handleCitySearch(city, selectedUnits);
  }, [selectedUnits]);

  return (
    <div className="weather-app">
      <UnitContext.Provider value={selectedUnits}>
        <TopBar
          handleSearch={handleCitySearch}
          setSelectedUnits={setSelectedUnits}
        />
        <LocationDetails location={location} errMessage={errMessage} />
        {!errMessage && (
          <>
            <ForecastDailySummaries
              forecasts={forecasts}
              handleForecastSelect={setSelectedDate}
            />
            {selectedForecast && (
              <ForecastMoreDetails forecasts={selectedForecast} />
            )}
          </>
        )}
      </UnitContext.Provider>
    </div>
  );
}

export default App;
