import React from "react";
import { render } from "@testing-library/react";
import TopBar from "../../components/TopBar";

describe("TopBar", () => {
  const handleSearch = jest.fn();

  test("snapshot", () => {
    const { asFragment } = render(<TopBar handleSearch={handleSearch} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
