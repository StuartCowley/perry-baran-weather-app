import React from "react";
import { render } from "@testing-library/react";
import TopBar from "../../components/TopBar";

xdescribe("TopBar", () => {
  const validProps = {
    handleSearch: () => {},
    setSelectedUnits: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <TopBar
        handleSearch={validProps.handleSearch}
        setSelectedUnits={validProps.setSelectedUnits}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
