import React from "react";
import { render } from "@testing-library/react";
import ForecastTrihourlySummary from "../../components/ForecastTrihourlySummary";

xdescribe("ForecastTrihourlySummary", () => {
  const validProps = {
    time: "now",
    icon: "200",
    temp: 34,
    weather: "hot",
  };

  describe("snapshot", () => {
    it("renders corretly", () => {
      const { asFragment } = render(
        <ForecastTrihourlySummary
          time={validProps.time}
          icon={validProps.icon}
          temp={validProps.temp}
          weather={validProps.weather}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("props", () => {
    it("renders correct values for props", () => {
      const { getByText, getByTestId } = render(
        <ForecastTrihourlySummary
          time={validProps.time}
          icon={validProps.icon}
          temp={validProps.temp}
          weather={validProps.weather}
        />
      );

      expect(getByText(validProps.time)).toHaveAttribute(
        "class",
        "forecast-trihourly-summary__time"
      );
      expect(getByText(validProps.weather).closest("div")).toHaveAttribute(
        "class",
        "forecast-trihourly-summary__description"
      );
      expect(getByTestId("forecast-icon")).toHaveAttribute(
        "class",
        "forecast-trihourly-summary__icon"
      );
      expect(getByText(`${validProps.temp.toFixed(1)}K`)).toHaveAttribute(
        "class",
        "forecast-trihourly-summary__temp"
      );
    });
  });
});
