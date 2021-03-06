'use strict';

var flatten = require('arr-flatten');

module.exports = function arrayPull(val, ele) {
  var arr = val.slice();
  var remove = [].slice.call(arguments, 1);
  var len = remove.length;
  var idx = -1;

  while (++idx < len) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === remove[idx]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
};
