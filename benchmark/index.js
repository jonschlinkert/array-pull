'use strict';

var Suite = require('benchmarked');
var suite = new Suite({
  fixtures: 'fixtures/list*one.js',
  add: 'code/{for*,current}.js',
  cwd: __dirname
});

suite.run();
