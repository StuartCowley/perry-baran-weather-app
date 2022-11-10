import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  const location = "Leeds, GB";

  test("snapshot", () => {
    const { asFragment } = render(<LocationDetails location={location} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("correctly renders props", () => {
    const { getByText } = render(<LocationDetails location={location} />);

    expect(getByText(location)).toBeInstanceOf(HTMLHeadingElement);
  });

  test("if passed no falsey error message - renders that instead of location", () => {
    const errMessage = "Oopsies an error";
    const { queryByText } = render(
      <LocationDetails location={location} errMessage={errMessage} />
    );

    expect(queryByText(errMessage)).toBeInstanceOf(HTMLHeadingElement);
    expect(queryByText(location)).not.toBeInTheDocument();
  });
});
