import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    if (arr.length == 0) return 0
    if (!Array.isArray(arr)) return 1
    let count = 1
    let count2 = 1
    function rec(a) {
      a.forEach((item) => {
        if (Array.isArray(item)) {
          count++
          rec(item)
        }
      })
      if (count > count2) {
        count2 = count
      }
      count = 1
      if (count > count2) return count
      return count2
    }

    return rec(arr)
  }
}
