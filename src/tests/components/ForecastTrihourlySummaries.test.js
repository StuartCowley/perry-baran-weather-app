import React from "react";
import { render } from "@testing-library/react";
import ForecastTrihourlySummaries from "../../components/ForecastTrihourlySummaries";

describe("ForecastTrihourlySummaries", () => {
  const validProps = {
    forecasts: [
      {
        dateTime: 123,
        time: "now",
        icon: "200",
        temp: 12,
        maxTemp: 13,
        minTemp: 11,
        humidity: 44,
        weather: "really cold",
        windSpeed: 66,
      },
      {
        dateTime: 456,
        time: "later",
        icon: "400",
        temp: 22,
        maxTemp: 23,
        minTemp: 21,
        humidity: 45,
        weather: "less cold",
        windSpeed: 99,
      },
    ],
  };

  describe("snapshot", () => {
    it("renders correctlty", () => {
      const { asFragment } = render(
        <ForecastTrihourlySummaries forecasts={validProps.forecasts} />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("list", () => {
    it("renders correct values for props", () => {
      const { getAllByTestId } = render(
        <ForecastTrihourlySummaries forecasts={validProps.forecasts} />
      );

      expect(getAllByTestId("forecast-trihourly-summary")).toHaveLength(8);
    });
  });
});
