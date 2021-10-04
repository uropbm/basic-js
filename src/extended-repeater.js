import { assert } from 'chai';
import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
    let arr = []
    let repeat, addition, additionRep, additionSep, s = '', count = false
    let separator = '+'
  for (let key in options) {
    switch (key) {
      case 'repeatTimes' :
        repeat = options[key]
      break
      case 'separator' :
        separator = options[key]
      break
      case 'addition' :
        addition = options[key]
        separator = options[key] + separator
      break
      case 'additionRepeatTimes' :
        additionRep = options[key]
      break
      case 'additionSeparator' :
        additionSep = addition + options[key]
        count = true
      break
    }
    for (let i = 0; i < repeat; i++) {
      arr[i] = str.split(separator)
    }
  }

  for (let i = 0; i < additionRep - 1; i++) {
    s = s + additionSep
  }
  
  if ((additionRep > 0) && (count)) {
    separator = s + separator
    return arr.join(separator) + s +addition
  } else if (additionRep > 0) {
    return arr.join(separator) + addition
  } else return arr.join(separator)
}
