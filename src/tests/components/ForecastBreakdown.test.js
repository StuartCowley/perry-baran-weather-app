import React from "react";
import { render } from "@testing-library/react";
import ForecastBreakdown from "../../components/ForecastBreakdown";
import getUnits from "../../helpers/getUnits";

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

  test("correctly render props", () => {
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

    const { tempUnits, speedUnits } = getUnits();

    expect(getByTestId("forecast-icon")).toContainHTML("i");
    expect(getByText(`${temp}${tempUnits}`)).toBeInstanceOf(
      HTMLParagraphElement
    );
    expect(getByText(`${minTemp}${tempUnits}`)).toBeInstanceOf(
      HTMLParagraphElement
    );
    expect(getByText(`${maxTemp}${tempUnits}`)).toBeInstanceOf(
      HTMLParagraphElement
    );
    expect(getByText(`${humidity}%`)).toBeInstanceOf(HTMLParagraphElement);
    expect(getByText(`${windSpeed}${speedUnits}`)).toBeInstanceOf(
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
