/*!
 * array-pull <https://github.com/jonschlinkert/array-pull>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps: mocha */
var should = require('should');
var pull = require('./');

describe('pull', function() {
  it('should return unique elements in the given array:', function() {
    pull(['a', 'a', 'c']).should.eql(['a', 'a', 'c']);
  });

  it('should return only the unique elements from all provided arrays:', function() {
    pull(['a', 'b', 'c'], 'c').should.eql(['a', 'b']);
    pull(['a', 'b', 'c'], 'b', 'c').should.eql(['a']);
    pull(['a', 'b', 'c'], 'a', 'b', 'c').should.eql([]);
  });

  it('should remove elements from the array in place:', function() {
    var arr = ['a', 'b', 'c'];
    pull(arr, 'c').should.eql(['a', 'b']);
    arr.should.eql(['a', 'b']);
  });
});
