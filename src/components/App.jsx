import React, { useEffect, useState } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import getForecast from "../requests/getForecast";
import SearchForm from "./SearchForm";
import ForecastDetails from "./ForecastDetails";
import { calcMean } from "../helpers/calculateValues";
import { dateString } from "../helpers/dateTime";

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
          {selectedForecast && <ForecastDetails forecasts={selectedForecast} />}
        </>
      )}
    </div>
  );
}

export default App;
