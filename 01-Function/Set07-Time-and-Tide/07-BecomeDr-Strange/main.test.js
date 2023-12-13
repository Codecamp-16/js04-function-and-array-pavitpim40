const { convertMonth, convertHour } = require('./main');

test('convertMonth case-1', () => {
  expect(convertMonth(1)).toBe('Jan');
});

test('convertMonth case-2', () => {
  expect(convertMonth(2)).toBe('Feb');
});

// convertHour
test('convertHour case-1', () => {
  expect(convertHour(5)).toBe(12);
});

test('convertHour case-2', () => {
  expect(convertHour(17)).toBe(0);
});

test('convertHour case-3', () => {
  expect(convertHour(18)).toBe(1);
});
