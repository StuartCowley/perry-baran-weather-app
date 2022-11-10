import React from "react";
import { render } from "@testing-library/react";
import ForecastBreakdown from "../../components/ForecastBreakdown";

describe("ForecastBreakdown", () => {
  const validProps = {
    icon: "200",
    temp: "20",
    minTemp: "18",
    maxTemp: "22",
    humidity: "30",
    windSpeed: "40",
    weather: "cold",
  };

  const { icon, temp, minTemp, maxTemp, humidity, windSpeed, weather } =
    validProps;

  test("snapshot", () => {
    const { asFragment } = render(
      <ForecastBreakdown
        icon={icon}
        temp={temp}
        minTemp={minTemp}
        maxTemp={maxTemp}
        humidity={humidity}
        windSpeed={windSpeed}
        weather={weather}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("correctly renders props", () => {
    const { getByText, getByTestId } = render(
      <ForecastBreakdown
        icon={icon}
        temp={temp}
        minTemp={minTemp}
        maxTemp={maxTemp}
        humidity={humidity}
        windSpeed={windSpeed}
        weather={weather}
      />
    );

    expect(getByTestId("forecast-icon")).toContainHTML("i");
    expect(getByText(new RegExp(temp))).toBeInstanceOf(HTMLParagraphElement);
    expect(getByText(new RegExp(minTemp))).toBeInstanceOf(HTMLParagraphElement);
    expect(getByText(new RegExp(maxTemp))).toBeInstanceOf(HTMLParagraphElement);
    expect(getByText(new RegExp(humidity))).toBeInstanceOf(
      HTMLParagraphElement
    );
    expect(getByText(new RegExp(windSpeed))).toBeInstanceOf(
      HTMLParagraphElement
    );
  });

  test("it contains correct headings", () => {
    const { getByText } = render(
      <ForecastBreakdown
        icon={icon}
        temp={temp}
        minTemp={minTemp}
        maxTemp={maxTemp}
        humidity={humidity}
        windSpeed={windSpeed}
        weather={weather}
      />
    );

    expect(getByText(/min:/i)).toBeInstanceOf(HTMLHeadingElement);
    expect(getByText(/max:/i)).toBeInstanceOf(HTMLHeadingElement);
    expect(getByText(/humidity:/i)).toBeInstanceOf(HTMLHeadingElement);
    expect(getByText(/wind speed:/i)).toBeInstanceOf(HTMLHeadingElement);
  });
});
