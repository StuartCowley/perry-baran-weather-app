/* eslint-disable no-console */
import axios from "axios";
import { populateLocalStorage } from "./localStorage";
import forecastData from "../data/forecastData.json";
import { dateString } from "../helpers/dateTime";

const getForecast = async (
  setLocation,
  setForecasts,
  setSelectedDate,
  setErrMessage,
  location,
  units = "metric"
) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${units}&APPID=d1cad75804f6bd996f5d83905ac66876`;
  try {
    // const response = await axios.get(endpoint);
    const response = forecastData;
    const {
      data: {
        city: { name, country },
        list,
      },
    } = response;

    const simplifyForecast = (forecast) => {
      const {
        dt,
        dt_txt: dtTxt,
        main: {
          temp,
          temp_min: minTemp,
          temp_max: maxTemp,
          humidity,
          pressure,
        },
        weather: [{ description, id }],
        wind: { speed },
      } = forecast;

      return {
        date: dateString(dt),
        time: dtTxt.slice(11, 16),
        icon: id.toString(),
        dateTime: dt,
        temp,
        minTemp,
        maxTemp,
        humidity,
        pressure,
        weather: description,
        windSpeed: speed,
      };
    };

    const seperateForecastByDay = (data) => {
      const forecasts = [];
      let daysForecasts = [];

      data.forEach((forecast) => {
        const simplifiedForecast = simplifyForecast(forecast);

        if (daysForecasts.length === 0) {
          daysForecasts.push(simplifiedForecast);
        } else {
          const prevForecastDay = daysForecasts[
            daysForecasts.length - 1
          ].date.slice(0, 10);
          const forecastDay = simplifiedForecast.date.slice(0, 10);

          if (forecastDay === prevForecastDay) {
            daysForecasts.push(simplifiedForecast);
          } else {
            forecasts.push(daysForecasts);
            daysForecasts = [simplifiedForecast];
          }
        }
      });
      forecasts.push(daysForecasts);

      return forecasts;
    };

    const forecasts = seperateForecastByDay(list);

    setLocation({ city: name, country });
    setForecasts(forecasts);
    setSelectedDate(forecasts[0][0].dateTime);
    setErrMessage("");
    populateLocalStorage("location", `${name}, ${country}`);
  } catch (err) {
    const {
      response: {
        request: { status },
      },
    } = err;
    if (status === 404) {
      console.error("Invalid Location", err);
      setErrMessage("Could not find that city or town, please try again.");
    } else if (status === 429) {
      console.error("Too many API calls", err);
      setErrMessage("Too many requests made, please try again later.");
    } else if (
      status === 500 ||
      status === 502 ||
      status === 503 ||
      status === 504
    ) {
      console.error("Server Error", err);
      setErrMessage(
        "Oops, something went wrong with the server, please try again later."
      );
    } else {
      console.error("unexpected Error", err);
      setErrMessage(
        "Oops, something unexpected went wrong, please try again later."
      );
    }
  }
};

export default getForecast;
