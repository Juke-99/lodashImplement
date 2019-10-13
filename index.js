const lodash = require('lodash')
// const chunk = require('./chunk')
// const compact = require('./compact')

var a = ['a', 'b', 'c']
var b = [3, 4, 45, 6, 3, 2, 6, 7, 3, 4, 45, 6, 3, 2, 6, 7]
var c = [null, NaN, undefined, '', 2, 'ioyge', false]

console.log("lodash chunk 1: " + lodash.chunk(a, 2))
console.log("lodash chunk 2: " + lodash.chunk(a))

console.log("origin chunk 1: " + myChunk(b, 3))
console.log("origin compat 1: " + myCompact(c))

// console.log("origin chunk 1: " + chunk(b, 3))
// console.log("origin compat 1: " + compact(c))

/**
 * Babel isn't runing... 
 * ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 */

function myChunk(array, size) {
  let index = 0, resultLength = 0, length = array.length, result = Array(Math.ceil(length / size))

  while(index < length) {
    result[resultLength++] = arraySlice(array, index, (index += size))
  }

  return result
}

function arraySlice(array, start, end) {
  let length = array.length, index = -1
  end = end > length ? length : end

  length = start > end ? 0 : (end - start)

  let result = Array(length)

  while(++index < length) {
    result[index] = array[index + start]
  }

  return result
}

function myCompact(array) {
  let result = [], length = array.length, index = -1, resultIndex = 0

  while(++index < length) {
    let value = array[index]
    if(value) {
      result[resultIndex++] = array[index]
    }
  }

  return result
}