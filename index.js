/*!
 * array-pull <https://github.com/jonschlinkert/array-pull>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var slice = require('array-slice');

module.exports = function arrayPull(arr, ele) {
  if (ele == null) {
    return arr;
  }

  var pull = slice(arguments, 1);
  var len = arr.length;
  var i = 0;
  var res = [];

  while(len--) {
    ele = arr[i++];

    if (pull.indexOf(ele) === -1) {
      res.push(ele);
    }
  }

  return res;
};
