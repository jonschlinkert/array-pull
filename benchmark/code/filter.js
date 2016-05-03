'use strict';

var flatten = require('arr-flatten');

module.exports = function arrayPull(arr, list) {
  list = flatten([].slice.call(arguments, 1));
  return arr.filter(function(ele) {
    return list.indexOf(ele) === -1;
  });
};
