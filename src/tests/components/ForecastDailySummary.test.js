import React from "react";
import { render } from "@testing-library/react";
import ForecastDailySummary from "../../components/ForecastDailySummary";

describe("ForecastDailySummary", () => {
  const validProps = {
    dateTime: 20,
    date: "today",
    weather: "cold",
    icon: "800",
    temp: "20",
    handleForecastSelect: () => {},
  };

  describe("snapshot", () => {
    it("renders corretly", () => {
      const { asFragment } = render(
        <ForecastDailySummary
          dateTime={validProps.dateTime}
          date={validProps.date}
          weather={validProps.weather}
          icon={validProps.icon}
          temp={validProps.temp}
          handleForecastSelect={validProps.handleForecastSelect}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("props", () => {
    it("renders correct values for props", () => {
      const { getByText, getByTestId } = render(
        <ForecastDailySummary
          dateTime={validProps.dateTime}
          date={validProps.date}
          weather={validProps.weather}
          icon={validProps.icon}
          temp={validProps.temp}
          handleForecastSelect={validProps.handleForecastSelect}
        />
      );

      expect(getByText(validProps.date)).toHaveAttribute(
        "class",
        "forecast-daily-summary__date"
      );
      expect(getByText(validProps.weather).closest("div")).toHaveAttribute(
        "class",
        "forecast-daily-summary__description"
      );
      expect(getByTestId("forecast-icon")).toHaveAttribute(
        "class",
        "forecast-daily-summary__icon"
      );
      expect(getByText(`${validProps.temp}°C`)).toHaveAttribute(
        "class",
        "forecast-daily-summary__temp"
      );
    });
  });
});
