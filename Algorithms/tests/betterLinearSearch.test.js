import linearSearch from "../betterLinearSearch";

it('find 2 in arr [1,2,3]', () => {
  expect(linearSearch([1, 2, 3], 1)).toBe(0);
  expect(linearSearch([1, 2, 3], 2)).toBe(1);
  expect(linearSearch([1, 2, 3], 3)).toBe(2);
});

it('find 2 in large arr', () => {
  expect(linearSearch([1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3], 1)).toBe(0);
});

it('no find value', () => {
  expect(linearSearch([], 2)).toBe(-1);
  expect(linearSearch([1, 2, 3], 4)).toBe(-1);
});

it('null argunents', () => {
  expect(linearSearch()).toBe(-1);
  expect(linearSearch(1)).toBe(-1);
  expect(linearSearch(1, 2)).toBe(-1);
});

