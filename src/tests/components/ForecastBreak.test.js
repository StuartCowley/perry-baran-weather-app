import React from "react";
import { render } from "@testing-library/react";
import ForecastBreakdown from "../../components/ForecastBreakdown";

describe("ForecastBreakdown", () => {
  const validProps = {
    temp: "20",
    minTemp: "18",
    maxTemp: "22",
    humidity: "30",
    windSpeed: "40",
  };

  describe("snapshot", () => {
    it("renders correctly", () => {
      const { asFragment } = render(
        <ForecastBreakdown
          temp={validProps.temp}
          minTemp={validProps.minTemp}
          maxTemp={validProps.maxTemp}
          humidity={validProps.humidity}
          windSpeed={validProps.windSpeed}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("props", () => {
    it("renders correct values for props", () => {
      const { getByText } = render(
        <ForecastBreakdown
          temp={validProps.temp}
          minTemp={validProps.minTemp}
          maxTemp={validProps.maxTemp}
          humidity={validProps.humidity}
          windSpeed={validProps.windSpeed}
        />
      );

      expect(getByText(`${validProps.temp}°C`)).toHaveAttribute(
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
      expect(getByText(`${validProps.windSpeed}km/h`)).toHaveAttribute(
        "class",
        "forecast-breakdown__wind-speed"
      );
    });
  });
});
