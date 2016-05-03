'use strict';

module.exports = function arrayPull(val, ele) {
  var arr = val.slice();
  var remove = [].slice.call(arguments, 1);
  var len = remove.length;

  for (var i = 0; i < len; i++) {
    var str = remove[i];
    var idx = arr.indexOf(str);

    while (idx !== -1) {
      arr.splice(idx, 1);
      idx = arr.indexOf(str);
    }
  }

  return arr;
};
