import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    forecast: {
      dateOrTime: "today",
      weather: "Test description",
      icon: "800",
      temp: "20",
      key: 20,
    },
    handleForecastSelect: () => {},
  };

  describe("snapshot", () => {
    it("renders corretly", () => {
      const { asFragment } = render(
        <ForecastSummary
          forecast={validProps.forecast}
          handleForecastSelect={validProps.handleForecastSelect}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("props", () => {
    it("renders correct values for props", () => {
      const { getByText, getByTestId } = render(
        <ForecastSummary
          forecast={validProps.forecast}
          handleForecastSelect={validProps.handleForecastSelect}
        />
      );

      expect(getByText(validProps.forecast.dateOrTime)).toHaveAttribute(
        "class",
        "forecast-summary__dateOrTime"
      );
      expect(getByText(validProps.forecast.weather)).toHaveAttribute(
        "class",
        "forecast-summary__description"
      );
      expect(getByTestId("forecast-icon")).toHaveAttribute(
        "class",
        "forecast-summary__icon"
      );
      expect(getByText(`${validProps.forecast.temp}°C`)).toHaveAttribute(
        "class",
        "forecast-summary__temp"
      );
    });
  });
});
