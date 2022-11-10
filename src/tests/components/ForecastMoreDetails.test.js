import React from "react";
import { render } from "@testing-library/react";
import ForecastMoreDetails from "../../components/ForecastMoreDetails";

xdescribe("ForecastMoreDetails", () => {
  const validProps = {
    forecasts: [
      {
        time: "now",
        icon: "200",
        temp: 20,
        maxTemp: 21,
        minTemp: 19,
        humdidity: 69,
        weather: "very cold",
        windSpeed: 4,
      },
      {
        time: "later",
        icon: "400",
        temp: 10,
        maxTemp: 11,
        minTemp: 9,
        humdidity: 96,
        weather: "more cold",
        windSpeed: 88,
      },
    ],
  };

  describe("snapshot", () => {
    it("renders correctly", () => {
      const { asFragment } = render(
        <ForecastMoreDetails forecasts={validProps.forecasts} />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
