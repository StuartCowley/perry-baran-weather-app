import React from "react";
import { render } from "@testing-library/react";
import ForecastTrihourlySummaries from "../../components/ForecastTrihourlySummaries";

xdescribe("ForecastTrihourlySummaries", () => {
  const validProps = {
    forecasts: [
      {
        dateTime: 123,
        dateTimeTxt: "2022-11-03 15:00:00",
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
        dateTimeTxt: "2022-11-03 18:00:00",
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
