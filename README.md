# callback-pluck

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Use callback-pluck instead of `_.pluck`

Callback pluck is a callback generator with clean API for ES5 iterations methods.
It allows you to use `_.pluck` idea in more clean way via generating required
callbacks for iteration methods (`map`, `filter`, `every` and `some`).

## Deprecation note

Use es6 arrow functions instead, they are native and simpler solution.

    arr.map(p('age'));    // [36, 40, 22, 22]
    arr.map(i => i.age);  // [36, 40, 22, 22]

## Install

```bash
npm install --save-dev callback-pluck
```

## Usage

    var p = require('callback-pluck');
    var arr = [
      { 'name': 'Barney',  'age': 36, sex: 'male', married: true },
      { 'name': 'Fred',    'age': 40, sex: 'male', married: true },
      { 'name': 'Glenn',   'age': 22, sex: 'male', married: false },
      { 'name': 'Stephen', 'age': 22, sex: 'male', married: true }
    ];

## Callback pluck with `[ ].map`

    arr.map(p('name')); // ['Barney', 'Fred', 'Glenn', 'Stephen']
    arr.map(p('age'));  // [36, 40, 22, 22]

## Callback pluck with `[ ].filter`

Simple filtering with string parameter:

    arr.filter(p('married')); // [{ 'name': 'Barney',  …, married: true },
                              //  { 'name': 'Fred',    ¬, married: true },
                              //  { 'name': 'Stephen', …, married: true }]

Simple filtering with string parameter and _additional `false` parameter_:

    arr.filter(p('married', false)); // { 'name': 'Glenn', …, married: false },

Advanced filtering via property value:

    arr.filter(p({ age: 22  })); // [{ 'name': 'Glenn',   'age': 22, … },
                                 //  { 'name': 'Stephen', 'age': 22, … }]

Advanced negative filtering via property value and _additional `false` parameter_:

    arr.filter(p({ age: 22 }, false)); // [{ 'name': 'Barney',  'age': 36, … },
                                       //  { 'name': 'Fred',    'age': 40, … }]

## Callback pluck with `[ ].every`

    arr.every(p('married')); // false
    arr.every(p({ sex: 'male' })); // true
    arr.every(p({ married: true })); // false

## Callback pluck with `[ ].some`

    arr.some(p('married')); // true
    arr.some(p({ married: true })); // true
    arr.some(p({ name: 'Barney' })); // true
    arr.some(p({ sex: 'female' })); // false

## Note

Advanced filtering via property value _doesn't do deep equal_, It take only
first property from `Object.keys(inputObject)` to keep logic clean and simple.

## License

MIT © [Vladimir Starkov](http://iamstarkov.com/)

[npm-url]: https://npmjs.org/package/callback-pluck
[npm-image]: http://img.shields.io/npm/v/callback-pluck.svg

[travis-url]: https://travis-ci.org/iamstarkov/callback-pluck
[travis-image]: http://img.shields.io/travis/iamstarkov/callback-pluck.svg

[coveralls-url]: https://coveralls.io/r/iamstarkov/callback-pluck
[coveralls-image]: http://img.shields.io/coveralls/iamstarkov/callback-pluck.svg

[depstat-url]: https://david-dm.org/iamstarkov/callback-pluck
[depstat-image]: https://david-dm.org/iamstarkov/callback-pluck.svg

[depstat-dev-url]: https://david-dm.org/iamstarkov/callback-pluck
[depstat-dev-image]: https://david-dm.org/iamstarkov/callback-pluck/dev-status.svg
