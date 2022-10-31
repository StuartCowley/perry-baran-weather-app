import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 12345,
    description: "Test description",
    icon: "testIcon",
    temperature: {
      max: 20,
    },
  };

  describe("snapshot", () => {
    it("renders corretly", () => {
      const { asFragment } = render(<ForecastSummary forecast={validProps} />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("props", () => {
    it("renders correct values for props", () => {
      const { getByText, getByTestId } = render(<ForecastSummary forecast={validProps} />);

      expect(getByText(validProps.date.toString())).toHaveAttribute(
        "class",
        "forecast-summary__date"
      );
      expect(getByText(validProps.description)).toHaveAttribute(
        "class",
        "forecast-summary__description"
      );
      expect(getByTestId("forecast-icon")).toHaveAttribute(
        "class",
        "forecast-summary__icon"
      );
      expect(getByText(`${validProps.temperature.max}°C`)).toHaveAttribute(
        "class",
        "forecast-summary__temperature"
      );
    });
  });
});
