import React from "react";
import { render } from "@testing-library/react";
import ForecastDailySummaries from "../../components/ForecastDailySummaries";

describe("ForecastDailySummaries", () => {
  const validProps = {
    forecasts: [
      [
        {
          date: "today",
          dateTime: 123,
          icon: "200",
          temp: 12,
          weather: "really cold",
        },
        {
          date: "today",
          dateTime: 456,
          icon: "900",
          temp: 14,
          weather: "not cold",
        },
      ],
      [
        {
          date: "tomorrow",
          dateTime: 789,
          icon: "800",
          temp: 13,
          weather: "kinda cold",
        },
        {
          date: "tomorrow",
          dateTime: 101,
          icon: "600",
          temp: 15,
          weather: "still cold",
        },
      ],
    ],
    handleForecastSelect: () => {},
  };

  describe("snapshot", () => {
    it("renders correctlty", () => {
      const { asFragment } = render(
        <ForecastDailySummaries
          forecasts={validProps.forecasts}
          handleForecastSelect={validProps.handleForecastSelect}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("list", () => {
    it("renders correct values for props", () => {
      const { getAllByTestId } = render(
        <ForecastDailySummaries
          forecasts={validProps.forecasts}
          handleForecastSelect={validProps.handleForecastSelect}
        />
      );

      expect(getAllByTestId("forecast-daily-summary")).toHaveLength(
        validProps.forecasts[0].length
      );
    });
  });
});
