import { dateString } from "../../helpers/dateTime";

describe("dateTime", () => {
  const dt = 1667487600;

  describe("dateString", () => {
    it("converts a dateTime in seconds to a dateString", () => {
      const date = dateString(dt);
      expect(date).toEqual("Thu Nov 03 2022");
    });
  });
});
