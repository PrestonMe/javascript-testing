test('Expect user to have the image passed into generateUser', () => {
  const userOverrides = {
    image: 'http://test.com/preston.png'
  }
  const user = generateUser(userOverrides);
  const result = user.toProfileJSONFor()
  expect(result).toMatchObject(userOverrides)
})
