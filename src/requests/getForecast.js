import axios from "axios";

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

    // seperates forecasts by day
    const forecasts = [];
    let daysForecasts = [];
    list.forEach((forecast) => {
      if (daysForecasts.length === 0) {
        daysForecasts.push(forecast);
      } else {
        const lastForecastDay =
          daysForecasts[daysForecasts.length - 1].dt_txt.split(" ")[0];
        const forecastDay = forecast.dt_txt.split(" ")[0];

        if (forecastDay === lastForecastDay) {
          daysForecasts.push(forecast);
        } else {
          forecasts.push(daysForecasts);
          daysForecasts = [forecast];
        }
      }
    });
    forecasts.push(daysForecasts);

    setLocation({ city: name, country });
    setForecasts(forecasts);
    setSelectedDate(forecasts[0][0].dt);
    setErrMessage("");
  } catch (err) {
    const { status } = err;
    if (status === 404) {
      console.error("Invalid Location", err);
      setErrMessage("Could not find that city or town, please try again.");
    }
    if (status === 500) {
      console.error("Server Error", err);
      setErrMessage(
        "Oops, something went wrong on our side, please try again later."
      );
    }
  }
};

export default getForecast;
