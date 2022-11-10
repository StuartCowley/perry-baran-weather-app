import React from "react";
import { render, fireEvent } from "@testing-library/react";
import OptionsMenu from "../../components/OptionsMenu";

describe("OptionsMenu", () => {
  const handleSearch = jest.fn();

  test("snapshot", () => {
    const { asFragment } = render(<OptionsMenu handleSearch={handleSearch} />);

    expect(asFragment()).toMatchSnapshot();
  });

  describe("hamburger menu", () => {
    test("image", () => {
      const { getByAltText } = render(
        <OptionsMenu handleSearch={handleSearch} />
      );

      const hamburgerImage = getByAltText("options menu");
      expect(hamburgerImage).toHaveAttribute("src", "menu.png");
    });

    test("button", () => {
      const { getAllByRole, getByRole } = render(
        <OptionsMenu handleSearch={handleSearch} />
      );

      const [hamburgerButton] = getAllByRole("button");
      const optionsForm = getByRole("form");
      expect(hamburgerButton).toHaveAttribute("type", "button");
      expect(optionsForm).toHaveClass("hidden");
      fireEvent.click(hamburgerButton);
      expect(optionsForm).not.toHaveClass("hidden");
    });
  });

  describe("form", () => {
    test("all fields correctly rendered", () => {
      const { getByText, getAllByRole } = render(
        <OptionsMenu handleSearch={handleSearch} />
      );

      const radios = getAllByRole("radio");
      const apply = getAllByRole("button")[1];
      expect(getByText(/options/i)).toBeInstanceOf(HTMLHeadingElement);
      expect(getByText(/units:/i)).toBeInstanceOf(HTMLHeadingElement);
      expect(getByText(/scientific/i)).toBeInstanceOf(HTMLLabelElement);
      expect(getByText(/metric/i)).toBeInstanceOf(HTMLLabelElement);
      expect(getByText(/imperial/i)).toBeInstanceOf(HTMLLabelElement);
      expect(radios).toHaveLength(3);
      expect(radios[0]).toHaveAttribute("value", "standard");
      expect(radios[1]).toHaveAttribute("value", "metric");
      expect(radios[2]).toHaveAttribute("value", "imperial");
      radios.forEach((radio) => {
        expect(radio).toHaveAttribute("name", "units");
      });
      expect(apply).toHaveAttribute("type", "submit");
      expect(apply).toHaveTextContent(/apply/i);
    });

    test("selecting units", () => {
      const { getAllByRole } = render(
        <OptionsMenu handleSearch={handleSearch} />
      );

      const [standard, metric, imperial] = getAllByRole("radio");
      const apply = getAllByRole("button")[1];

      fireEvent.click(standard);
      expect(standard).toBeChecked();
      expect(metric).not.toBeChecked();
      expect(imperial).not.toBeChecked();
      fireEvent.click(apply);
      expect(handleSearch).toBeCalledWith(undefined, standard.value);

      fireEvent.click(metric);
      expect(standard).not.toBeChecked();
      expect(metric).toBeChecked();
      expect(imperial).not.toBeChecked();
      fireEvent.click(apply);
      expect(handleSearch).toBeCalledWith(undefined, metric.value);

      fireEvent.click(imperial);
      expect(standard).not.toBeChecked();
      expect(metric).not.toBeChecked();
      expect(imperial).toBeChecked();
      fireEvent.click(apply);
      expect(handleSearch).toBeCalledWith(undefined, imperial.value);
    });
  });
});
