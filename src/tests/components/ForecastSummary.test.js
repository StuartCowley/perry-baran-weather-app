import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    forecast: {
      date: 12345,
      description: "Test description",
      icon: "800",
      temperature: {
        max: 20,
      },
    },
    key: 0,
    handleForecastSelect: () => {},
  };

  describe("snapshot", () => {
    it("renders corretly", () => {
      const { asFragment } = render(
        <ForecastSummary
          forecast={validProps.forecast}
          handleForecastSelect={validProps.handleForecastSelect}
          key={validProps.key}
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
          key={validProps.key}
        />
      );

      expect(
        getByText(new Date(validProps.forecast.date).toDateString())
      ).toHaveAttribute("class", "forecast-summary__date");
      expect(getByText(validProps.forecast.description)).toHaveAttribute(
        "class",
        "forecast-summary__description"
      );
      expect(getByTestId("forecast-icon")).toHaveAttribute(
        "class",
        "forecast-summary__icon"
      );
      expect(
        getByText(`${validProps.forecast.temperature.max}°C`)
      ).toHaveAttribute("class", "forecast-summary__temperature");
    });
  });
});
