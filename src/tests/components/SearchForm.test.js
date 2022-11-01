import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = () => {};

  describe("snapshot", () => {
    it("renders correctly", () => {
      const { asFragment } = render(<SearchForm handleSearch={validProps} />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("button", () => {
    it("renders corret text", () => {
      const { getByText } = render(<SearchForm handleSearch={validProps} />);

      expect(getByText("Search")).toHaveAttribute("type", "submit");
    });
  });
});
