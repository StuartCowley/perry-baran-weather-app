import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import "../styles/ForecastTrihourlySummaries.css";
import ForecastTrihourlySummary from "./ForecastTrihourlySummary";

function ForecastTriHourlySummaries({ forecasts }) {
  const addMissingForecasts = (trihourlyForecasts) => {
    const FORECAST_INTERVAL = 3;
    const FORECASTS_PER_DAY = 24 / FORECAST_INTERVAL;
    const forecastsArray = [];

    for (let i = 0; i < FORECASTS_PER_DAY; i += 1) {
      let time = `${i * FORECAST_INTERVAL}:00`;
      if (time.length === 4) time = `0${time}`;

      const trihourlyForecast = trihourlyForecasts.find(
        (forecast) => forecast.time === time
      );

      if (trihourlyForecast) {
        forecastsArray.push(trihourlyForecast);
      } else {
        forecastsArray.push({
          time,
          dateTime: uuid(),
          weather: null,
          icon: null,
          temp: null,
        });
      }
    }

    return forecastsArray;
  };

  const trihourlyForecast = addMissingForecasts(forecasts);

  return (
    <div className="forecast-trihourly-summaries">
      {trihourlyForecast.map((forecast) => {
        const { time, dateTime, weather, icon, temp } = forecast;
        return (
          <ForecastTrihourlySummary
            time={time}
            weather={weather}
            icon={icon}
            temp={temp}
            key={dateTime}
          />
        );
      })}
    </div>
  );
}

ForecastTriHourlySummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      dateTime: PropTypes.number,
      time: PropTypes.string,
      icon: PropTypes.string,
      temp: PropTypes.number,
      maxTemp: PropTypes.number,
      minTemp: PropTypes.number,
      humidity: PropTypes.number,
      weather: PropTypes.string,
      windSpeed: PropTypes.number,
    })
  ).isRequired,
};

export default ForecastTriHourlySummaries;
