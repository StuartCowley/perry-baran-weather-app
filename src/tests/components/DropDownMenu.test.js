import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DropDownMenu from "../../components/DropDownMenu";

describe("DropDownMenu", () => {
  const handleSearch = jest.fn();
  let screen;

  beforeEach(() => {
    screen = render(<DropDownMenu handleSearch={handleSearch} />);
  });

  test("snapshot", () => {
    const { asFragment } = screen;

    expect(asFragment()).toMatchSnapshot();
  });

  test("image", () => {
    const { getByAltText } = screen;

    const hamburgerImage = getByAltText("hamburger menu");
    expect(hamburgerImage).toHaveAttribute("src", "menu.png");
  });

  test("button", () => {
    const { getAllByRole, getByTestId } = screen;

    const [hamburgerButton] = getAllByRole("button");
    const dropDownMenu = getByTestId("drop-down-menu");
    expect(hamburgerButton).toHaveAttribute("type", "button");
    expect(dropDownMenu).toHaveClass("drop-down-menu__hidden");
    fireEvent.click(hamburgerButton);
    expect(dropDownMenu).not.toHaveClass("drop-down-menu__hidden");
  });
});
