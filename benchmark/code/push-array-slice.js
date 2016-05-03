'use strict';

var slice = require('array-slice');

module.exports = function arrayPull(val, ele) {
  var arr = val.slice();
  var pull = slice(arguments, 1);
  var len = arr.length;
  var idx = -1;
  var res = [];

  while (++idx < len) {
    ele = arr[idx];

    if (pull.indexOf(ele) === -1) {
      res.push(ele);
    }
  }
  return res;
};
