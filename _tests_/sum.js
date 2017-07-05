const sum = require('../sum');
test('it works', () => {
  const result = sum(1, 2)
  expect(result).toBe(3)
  // expect(result).not.toBe(4);
  // if( result !== 3) {
  //   throw new Error('no three')
  // }
})
