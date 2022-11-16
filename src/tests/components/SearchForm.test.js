import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const handleSearch = jest.fn();
  let screen;

  describe("including placeHolder", () => {
    const placeHolder = "placeholder";
    beforeEach(() => {
      screen = render(
        <SearchForm handleSearch={handleSearch} placeholder={placeHolder} />
      );
    });

    test("snapshot", () => {
      const { asFragment } = screen;

      expect(asFragment()).toMatchSnapshot();
    });

    test("renders correctly", () => {
      const { getByRole } = screen;
      const button = getByRole("button");
      const input = getByRole("textbox");

      expect(button).toHaveTextContent(/search/i);
      expect(button).toHaveAttribute("type", "submit");
      expect(input).toBeInTheDocument();
      expect(input.value).toBe("");
      expect(input).toHaveAttribute("placeholder", placeHolder);
    });

    test("inputs", async () => {
      const { getByRole } = screen;
      const button = getByRole("button");
      const input = getByRole("textbox");
      const string = "string";

      fireEvent.change(input, { target: { value: string } });
      expect(input.value).toBe(string);
      fireEvent.click(button);
      expect(handleSearch).toBeCalledWith(string);
      expect(input.value).toBe("");
    });

    test("can press enter in search input to search", () => {
      const { getByRole } = screen;
      const input = getByRole("textbox");
      const string = "string";

      fireEvent.change(input, { target: { value: string } });
      expect(input.value).toBe(string);
      fireEvent.keyDown(input, { code: "Enter", charCode: 13 });
      expect(handleSearch).toBeCalledWith(string);
      expect(input.value).toBe("");
    });
  });

  describe("exluding placeholder", () => {
    beforeEach(() => {
      screen = render(<SearchForm handleSearch={handleSearch} />);
    });

    test("renders correctly without placeholder", () => {
      const { getByRole } = screen;
      const input = getByRole("textbox");

      expect(input).toHaveAttribute("placeholder", "");
    });
  });
});
