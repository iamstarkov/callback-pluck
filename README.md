# Callback pluck

Callback pluck is a callback generator with clean API for ES5 iterations methods.

I wrote this code because I love `_.pluck` and want to use the same idea with ES5 iteration methods, which are supported in most environments.

# Install

```bash
npm install --save-dev callback-pluck
```

# Usage

```
var p = require('callback-pluck');
var arr = [
  { 'name': 'Barney',  'age': 36, sex: 'male', married: true },
  { 'name': 'Fred',    'age': 40, sex: 'male', married: true },
  { 'name': 'Glenn',   'age': 22, sex: 'male', married: false },
  { 'name': 'Stephen', 'age': 22, sex: 'male', married: true }
];
```

## Callback pluck with `[ ].map`

```
arr.map(p('name')); // ['Barney', 'Fred', 'Glenn', 'Stephen']
arr.map(p('age'));  // [36, 40, 22, 22]
```

## Callback pluck with `[ ].filter`

Simple filtering with string parameter:
```
arr.filter(p('married')); // [{ 'name': 'Barney',  …, married: true },
                          //  { 'name': 'Fred',    ¬, married: true },
                          //  { 'name': 'Stephen', …, married: true }]
```

Simple filtering with string parameter and _additional `false` parameter_:
```
arr.filter(p('married', false)); // { 'name': 'Glenn', …, married: false },
```

Advanced filtering via property value:

```
arr.filter(p({ age: 22  })); // [{ 'name': 'Glenn',   'age': 22, … },
                             //  { 'name': 'Stephen', 'age': 22, … }]
```

Advanced negative filtering via property value and _additional `false` parameter_:
```
arr.filter(p({ age: 22 }, false)); // [{ 'name': 'Barney',  'age': 36, … },
                                   //  { 'name': 'Fred',    'age': 40, … }]
```

## Callback pluck with `[ ].every`

```
arr.every(p('married')); // false
arr.every(p({ sex: 'male' })); // true
arr.every(p({ married: true })); // false
```

## Callback pluck with `[ ].some`

```
arr.some(p('married')); // true
arr.some(p({ married: true })); // true
arr.some(p({ name: 'Barney' })); // true
arr.some(p({ sex: 'female' })); // false
```
