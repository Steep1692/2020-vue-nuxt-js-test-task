/**
 * Searches needed value in the array with the Binary Search algorithm
 * @param items - array to search
 * @param value - the searchable value
 * @param fieldName - name of the field that should be used to compare with the searchable value
 */
export const binarySearch = (items, value, fieldName = null) => {
  let getValueToCompare = (index) => items[index]

  if (fieldName) {
    getValueToCompare = (index) => items[index][fieldName]
  }

  let startIndex = 0,
    stopIndex = items.length - 1,
    middle= Math.floor((stopIndex + startIndex) / 2)

  while(items[middle][fieldName] !== value && startIndex < stopIndex) {
    const valueToCompare = getValueToCompare(middle)

    if (value < valueToCompare) {
      stopIndex = middle - 1
    } else if (value > valueToCompare) {
      startIndex = middle + 1
    }

    middle = Math.floor((stopIndex + startIndex) / 2)
  }

  return (getValueToCompare(middle) !== value) ? -1 : middle
}
