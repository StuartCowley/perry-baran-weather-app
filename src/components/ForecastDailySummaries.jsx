import React from "react";
import "../styles/ForecastDailySummaries.css";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastDailySummary";
import { calcMean } from "../helpers/calculateValues";

function ForecastDailySummaries({
  forecasts,
  handleForecastSelect,
  selectedDate,
}) {
  const getDailyForecast = (forecastsArray) => {
    return forecastsArray.map((forecast) => {
      const [{ dateTime, icon, weather }] = forecast;
      return {
        dateTime,
        icon,
        temp: calcMean(forecast, "temp"),
        weather,
      };
    });
  };

  const dailyForecast = getDailyForecast(forecasts);

  return (
    <div className="forecast-daily-summaries">
      {dailyForecast.map((forecast) => {
        const { dateTime, weather, icon, temp } = forecast;
        return (
          <ForecastSummary
            dateTime={dateTime}
            weather={weather}
            icon={icon}
            temp={temp}
            handleForecastSelect={handleForecastSelect}
            selectedDate={selectedDate}
            key={forecast.dateTime}
          />
        );
      })}
    </div>
  );
}

ForecastDailySummaries.defaultProps = {
  selectedDate: 0,
};

ForecastDailySummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        dateTime: PropTypes.number.isRequired,
        icon: PropTypes.string.isRequired,
        temp: PropTypes.number.isRequired,
        weather: PropTypes.string.isRequired,
      })
    )
  ).isRequired,
  handleForecastSelect: PropTypes.func.isRequired,
  selectedDate: PropTypes.number,
};

export default ForecastDailySummaries;
