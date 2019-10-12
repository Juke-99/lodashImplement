const lodash = require('lodash')

var a = ['a', 'b', 'c']
var b = [3, 4, 45, 6, 3, 2, 6, 7, 3, 4, 45, 6, 3, 2, 6, 7]

console.log(lodash.chunk(a, 2))
console.log(lodash.chunk(a))

console.log(myChunk(b, 3))

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
