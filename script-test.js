describe("search(str)", () => {
  it("should return an array of fruits that contain the String argument", () => {
    expect(
      search("ppl")
    ).toEqual(["Apple 🍎", "Custard apple", "Pineapple 🍍"]);

    expect(
      search("wat")
    ).toEqual(["Watermelon 🍉"]);
  });

  it("should return fruits regardless of case", () => {
    expect(
      search("CHEE")
    ).toEqual(["Lychee"]);

    expect(
      search("pomelo")
    ).toEqual(["Pomelo"]);
  });

  it("should recognize emojis as a search", () => {
    expect(
      search("🍉")
    ).toEqual(["Watermelon 🍉"]);
  });

  it("should return an empty array for an unrecognized fruit", () => {
    expect(
      search("abcd")
    ).toEqual([]);
  });
});

describe("separateStringForBolding(str, substr)", () => {
  it("should return an array containing the piece of substring, before the substring, and after the substring", () => {
    expect(
      separateStringForBolding("Apple 🍎", "pp")
    ).toEqual(["A", "pp", "le 🍎"]);

    expect(
      separateStringForBolding("Raspberry", "Rasp")
    ).toEqual(["", "Rasp", "berry"]);

    expect(
      separateStringForBolding("Raspberry", "berry")
    ).toEqual(["Rasp", "berry", ""]);
  });

  it("should return an array of the pieces regardless of case", () => {
    expect(
      separateStringForBolding("Melon 🍈", "LON")
    ).toEqual(["Me", "lon", " 🍈"]);

    expect(
      separateStringForBolding("Honeydew", "honey")
    ).toEqual(["", "Honey", "dew"]);

    expect(
      separateStringForBolding("ABCED", "bc")
    ).toEqual(["A", "BC", "ED"]);
  });
});