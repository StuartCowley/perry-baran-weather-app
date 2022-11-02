import React from "react";
import "../styles/ForecastDetails.css";
import PropTypes, { arrayOf } from "prop-types";
import { v4 as uuid } from "uuid";
import ForecastSummaries from "./ForecastSummaries";

function ForecastDetails({ forecast }) {
  const simplifiedForecast = Array.from({ length: 8 }, (x, i) => {
    let time = `${i * 3}`;
    if (time.length === 1) {
      time = `0${time}`;
    }

    return {
      dateOrTime: `${time}:00`,
      icon: undefined,
      key: uuid(),
      temp: undefined,
      weather: undefined,
    };
  }).map((item) => {
    const hourlyForecast = forecast.find(
      (fork) => fork.dt_txt.slice(11, 16) === item.dateOrTime
    );

    if (hourlyForecast) {
      const {
        dt_txt: dtTxt,
        main: { temp },
        weather: [{ description, id }],
      } = hourlyForecast;

      return {
        dateOrTime: dtTxt.slice(11, 16),
        icon: id.toString(),
        key: item.key,
        temp: temp.toFixed(2),
        weather: description,
      };
    }
    return item;
  });

  const day = new Date(forecast[0].dt * 1000).toDateString();
  const temp = (
    forecast.reduce((prev, curr) => prev + curr.main.temp, 0) / forecast.length
  ).toFixed(2);
  const minTemp = forecast
    .reduce((prev, curr) => {
      const currTemp = curr.main.temp_min;
      return prev < currTemp ? prev : currTemp;
    }, 1000)
    .toFixed(2);
  const maxTemp = forecast
    .reduce((prev, curr) => {
      const currTemp = curr.main.temp_max;
      return prev > currTemp ? prev : currTemp;
    }, -1000)
    .toFixed(2);
  const humidity = (
    forecast.reduce((prev, curr) => prev + curr.main.humidity, 0) / forecast.length
  ).toFixed(0);
  const windSpeed = (
    forecast.reduce((prev, curr) => prev + curr.wind.speed, 0) / forecast.length
  ).toFixed(2);

  return (
    <div className="forecast-details">
      <h2>{day}</h2>
      <ForecastSummaries forecasts={simplifiedForecast} />
      <p>
        <bold>Temperture: </bold>
        {temp}°C
      </p>
      <p>
        <bold>Minimum Temperature:</bold>
        {minTemp}°C
      </p>
      <p>
        <bold>Maximum Temperature:</bold>
        {maxTemp}°C
      </p>
      <p>
        <bold>Humidity:</bold>
        {humidity}%
      </p>
      <p>
        <bold>Wind Speed:</bold>
        {windSpeed}km/h
      </p>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      dt: PropTypes.number,
      dt_txt: PropTypes.string,
      main: PropTypes.shape({
        humidity: PropTypes.number,
        temp: PropTypes.number,
        temp_max: PropTypes.number,
        temp_min: PropTypes.number,
      }),
      weather: arrayOf(
        PropTypes.shape({
          description: PropTypes.string,
          icon: PropTypes.string,
        })
      ),
      wind: PropTypes.shape({
        speed: PropTypes.number,
      }),
    })
  ).isRequired,
};

export default ForecastDetails;
