import RomanNumeralsParser from "./RomanNumeralsParser";

const romanNumerals = new RomanNumeralsParser();

test('returns 1 for I', () => {
  const result = romanNumerals.parse("I");

  expect(result).toEqual(1);
});
