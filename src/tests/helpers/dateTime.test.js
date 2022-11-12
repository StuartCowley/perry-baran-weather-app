import dateString from "../../helpers/dateString";

describe("dateTime", () => {
  const dt = 1667487600;

  describe("dateString", () => {
    test("converts a dateTime in seconds to a date string", () => {
      const date = dateString(dt);
      expect(date).toEqual("Thu Nov 03 2022");
    });
  });
});
