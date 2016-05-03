'use strict';

var flatten = require('arr-flatten');

module.exports = function arrayPull(val, ele) {
  var arr = val.slice();
  var pull = flatten([].slice.call(arguments, 1));
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
