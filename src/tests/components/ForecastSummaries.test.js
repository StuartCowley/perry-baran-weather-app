import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 111111111,
      description: "Desc 1",
      icon: "800",
      temperature: {
        max: 1,
      },
    },
    {
      date: 222222222,
      description: "Desc 2",
      icon: "211",
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
