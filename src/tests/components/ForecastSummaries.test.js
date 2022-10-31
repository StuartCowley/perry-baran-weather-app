import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 123,
      description: "Desc 1",
      icon: "Icon1",
      temperature: {
        max: 1,
      },
    },
    {
      date: 456,
      description: "Desc 2",
      icon: "Icon2",
      temperature: {
        max: 2,
      },
    },
  ];

  describe("snapshot", () => {
    it("renders correctlty", () => {
      const { asFragment } = render(
        <ForecastSummaries forecasts={validProps} />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("list", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps} />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(validProps.length);
  });
});
