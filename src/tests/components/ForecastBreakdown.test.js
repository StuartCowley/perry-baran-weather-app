import React from "react";
import { render } from "@testing-library/react";
import ForecastBreakdown from "../../components/ForecastBreakdown";

describe("ForecastBreakdown", () => {
  const validProps = {
    icon: "200",
    temp: "20",
    minTemp: "18",
    maxTemp: "22",
    humidity: "30",
    windSpeed: "40",
    weather: "cold",
  };

  describe("snapshot", () => {
    it("renders correctly", () => {
      const { asFragment } = render(
        <ForecastBreakdown
          icon={validProps.icon}
          temp={validProps.temp}
          minTemp={validProps.minTemp}
          maxTemp={validProps.maxTemp}
          humidity={validProps.humidity}
          windSpeed={validProps.windSpeed}
          weather={validProps.weather}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("props", () => {
    it("renders correct values for props", () => {
      const { getByText, getByTestId } = render(
        <ForecastBreakdown
          icon={validProps.icon}
          temp={validProps.temp}
          minTemp={validProps.minTemp}
          maxTemp={validProps.maxTemp}
          humidity={validProps.humidity}
          windSpeed={validProps.windSpeed}
          weather={validProps.weather}
        />
      );

      expect(getByTestId("forecast-icon")).toHaveAttribute(
        "class",
        "forecast-breakdown__icon"
      );
      expect(getByText(validProps.temp)).toHaveAttribute(
        "class",
        "forecast-breakdown__temp"
      );
      expect(getByText(`${validProps.minTemp}°C`)).toHaveAttribute(
        "class",
        "forecast-breakdown__min-temp"
      );
      expect(getByText(`${validProps.maxTemp}°C`)).toHaveAttribute(
        "class",
        "forecast-breakdown__max-temp"
      );
      expect(getByText(`${validProps.humidity}%`)).toHaveAttribute(
        "class",
        "forecast-breakdown__humidity"
      );
      expect(getByText(`${validProps.windSpeed}m/s`)).toHaveAttribute(
        "class",
        "forecast-breakdown__wind-speed"
      );
    });
  });
});
