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
    const { getAllByRole, queryByTestId } = screen;
    const [hamburgerButton] = getAllByRole("button");
    let dropDownMenu = queryByTestId("drop-down-menu");

    expect(hamburgerButton).toHaveAttribute("type", "button");
    expect(dropDownMenu).not.toBeInTheDocument();
    fireEvent.click(hamburgerButton);
    dropDownMenu = queryByTestId("drop-down-menu");
    expect(dropDownMenu).toBeInTheDocument();
  });
});
