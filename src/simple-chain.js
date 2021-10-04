import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {

  arr : [],

  getLength() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    return this.arr.length
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    this.arr.push('( ' + value + ' )')
    return this
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    if (!Number.isInteger(position) || (position < 1 || position > this.getLength())) {
      this.arr.length = 0
      throw new Error(`You can't remove incorrect link!`)
    } 
    this.arr.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    this.arr.reverse()
    return this
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    let res = this.arr.join('~~')
    this.arr = []
    return res
  }
};
