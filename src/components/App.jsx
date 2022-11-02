import React, { useEffect, useState } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import getForecast from "../requests/getForecast";
import SearchForm from "./SearchForm";
import ForecastDetails from "./ForecastDetails";

function App() {
  const [location, setLocation] = useState({ city: "", country: "" });
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const [errMessage, setErrMessage] = useState("");

  const simplifiedForecasts = forecasts.map((forecast) => {
    const [
      {
        dt,
        weather: [{ description, id }],
      },
    ] = forecast;

    return {
      dateOrTime: new Date(dt * 1000).toDateString(),
      icon: id.toString(),
      key: dt,
      temp: (
        forecast.reduce((prev, curr) => prev + curr.main.temp, 0) /
        forecast.length
      ).toFixed(2),
      weather: description,
    };
  });

  const selectedForecast = forecasts.find(
    (forecast) => forecast[0].dt === selectedDate
  );

  const handleCitySearch = (city) => {
    getForecast(
      setLocation,
      setForecasts,
      setSelectedDate,
      setErrMessage,
      city
    );
  };

  useEffect(() => {
    handleCitySearch("leeds");
  }, []);

  return (
    <div className="weather-app">
      <LocationDetails location={location} errMessage={errMessage} />
      <SearchForm handleSearch={handleCitySearch} />
      {!errMessage && (
        <>
          <ForecastSummaries
            forecasts={simplifiedForecasts}
            handleForecastSelect={setSelectedDate}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
}

export default App;
