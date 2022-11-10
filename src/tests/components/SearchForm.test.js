import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

xdescribe("SearchForm", () => {
  const validProps = {
    handleSearch: () => {},
    setSelectedUnits: () => {},
  };

  describe("snapshot", () => {
    it("renders correctly", () => {
      const { asFragment } = render(
        <SearchForm handleSearch={validProps.handleSearch} />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("button", () => {
    it("renders corret text", () => {
      const { getByText } = render(
        <SearchForm handleSearch={validProps.handleSearch} />
      );

      expect(getByText("Search")).toHaveAttribute("type", "submit");
    });
  });
});
