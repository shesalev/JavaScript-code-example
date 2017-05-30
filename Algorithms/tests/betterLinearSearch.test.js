import linearSearch from "../betterLinearSearch";

test('find 2 in arr [1,2,3]', () => {
  expect(linearSearch([1, 2, 3], 1)).toBe(0);
  expect(linearSearch([1, 2, 3], 2)).toBe(1);
  expect(linearSearch([1, 2, 3], 3)).toBe(2);
});

test('find 2 in large arr', () => {
  expect(linearSearch([1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3], 1)).toBe(0);
});

test('no find value', () => {
  expect(linearSearch([], 2)).toBe(-1);
  expect(linearSearch([1, 2, 3], 4)).toBe(-1);
});

test('null argunents', () => {
  expect(linearSearch()).toBe(-1);
  expect(linearSearch(1)).toBe(-1);
  expect(linearSearch(1, 2)).toBe(-1);
});

