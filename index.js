/*!
 * array-pull <https://github.com/jonschlinkert/array-pull>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var flatten = require('arr-flatten');

module.exports = function arrayPull(arr, ele) {
  if (!Array.isArray(arr)) {
    return [];
  }

  if (ele == null) {
    return arr;
  }

  var argsLen = arguments.length;
  var args = ele;

  if (argsLen > 2) {
    args = flatten([].slice.call(arguments, 1));
  } else if (typeof ele === 'string') {
    return remove(arr, ele);
  }

  for (var i = 0; i < args.length; i++) {
    remove(arr, args[i]);
  }
  return arr;
};

function remove(arr, str) {
  var idx = arr.indexOf(str);
  while (idx !== -1) {
    arr.splice(idx, 1);
    idx = arr.indexOf(str);
  }
  return arr;
}
