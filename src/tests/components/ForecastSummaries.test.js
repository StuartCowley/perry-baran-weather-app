import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        dateOrTime: "today",
        weather: "Test description 1",
        icon: "800",
        temp: "20",
        key: 20,
      },
      {
        dateOrTime: "tomorrow",
        weather: "Test description 2",
        icon: "900",
        temp: "25",
        key: 4,
      },
    ],
    handleForecastSelect: () => {},
  };

  describe("snapshot", () => {
    it("renders correctlty", () => {
      const { asFragment } = render(
        <ForecastSummaries
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
        <ForecastSummaries
          forecasts={validProps.forecasts}
          handleForecastSelect={validProps.handleForecastSelect}
        />
      );

      expect(getAllByTestId("forecast-summary")).toHaveLength(
        validProps.forecasts.length
      );
    });
  });
});
