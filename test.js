var p = require('./index.js');
var deepEqual = require('assert').deepEqual;
var ok = require('assert').ok;

describe('Callback pluck with', function() {
  var arr = [
    { name: 'Barney',  age: 36, sex: 'male', married: true },
    { name: 'Fred',    age: 40, sex: 'male', married: true },
    { name: 'Glenn',   age: 22, sex: 'male', married: false },
    { name: 'Stephen', age: 22, sex: 'male', married: true }
  ];

  it('[ ].map', function() {
    deepEqual(arr.map(p('name')), ['Barney', 'Fred', 'Glenn', 'Stephen']);
    deepEqual(arr.map(p('age')), [36, 40, 22, 22]);
  });

  it('[ ].filter', function() {
    deepEqual(arr.filter(p('married')), [arr[0], arr[1], arr[3]]);
    deepEqual(arr.filter(p('married', false)), [arr[2]]);

    deepEqual(arr.filter(p({ age: 22 })), [arr[2], arr[3]]);
    deepEqual(arr.filter(p({ age: 22 }, false)), [arr[0], arr[1]]);
    deepEqual(arr.filter(p({ name: 'Stephen' }, false)), [arr[0], arr[1], arr[2]]);
  });

  it('[ ].every', function() {
    ok(!arr.every(p('married')));

    ok(arr.every(p({ sex: 'male' })));
    ok(!arr.every(p({ married: true })));
  });

  it('[ ].some', function() {
    ok(arr.some(p('married')));
    ok(arr.some(p({ married: true })));
    ok(arr.some(p({ name: 'Barney' })));
    ok(!arr.some(p({ sex: 'female' })));
  });

});
