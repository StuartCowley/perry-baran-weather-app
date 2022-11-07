import getUnits from "../../helpers/getUnits";

describe("getUnits", () => {
  it("returns standard units when not passed a value", () => {
    const { tempUnits, speedUnits } = getUnits();
    expect(tempUnits).toEqual("K");
    expect(speedUnits).toEqual("m/s");
  });

  it("returns standard units when passed an incorrect value", () => {
    const { tempUnits, speedUnits } = getUnits("fish");
    expect(tempUnits).toEqual("K");
    expect(speedUnits).toEqual("m/s");
  });

  it("returns standard units when passed 'standard'", () => {
    const { tempUnits, speedUnits } = getUnits("standard");
    expect(tempUnits).toEqual("K");
    expect(speedUnits).toEqual("m/s");
  });

  it("returns metric units when passed 'metric'", () => {
    const { tempUnits, speedUnits } = getUnits("metric");
    expect(tempUnits).toEqual("°C");
    expect(speedUnits).toEqual("m/s");
  });

  it("returns imperial units when passed 'imperial'", () => {
    const { tempUnits, speedUnits } = getUnits("imperial");
    expect(tempUnits).toEqual("°F");
    expect(speedUnits).toEqual("mph");
  });

  it("returns correct value if value passed is of wrong capitilization", () => {
    const { tempUnits, speedUnits } = getUnits("iMpEriAl");
    expect(tempUnits).toEqual("°F");
    expect(speedUnits).toEqual("mph");
  });
});
