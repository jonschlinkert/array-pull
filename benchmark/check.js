'use strict';

var path = require('path');
var util = require('util');
var glob = require('glob');
var bold = require('ansi-bold');

glob.sync(__dirname + '/code/*.js').forEach(function (fp) {
  var fn = require(path.resolve(__dirname, 'code', fp));
  var name = path.basename(fp, path.extname(fp));

  glob.sync(__dirname + '/fixtures/*.js').forEach(function (fixture) {
    console.log(bold(name) + ':', inspect(fn.apply(fn, arrayify(require(fixture))).length));
  });
});

function arrayify(val) {
  return val ? (Array.isArray(val) ? val : [val]) : [];
}

function inspect(o) {
  var str = util.inspect(o, {depth: null});
  return str.replace(/[\s\n]+/g, ' ');
}
