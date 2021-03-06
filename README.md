# array-pull [![NPM version](https://img.shields.io/npm/v/array-pull.svg?style=flat)](https://www.npmjs.com/package/array-pull) [![NPM downloads](https://img.shields.io/npm/dm/array-pull.svg?style=flat)](https://npmjs.org/package/array-pull) [![Build Status](https://img.shields.io/travis/jonschlinkert/array-pull.svg?style=flat)](https://travis-ci.org/jonschlinkert/array-pull)

Remove the specified elements from the given array using strict equality for comparison.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install array-pull --save
```

## Usage

```js
var pull = require('array-pull');

pull(['a', 'b', 'c'], 'c');
//=> ['a', 'b']

var arr = ['a', 'b', 'c'];
pull(arr, 'b', 'c');
// arr => ['a']

pull(['a', 'b', 'c'], 'a', 'b', 'c');
//=> []
```

## Related projects

You might also be interested in these projects:

* [array-each](https://www.npmjs.com/package/array-each): Loop over each item in an array and call the given function on every element. | [homepage](https://github.com/jonschlinkert/array-each)
* [array-every](https://www.npmjs.com/package/array-every): Returns true if the callback returns truthy for all elements in the given array. | [homepage](https://github.com/jonschlinkert/array-every)
* [array-intersection](https://www.npmjs.com/package/array-intersection): Return an array with the unique values present in _all_ given arrays using strict equality… [more](https://www.npmjs.com/package/array-intersection) | [homepage](https://github.com/jonschlinkert/array-intersection)
* [array-map](https://www.npmjs.com/package/array-map): `[].map(f)` for older browsers | [homepage](https://github.com/substack/array-map)
* [array-unique](https://www.npmjs.com/package/array-unique): Return an array free of duplicate values. Fastest ES5 implementation. | [homepage](https://github.com/jonschlinkert/array-unique)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/array-pull/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/array-pull/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on May 03, 2016._