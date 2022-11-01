import axios from "axios";

const getForecast = async (
  setForecastData,
  setSelectedDate,
  city,
  setErrMessage
) => {
  let endpoint = `https://mcr-codes-weather-app.herokuapp.com/forecast`;
  if (city) {
    endpoint += `?city=${city}`;
  }
  try {
    const response = await axios.get(endpoint);

    setForecastData(response.data);
    setSelectedDate(response.data.forecasts[0].date);
    setErrMessage("");
  } catch (err) {
    const { status } = err.response;
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
