const { convertMonth } = require('./main');

test('convertMonth case-1', () => {
  expect(convertMonth(1)).toBe('Jan');
});

test('convertMonth case-2', () => {
  expect(convertMonth(2)).toBe('Feb');
});
