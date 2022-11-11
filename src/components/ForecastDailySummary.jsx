import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import "../styles/ForecastDailySummary.css";
import getUnits from "../helpers/getUnits";
import useUnitContext from "../hooks/useUnitContext";
import { dateString } from "../helpers/dateTime";

function ForecastDailySummary({
  dateTime,
  weather,
  icon,
  temp,
  handleForecastSelect,
}) {
  const { units } = useUnitContext();
  const { tempUnits } = getUnits(units);
  const description = weather ? weather.split(" ") : [weather];
  const date = dateString(dateTime);
  const dayOfTheWeek = date.slice(0, 3);
  const monthAndDay = date.slice(3, 10);

  return (
    <div
      className="forecast-daily-summary"
      data-testid="forecast-daily-summary"
    >
      <p>
        {dayOfTheWeek} <br />
        {monthAndDay}
      </p>
      <div className="forecast-daily-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />{" "}
      </div>
      <p>
        {description[0]} <br />
        {description[1]}
      </p>
      <p>
        {temp}
        {tempUnits}
      </p>
      <button
        type="button"
        onClick={() => handleForecastSelect(dateTime)}
        className="forecast-daily-summary__more-details"
      >
        More Details
      </button>
    </div>
  );
}

ForecastDailySummary.propTypes = {
  dateTime: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  handleForecastSelect: PropTypes.func.isRequired,
};

export default ForecastDailySummary;
