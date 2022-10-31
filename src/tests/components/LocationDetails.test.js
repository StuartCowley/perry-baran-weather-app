import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    const location = {
      city: "Leeds",
      country: "UK",
    };
    const { getByText } = render(<LocationDetails location={location} />);

    expect(getByText("Leeds, UK")).toBeInstanceOf(HTMLHeadingElement);
  });
});
