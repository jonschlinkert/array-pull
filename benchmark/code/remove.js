'use strict';

module.exports = function arrayPull(val, ele) {
  var arr = val.slice();
  var args = [].slice.call(arguments, 1);
  var len = args.length;
  for (var i = 0; i < len; i++) {
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
