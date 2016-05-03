'use strict';

var flatten = require('arr-flatten');

module.exports = function(arr, ele) {
  var argsLen = arguments.length;
  if (typeof ele === 'string' && argsLen === 2) {
    return remove(arr, arr.indexOf(ele));
  }

  var args = flatten([].slice.call(arguments, 1));
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
