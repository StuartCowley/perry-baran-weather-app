import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DropDownMenu from "../../components/DropDownMenu";

describe("DropDownMenu", () => {
  const handleSearch = jest.fn();

  test("snapshot", () => {
    const { asFragment } = render(<DropDownMenu handleSearch={handleSearch} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("image", () => {
    const { getByAltText } = render(
      <DropDownMenu handleSearch={handleSearch} />
    );

    const hamburgerImage = getByAltText("hamburger menu");
    expect(hamburgerImage).toHaveAttribute("src", "menu.png");
  });

  test("button", () => {
    const { getAllByRole, getByTestId } = render(
      <DropDownMenu handleSearch={handleSearch} />
    );

    const [hamburgerButton] = getAllByRole("button");
    const dropDownMenu = getByTestId("drop-down-menu");
    expect(hamburgerButton).toHaveAttribute("type", "button");
    expect(dropDownMenu).toHaveClass("drop-down-menu__hidden");
    fireEvent.click(hamburgerButton);
    expect(dropDownMenu).not.toHaveClass("drop-down-menu__hidden");
  });
});
