import chkNoUndefind from "../utils/chkNoUndefind";

it('null argunents', () => {
  expect(chkNoUndefind()).toBe(false);
});

it('null second argunent', () => {
  expect(chkNoUndefind(1)).toBe(false);
});

it('first argunent is not array', () => {
  expect(chkNoUndefind(1, 2)).toBe(true);
});

it('seccesful execute', () => {
  expect(chkNoUndefind([1], 2)).toBe(true);
});
