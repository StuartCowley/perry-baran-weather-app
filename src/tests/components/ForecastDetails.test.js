import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    forecast: {
      date: 12345,
      humidity: 80,
      temperature: {
        max: 20,
        min: 10,
      },
      wind: {
        speed: 40,
        direction: "ne",
      },
    },
  };

  describe("snapshot", () => {
    it("renders correctly", () => {
      const { asFragment } = render(
        <ForecastDetails forecast={validProps.forecast} />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("props", () => {
    it("renders correct values for props", () => {
      const { getByText } = render(
        <ForecastDetails forecast={validProps.forecast} />
      );

      expect(
        getByText(new Date(validProps.forecast.date).toDateString())
      ).toHaveAttribute("class", "forecast-details__date");
      expect(
        getByText(`${validProps.forecast.temperature.max}°C`)
      ).toHaveAttribute("class", "forecast-details__max-temp");
      expect(
        getByText(`${validProps.forecast.temperature.min}°C`)
      ).toHaveAttribute("class", "forecast-details__min-temp");
      expect(getByText(`${validProps.forecast.humidity}%`)).toHaveAttribute(
        "class",
        "forecast-details__humidity"
      );
      expect(
        getByText(
          `${validProps.forecast.wind.speed}mph ${validProps.forecast.wind.direction}`
        )
      ).toHaveAttribute("class", "forecast-details__wind");
    });
  });
});
