import axios from "axios";

const getForecast = async (setForecastData, setSelectedDate, city) => {
  let endpoint = `https://mcr-codes-weather-app.herokuapp.com/forecast`;
  if (city) {
    endpoint += `?city=${city}`;
  }
  const response = await axios.get(endpoint);

  setForecastData(response.data);
  setSelectedDate(response.data.forecasts[0].date);
};

export default getForecast;
