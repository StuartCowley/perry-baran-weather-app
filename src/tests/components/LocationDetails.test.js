import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

xdescribe("LocationDetails", () => {
  const location = "Leeds, GB";
  it("renders the correct city and location props", () => {
    const { getByText } = render(<LocationDetails location={location} />);

    expect(getByText("Leeds, GB")).toBeInstanceOf(HTMLHeadingElement);
  });
});
