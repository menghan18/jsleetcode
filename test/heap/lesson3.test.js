import Ugly from '../../code/heap/lesson3'

test('ugly', () => {
  expect(Ugly.getPrimes(6)).toEqual([2, 3])
})

test('ugly:2', () => {
  let ugly = new Ugly(12, [2, 7, 13, 19])
  expect(ugly.getAll()).toBe(32)
})
