'use strict';

var flatten = require('arr-flatten');

module.exports = function arrayPull(arr, ele) {
  var pull = flatten([].slice.call(arguments, 1));
  var len = pull.length;
  var idx = -1;
  arr = arr.slice();

  while (++idx < len) {
    remove(arr, pull[idx]);
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
