import { calcMean, calcMax, calcMin } from "../../helpers/calculateValues";

describe("calculateValues", () => {
  const array = [{ value: 1 }, { value: 2 }, { value: 3 }];

  describe("calcMean", () => {
    it("calculates mean of an item in an array and return a string to 1 decimal place", () => {
      const mean = calcMean(array, "value");
      expect(mean).toEqual("2.0");
    });

    it("returns string with number of decimal places passed as argument", () => {
      const mean = calcMean(array, "value", 3);
      expect(mean).toEqual("2.000");
    });
  });

  describe("calcMax", () => {
    it("calculates max of an item in an array and return a string to 1 decimal place", () => {
      const max = calcMax(array, "value");
      expect(max).toEqual("3.0");
    });

    it("returns string with number of decimal places passed as argument", () => {
      const max = calcMax(array, "value", 3);
      expect(max).toEqual("3.000");
    });
  });

  describe("calcMin", () => {
    it("calculates min of an item in an array and return a string to 1 decimal place", () => {
      const min = calcMin(array, "value");
      expect(min).toEqual("1.0");
    });

    it("returns string with number of decimal places passed as argument", () => {
      const min = calcMin(array, "value", 3);
      expect(min).toEqual("1.000");
    });
  });
});
