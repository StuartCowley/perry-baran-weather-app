import getUnits from "../../helpers/getUnits";

describe("getUnits", () => {
  test("returns standard units when not passed a value", () => {
    const { tempUnits, speedUnits } = getUnits();
    expect(tempUnits).toEqual("K");
    expect(speedUnits).toEqual("m/s");
  });

  test("returns standard units when passed an invalid string", () => {
    const { tempUnits, speedUnits } = getUnits("fish");
    expect(tempUnits).toEqual("K");
    expect(speedUnits).toEqual("m/s");
  });

  test("returns standard units when passed a value that isn't a string", () => {
    const { tempUnits, speedUnits } = getUnits(123);
    expect(tempUnits).toEqual("K");
    expect(speedUnits).toEqual("m/s");
  });

  test("returns standard units when passed 'standard'", () => {
    const { tempUnits, speedUnits } = getUnits("standard");
    expect(tempUnits).toEqual("K");
    expect(speedUnits).toEqual("m/s");
  });

  test("returns metric units when passed 'metric'", () => {
    const { tempUnits, speedUnits } = getUnits("metric");
    expect(tempUnits).toEqual("°C");
    expect(speedUnits).toEqual("m/s");
  });

  test("returns imperial units when passed 'imperial'", () => {
    const { tempUnits, speedUnits } = getUnits("imperial");
    expect(tempUnits).toEqual("°F");
    expect(speedUnits).toEqual("mph");
  });

  test("returns correct units when passed a string with improper capitilization", () => {
    const { tempUnits, speedUnits } = getUnits("mEtRiC");
    expect(tempUnits).toEqual("°C");
    expect(speedUnits).toEqual("m/s");
  });
});
