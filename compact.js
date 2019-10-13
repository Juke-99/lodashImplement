// remove false, null, 0, "", undefined, and NaN from array.
function compact(array) {
  let result = [], length = array.length, index = -1, resultIndex = 0

  while(++index < length) {
    let value = array[index]
    if(value) {
      result[resultIndex++] = array[index]
    }
  }

  return result
}

export default compact