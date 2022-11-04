import React, { useContext } from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import "../styles/ForecastDailySummary.css";
import UnitContext from "../context/UnitContext";
import getUnits from "../helpers/getUnits";

function ForecastDailySummary({
  dateTime,
  date,
  weather,
  icon,
  temp,
  handleForecastSelect,
}) {
  const selectedUnits = useContext(UnitContext);
  const { tempUnits } = getUnits(selectedUnits);
  const description = weather ? weather.split(" ") : [weather];

  return (
    <div
      className="forecast-daily-summary"
      data-testid="forecast-daily-summary"
    >
      <p className="forecast-daily-summary__date">{date}</p>
      <div className="forecast-daily-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />{" "}
      </div>
      <p className="forecast-daily-summary__description">
        {description[0]}
        {description.length === 2 ? <span>{description[1]}</span> : null}
      </p>
      <p className="forecast-daily-summary__temp">
        {temp ? `${temp}${tempUnits}` : null}
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
  date: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  handleForecastSelect: PropTypes.func.isRequired,
};

export default ForecastDailySummary;
