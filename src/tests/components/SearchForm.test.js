import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const handleSearch = jest.fn();

  test("snapshot", () => {
    const { asFragment } = render(<SearchForm handleSearch={handleSearch} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders correctly", () => {
    const { getByRole } = render(<SearchForm handleSearch={handleSearch} />);

    const button = getByRole("button");
    const input = getByRole("textbox");

    expect(button).toHaveTextContent(/search/i);
    expect(button).toHaveAttribute("type", "submit");
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("");
  });

  test("inputs", async () => {
    const { getByRole } = render(<SearchForm handleSearch={handleSearch} />);

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
    const { getByRole } = render(<SearchForm handleSearch={handleSearch} />);

    const input = getByRole("textbox");
    const string = "string";

    fireEvent.change(input, { target: { value: string } });
    expect(input.value).toBe(string);
    fireEvent.keyDown(input, { code: "Enter", charCode: 13 });
    expect(handleSearch).toBeCalledWith(string);
    expect(input.value).toBe("");
  });
});
