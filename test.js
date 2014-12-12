/*!
 * array-pull <https://github.com/jonschlinkert/array-pull>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var pull = require('./');

describe('pull', function () {
  it('should return unique elements in the given array:', function () {
    pull(['a', 'a', 'c']).should.eql(['a', 'a', 'c']);
  });

  it('should return only the unique elements from all provided arrays:', function () {
    pull(['a', 'b', 'c'], 'c').should.eql(['a', 'b']);
    pull(['a', 'b', 'c'], 'b', 'c').should.eql(['a']);
    pull(['a', 'b', 'c'], 'a', 'b', 'c').should.eql([]);
  });
});
