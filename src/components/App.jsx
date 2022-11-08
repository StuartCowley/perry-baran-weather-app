import React, { useEffect, useState } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastDailySummaries from "./ForecastDailySummaries";
import TopBar from "./TopBar";
import ForecastMoreDetails from "./ForecastMoreDetails";
import getForecast from "../requests/getForecast";
import { useUnitContext } from "../context/UnitContext";
import { getLocalStorage } from "../requests/localStorage";

function App() {
  const [location, setLocation] = useState({ city: "", country: "" });
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const [errMessage, setErrMessage] = useState("");
  const { units } = useUnitContext();

  const selectedForecast = forecasts.find(
    (forecast) => forecast[0].dateTime === selectedDate
  );

  const handleCitySearch = (city, selectedUnits) => {
    getForecast(
      setLocation,
      setForecasts,
      setSelectedDate,
      setErrMessage,
      city,
      selectedUnits
    );
  };

  useEffect(() => {
    const city = getLocalStorage("location") || "London, GB";

    handleCitySearch(city, units);
  }, [units]);

  return (
    <div className="weather-app">
      <TopBar handleSearch={handleCitySearch} />
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
    </div>
  );
}

export default App;
