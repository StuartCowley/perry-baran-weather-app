import React from "react";
import "../styles/ForecastDetails.css";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import ForecastSummaries from "./ForecastSummaries";
import ForecastBreakdown from "./ForecastBreakdown";
import { calcMean, calcMax, calcMin } from "../helpers/calculateValues";
import { dateString } from "../helpers/dateTime";

function ForecastMoreDetails({ forecasts }) {
  const getTriHourlyForecasts = (triHourlyForecasts) => {
    const NUMBER_OF_ENTRIES = 24 / 3;
    const filteredForecastsArray = [];

    for (let i = 0; i < NUMBER_OF_ENTRIES; i += 1) {
      let time = `${i * 3}:00`;
      if (time.length === 4) {
        time = `0${time}`;
      }

      const triHourlyForecast = triHourlyForecasts.find(
        (forecast) => forecast.dt_txt.slice(11, 16) === time
      );

      if (triHourlyForecast) {
        const {
          main: { temp },
          weather: [{ description, id }],
        } = triHourlyForecast;

        filteredForecastsArray.push({
          dateOrTime: time,
          icon: id.toString(),
          key: uuid(),
          temp: temp.toFixed(2),
          weather: description,
        });
      } else {
        filteredForecastsArray.push({
          dateOrTime: time,
          icon: null,
          key: uuid(),
          temp: null,
          weather: null,
        });
      }
    }
    return filteredForecastsArray;
  };

  const triHourlyForecasts = getTriHourlyForecasts(forecasts);

  const day = dateString(forecasts[0].dt);
  const icon = forecasts[0].weather[0].id.toString();
  const temp = calcMean(forecasts, "main", "temp", 2);
  const minTemp = calcMin(forecasts, "main", "temp_max", 2);
  const maxTemp = calcMax(forecasts, "main", "temp_max", 2);
  const humidity = calcMean(forecasts, "main", "humidity", 0);
  const windSpeed = calcMean(forecasts, "wind", "speed", 2);
  const weather = forecasts[0].weather[0].description;

  return (
    <div className="forecast-details">
      <h2>{day}</h2>
      <ForecastSummaries forecasts={triHourlyForecasts} />
      <ForecastBreakdown
        icon={icon}
        temp={temp}
        minTemp={minTemp}
        maxTemp={maxTemp}
        humidity={humidity}
        windSpeed={windSpeed}
        weather={weather}
      />
    </div>
  );
}

ForecastMoreDetails.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      dt: PropTypes.number,
      dt_txt: PropTypes.string,
      main: PropTypes.shape({
        humidity: PropTypes.number,
        temp: PropTypes.number,
        temp_max: PropTypes.number,
        temp_min: PropTypes.number,
      }),
      weather: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string,
          id: PropTypes.number,
        })
      ),
      wind: PropTypes.shape({
        speed: PropTypes.number,
      }),
    })
  ).isRequired,
};

export default ForecastMoreDetails;
