import React from "react";
import { render } from "@testing-library/react";
import ForecastTrihourlySummary from "../../components/ForecastTrihourlySummary";

describe("ForecastTrihourlySummary", () => {
  const validProps = {
    time: "15:00",
    icon: "200",
    temp: 34,
    weather: "broken clouds",
  };

  const { time, icon, temp, weather } = validProps;

  test("snapshot", () => {
    const { asFragment } = render(
      <ForecastTrihourlySummary
        time={time}
        icon={icon}
        temp={temp}
        weather={weather}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("correctly renders props", () => {
    const { getByText, getByTestId } = render(
      <ForecastTrihourlySummary
        time={time}
        icon={icon}
        temp={temp}
        weather={weather}
      />
    );

    const description = weather.split(" ");

    expect(getByText(time)).toBeInstanceOf(HTMLParagraphElement);
    expect(getByTestId("forecast-icon")).toContainHTML("i");
    expect(getByText(new RegExp(description[0]))).toBeInstanceOf(
      HTMLParagraphElement
    );
    expect(getByText(new RegExp(description[1]))).toBeInstanceOf(
      HTMLParagraphElement
    );
    expect(getByText(new RegExp(temp))).toBeInstanceOf(HTMLParagraphElement);
  });

  describe("No Data", () => {
    test("returns No Data if icon is undefined", () => {
      const { getByText } = render(
        <ForecastTrihourlySummary time={time} temp={temp} weather={weather} />
      );

      expect(getByText(/^no.data$/i)).toBeInTheDocument();
    });

    test("returns No Data if weather is undefined", () => {
      const { getByText } = render(
        <ForecastTrihourlySummary time={time} temp={temp} icon={icon} />
      );

      expect(getByText(/^no.data$/i)).toBeInTheDocument();
    });

    test("returns No Data if temp is undefined", () => {
      const { getByText } = render(
        <ForecastTrihourlySummary time={time} icon={icon} weather={weather} />
      );

      expect(getByText(/^no.data$/i)).toBeInTheDocument();
    });
  });
});
