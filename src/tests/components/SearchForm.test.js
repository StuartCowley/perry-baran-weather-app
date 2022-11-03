import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    handleSearch: () => {},
    setSelectedUnits: () => {},
  };

  describe("snapshot", () => {
    it("renders correctly", () => {
      const { asFragment } = render(
        <SearchForm
          handleSearch={validProps.handleSearch}
          setSelectedUnits={validProps.setSelectedUnits}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("button", () => {
    it("renders corret text", () => {
      const { getByText, getByLabelText } = render(
        <SearchForm
          handleSearch={validProps.handleSearch}
          setSelectedUnits={validProps.setSelectedUnits}
        />
      );

      const metricRadio = getByLabelText("Metric:");
      const imperialRadio = getByLabelText("Imperial:");

      expect(getByText("Search")).toHaveAttribute("type", "submit");
      expect(metricRadio).toHaveAttribute("type", "radio");
      expect(metricRadio).toHaveAttribute("id", "metric");
      expect(imperialRadio).toHaveAttribute("type", "radio");
      expect(imperialRadio).toHaveAttribute("id", "imperial");
    });
  });
});
