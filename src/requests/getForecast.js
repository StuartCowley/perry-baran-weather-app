import axios from "axios";
import { populateLocalStorage } from "./localStorage";

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
    const response = await axios.get(endpoint);
    const {
      data: {
        city: { name, country },
        list,
      },
    } = response;

    const seperateForecastByDay = (data) => {
      const forecasts = [];
      let daysForecasts = [];

      data.forEach((forecast) => {
        if (daysForecasts.length === 0) {
          daysForecasts.push(forecast);
        } else {
          const prevForecastDay =
            daysForecasts[daysForecasts.length - 1].dt_txt.split(" ")[0];
          const forecastDay = forecast.dt_txt.split(" ")[0];

          if (forecastDay === prevForecastDay) {
            daysForecasts.push(forecast);
          } else {
            forecasts.push(daysForecasts);
            daysForecasts = [forecast];
          }
        }
      });

      forecasts.push(daysForecasts);

      return forecasts;
    };

    const forecasts = seperateForecastByDay(list);

    setLocation({ city: name, country });
    setForecasts(forecasts);
    setSelectedDate(forecasts[0][0].dt);
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
    }
    if (status === 429) {
      console.error("Too many API calls", err);
      setErrMessage("Too many requests made, please try again later.");
    }
    if (status === 500 || status === 502 || status === 503 || status === 504) {
      console.error("Server Error", err);
      setErrMessage(
        "Oops, something went wrong on our side, please try again later."
      );
    } else {
      console.error("unexpected Error", err);
      setErrMessage(
        "Oops, something unexpected went wrong, please try again later"
      );
    }
  }
};

export default getForecast;
