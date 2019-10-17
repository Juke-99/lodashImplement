const lodash = require('lodash')
// const chunk = require('./chunk')
// const compact = require('./compact')

var a = ['a', 'b', 'c']
var b = [3, 4, 45, 6, 3, 2, 6, 7, 3, 4, 45, 6, 3, 2, 6, 7]
var c = [null, NaN, undefined, '', 2, 'ioyge', false]

console.log("lodash chunk 1:")
console.log(lodash.chunk(a, 2))
console.log("")

console.log("lodash chunk 2:")
console.log(lodash.chunk(a))
console.log("")

console.log("origin chunk 1: ")
console.log(myChunk(b, 3))
console.log("")

console.log("lodash compact:")
console.log(lodash.compact(c))
console.log("")

console.log("origin compat 1: ")
console.log(myCompact(c))
console.log("")

// console.log("origin chunk 1: " + chunk(b, 3))
// console.log("origin compat 1: " + compact(c))

/**
 * Babel isn't runing... 
 * ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 */

 var isArray = Array.isArray

/**
 * lodash chunk method
 * @param {Array} array 
 * @param {Number} size 
 * 
 * @returns Array
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

/**
 * lodash compact
 * @param {*} array 
 */
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

function myConcat(srrsy, ...vslues) {
  
}