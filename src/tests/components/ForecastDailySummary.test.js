import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ForecastDailySummary from "../../components/ForecastDailySummary";
import { dateString } from "../../helpers/dateTime";

describe("ForecastDailySummary", () => {
  const validProps = {
    dateTime: 20,
    weather: "broken clouds",
    icon: "800",
    temp: "20",
    handleForecastSelect: jest.fn(),
  };

  const { dateTime, weather, icon, temp, handleForecastSelect } = validProps;

  test("snapshot", () => {
    const { asFragment } = render(
      <ForecastDailySummary
        dateTime={dateTime}
        weather={weather}
        icon={icon}
        temp={temp}
        handleForecastSelect={handleForecastSelect}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("correctly renders props", () => {
    const { getByText, getByTestId } = render(
      <ForecastDailySummary
        dateTime={dateTime}
        weather={weather}
        icon={icon}
        temp={temp}
        handleForecastSelect={handleForecastSelect}
      />
    );

    const date = dateString(dateTime);
    const dayOfTheWeek = date.slice(0, 3);
    const monthAndDay = date.slice(3, 10);
    const description = weather.split(" ");

    expect(getByText(new RegExp(dayOfTheWeek))).toBeInstanceOf(
      HTMLParagraphElement
    );
    expect(getByText(new RegExp(monthAndDay))).toBeInstanceOf(
      HTMLParagraphElement
    );
    expect(getByTestId("forecast-icon")).toContainHTML("i");
    expect(getByText(new RegExp(description[0]))).toBeInstanceOf(
      HTMLParagraphElement
    );
    expect(getByText(new RegExp(description[1]))).toBeInstanceOf(
      HTMLSpanElement
    );
    expect(getByText(new RegExp(temp))).toBeInstanceOf(HTMLParagraphElement);
  });

  test("button", () => {
    const { getByText } = render(
      <ForecastDailySummary
        dateTime={dateTime}
        weather={weather}
        icon={icon}
        temp={temp}
        handleForecastSelect={handleForecastSelect}
      />
    );

    const button = getByText(/more details/i);

    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(handleForecastSelect).toBeCalledTimes(0);
    fireEvent.click(button);
    expect(handleForecastSelect).toBeCalledTimes(1);
    expect(handleForecastSelect).toBeCalledWith(dateTime);
  });
});
