import React from "react";
import "../styles/ForecastDailySummaries.css";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastDailySummary";
import { calcMean } from "../helpers/calculateValues";

function ForecastDailySummaries(props) {
  const { forecasts, handleForecastSelect } = props;

  const getDailyForecast = (forecastsArray) => {
    return forecastsArray.map((forecast) => {
      const [{ date, dateTime, icon, weather }] = forecast;
      return {
        date: date.slice(0, 10),
        dateTime,
        icon,
        temp: calcMean(forecast, "temp", 2),
        weather,
      };
    });
  };

  const dailyForecast = getDailyForecast(forecasts);

  return (
    <div className="forecast-daily-summaries">
      {dailyForecast.map((forecast) => {
        const { dateTime, date, weather, icon, temp } = forecast;
        return (
          <ForecastSummary
            dateTime={dateTime}
            date={date}
            weather={weather}
            icon={icon}
            temp={temp}
            handleForecastSelect={handleForecastSelect}
            key={forecast.dateTime}
          />
        );
      })}
    </div>
  );
}

ForecastDailySummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        dateTime: PropTypes.number.isRequired,
        icon: PropTypes.string.isRequired,
        temp: PropTypes.number.isRequired,
        weather: PropTypes.string.isRequired,
      })
    )
  ).isRequired,
  handleForecastSelect: PropTypes.func.isRequired,
};

export default ForecastDailySummaries;
