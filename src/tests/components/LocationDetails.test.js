import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  const location = "Leeds, GB";

  describe("no error message", () => {
    let screen;

    beforeEach(() => {
      screen = render(<LocationDetails location={location} />);
    });

    test("snapshot", () => {
      const { asFragment } = screen;

      expect(asFragment()).toMatchSnapshot();
    });

    test("correctly renders props", () => {
      const { getByText } = screen;

      expect(getByText(location)).toBeInstanceOf(HTMLHeadingElement);
    });
  });

  describe("error message", () => {
    test("if passed no falsey error message - renders that instead of location", () => {
      const errMessage = "Oopsies an error";
      const { queryByText } = render(
        <LocationDetails location={location} errMessage={errMessage} />
      );

      expect(queryByText(errMessage)).toBeInstanceOf(HTMLHeadingElement);
      expect(queryByText(location)).not.toBeInTheDocument();
    });
  });
});
