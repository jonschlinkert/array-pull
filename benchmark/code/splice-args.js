'use strict';

module.exports = function arrayPull(val, ele) {
  var argsLen = arguments.length;
  if (argsLen === 1 || (ele == null && argsLen === 2)) {
    return val;
  }

  var remove = ele;
  if (argsLen > 2) {
    remove = [].slice.call(arguments, 1);
  } else if (typeof ele === 'string') {
    remove = [ele];
  }

  var arr = val.slice();
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
