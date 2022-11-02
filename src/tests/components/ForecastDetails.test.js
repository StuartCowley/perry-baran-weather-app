import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    forecasts: [
      {
        dt: 1,
        dt_txt: "dt_txt 1",
        main: {
          humidity: 10,
          temp: 20,
          temp_max: 22,
          temp_min: 18,
        },
        weather: [
          {
            description: "desc 1",
            icon: "800",
          },
        ],
        wind: {
          speed: 13,
        },
      },
      {
        dt: 2,
        dt_txt: "dt_txt 2",
        main: {
          humidity: 12,
          temp: 21,
          temp_max: 23,
          temp_min: 19,
        },
        weather: [
          {
            description: "desc 2",
            icon: "200",
          },
        ],
        wind: {
          speed: 14,
        },
      },
    ],
  };

  describe("snapshot", () => {
    it("renders correctly", () => {
      const { asFragment } = render(
        <ForecastDetails forecasts={validProps.forecasts} />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
