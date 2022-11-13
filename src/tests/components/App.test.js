import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/App";

describe("App", () => {
  test("snapshot", async () => {
    const { asFragment } = await render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
