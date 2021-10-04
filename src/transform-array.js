import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  let array = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++
      if ((arr.length > (i + 1)) && ((arr[i + 1] === "--double-prev") || (arr[i + 1] === "--discard-prev"))) {
        i++
      }
    } else if (arr[i] === '--discard-prev') {
      if (array.length > 0) {
        array.pop()
      }
    } else if (arr[i] === '--double-next') {
      if (arr.length > (i + 1)) {
        array.push(arr[i + 1])
      }
    } else if (arr[i] === '--double-prev') {
      if (array.length > 0) {
        array.push(array[array.length - 1])
      }
    } else {
      array.push(arr[i])
    }
  }

  return array
}
