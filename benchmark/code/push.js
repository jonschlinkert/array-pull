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
