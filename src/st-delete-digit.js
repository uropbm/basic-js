import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let s = ('' + n)

  let num = 0, num1 = 0

    console.log(s)

  for (let i = 0; i < s.length; i++) {
    num1 = +s.replace(new RegExp(s[i]), '')
    if (num1 > num) {
      num = num1
    }
  }

  return num
}
