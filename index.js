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
  var len = pull.length;
  var i = 0;

  while(len--) {
    ele = pull[i++];
    var idx = arr.indexOf(ele);

    if (idx !== -1) {
      arr.splice(idx, 1);
    }
  }

  return arr;
};
