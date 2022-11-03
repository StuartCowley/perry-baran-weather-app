import React, { useEffect, useState } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import SearchForm from "./SearchForm";
import ForecastMoreDetails from "./ForecastMoreDetails";
// import getForecast from "../requests/getForecast";
import { calcMean } from "../helpers/calculateValues";
import { dateString } from "../helpers/dateTime";
import UnitContext from "../context/UnitContext";
import { getLocalStorage } from "../requests/localStorage";
import forecastData from "../data/forecastData.json";

function App() {
  const [location, setLocation] = useState({ city: "Leeds", country: "GB" });
  const [forecasts, setForecasts] = useState(forecastData);
  const [selectedDate, setSelectedDate] = useState(forecastData[0][0].dt);
  const [errMessage, setErrMessage] = useState("");
  const [selectedUnits, setSelectedUnits] = useState(
    getLocalStorage("units") || "metric"
  );

  const simplifiedForecasts = forecasts.map((forecast) => {
    const [
      {
        dt,
        weather: [{ description, id }],
      },
    ] = forecast;

    return {
      dateOrTime: dateString(dt),
      icon: id.toString(),
      key: dt,
      temp: calcMean(forecast, "main", "temp", 2),
      weather: description,
    };
  });

  const selectedForecast = forecasts.find(
    (forecast) => forecast[0].dt === selectedDate
  );

  /*
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

    handleCitySearch(city, selectedUnits);
  }, [selectedUnits]);
  */

  return (
    <div className="weather-app">
      <UnitContext.Provider value={selectedUnits}>
        <SearchForm
          handleSearch={() => {}}
          setSelectedUnits={setSelectedUnits}
        />
        <LocationDetails location={location} errMessage={errMessage} />
        {!errMessage && (
          <>
            <ForecastSummaries
              forecasts={simplifiedForecasts}
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
