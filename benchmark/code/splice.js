'use strict';

var slice = require('array-slice');

module.exports = function arrayPull(arr, ele) {
  if (ele == null) {
    return arr;
  }

  var pull = slice(arguments, 1);
  var len = pull.length;
  var i = 0;
  var res = [];

  while(len--) {
    ele = pull[i++];
    var idx = arr.indexOf(ele);

    if (idx !== -1) {
      arr.splice(idx, 1);
    }
  }

  return arr;
};
