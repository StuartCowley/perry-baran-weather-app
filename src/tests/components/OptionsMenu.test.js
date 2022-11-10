import React from "react";
import { render } from "@testing-library/react";
import OptionsMenu from "../../components/OptionsMenu";

xdescribe("OptionsMenu", () => {
  const validProps = {
    handleSearch: () => {},
  };

  describe("snapshot", () => {
    it("renders correctly", () => {
      const { asFragment } = render(
        <OptionsMenu handleSearch={validProps.handleSearch} />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("content", () => {
    it("has correct classes", () => {
      const { getByText, getByTestId, getByAltText } = render(
        <OptionsMenu handleSearch={validProps.handleSearch} />
      );

      expect(getByTestId("hamburger-menu")).toHaveAttribute(
        "class",
        "options-menu-button"
      );
      expect(getByAltText("options menu").closest("button")).toHaveAttribute(
        "data-testid",
        "hamburger-menu"
      );
      expect(getByText("Options")).toBeInstanceOf(HTMLHeadingElement);
      expect(getByText("Units:")).toBeInstanceOf(HTMLHeadingElement);
      expect(getByText("Scientific")).toHaveAttribute(
        "class",
        "options-menu-form__label"
      );
      expect(getByText("Metric")).toHaveAttribute(
        "class",
        "options-menu-form__label"
      );
      expect(getByText("Imperial")).toHaveAttribute(
        "class",
        "options-menu-form__label"
      );
      expect(getByTestId("radio-scientific")).toHaveAttribute(
        "class",
        "options-menu-form__radio"
      );
      expect(getByTestId("radio-metric")).toHaveAttribute(
        "class",
        "options-menu-form__radio"
      );
      expect(getByTestId("radio-imperial")).toHaveAttribute(
        "class",
        "options-menu-form__radio"
      );
    });
  });
});
