const flexPanel = require('./index.js');

//console.log(arrayCardio)

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}



test('async support', async () => {
  await wait(10)

  expect(true).toBe(true)
})

test('ES6 support', () => {
  expect(fancyEs6Stuff(['a', 'b', 'c'], [1, 2, 3])).toEqual(['a', 'b', 'c', 1, 2, 3])
})

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(sumItems()).toEqual(true)
  })
})
describe('My work', () => {
  test('works', () => {
    expect(2).toEqual(2)
  })
})
