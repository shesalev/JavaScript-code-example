import factorial from "../factorial";

it('null argunents', () => {
  expect(factorial()).toBe(1);
});
it('argunents is 1', () => {
  expect(factorial(1)).toBe(1);
});
it('argunents is 0', () => {
  expect(factorial(0)).toBe(1);
});
it('argunents is 5', () => {
  expect(factorial(5)).toBe(120);
});
