import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/App";

// can't get mock return value working but this line alone means the snapshot is no longer fragile to data requests
jest.mock("../../requests/getForecast");

describe("App", () => {
  test("snapshot", async () => {
    const { asFragment } = await render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
