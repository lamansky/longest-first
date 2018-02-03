'use strict'

const assert = require('assert')
const longestFirst = require('.')

describe('longestFirst()', function () {
  it('should sort strings in descending order of length', function () {
    const arr = longestFirst(['x', 'xx'])
    assert.strictEqual(arr[0], 'xx')
    assert.strictEqual(arr[1], 'x')
  })

  it('should sort objects in descending order of length', function () {
    const arr = longestFirst([{length: 2}, {length: 10}])
    assert.strictEqual(arr[0].length, 10)
    assert.strictEqual(arr[1].length, 2)
  })

  it('should not modify the original array', function () {
    const arr = ['x', 'xx']
    longestFirst(arr)
    assert.strictEqual(arr[0], 'x')
    assert.strictEqual(arr[1], 'xx')
  })

  it('should support the bind operator', function () {
    const arr = longestFirst.call(['x', 'xx'])
    assert.strictEqual(arr[0], 'xx')
    assert.strictEqual(arr[1], 'x')
  })
})
