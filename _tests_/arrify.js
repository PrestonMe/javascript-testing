import arrayify from '../arrayify'

test('Should return the argument if it is already an array', () => {
  const arg = [1,2,3];
  const result = arrayify(arg);
  expect(result).toBe(arg);
})

test('Should return array of argument if it is not already an array', () => {
  const arg = 'popcorn';
  const result = arrayify(arg);
  expect(result).toEqual([arg]);
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=TDD&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////
