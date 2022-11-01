import React, { useEffect, useState } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";

function App() {
  const [{ forecasts, location }, setForecastData] = useState({
    location: {},
    forecasts: [],
  });
  const [selectedDate, setSelectedDate] = useState(0);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecaseSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecast(setForecastData, setSelectedDate);
  }, []);

  return (
    <div className="weather-app">
      <LocationDetails location={location} />
      <ForecastSummaries
        forecasts={forecasts}
        handleForecastSelect={handleForecaseSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}

export default App;
