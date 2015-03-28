require('should');
var p = require('./index.js');

describe('Callback pluck with', function() {
  var arr = [
    { name: 'Barney',  age: 36, sex: 'male', married: true },
    { name: 'Fred',    age: 40, sex: 'male', married: true },
    { name: 'Glenn',   age: 22, sex: 'male', married: false },
    { name: 'Stephen', age: 22, sex: 'male', married: true }
  ];

  it('[ ].map', function() {
    arr.map(p('name')).should.eql(['Barney', 'Fred', 'Glenn', 'Stephen']);
    arr.map(p('age')).should.eql([36, 40, 22, 22]);
  });

  it('[ ].filter', function() {
    arr.filter(p('married')).should.eql([arr[0], arr[1], arr[3]]);
    arr.filter(p('married', false)).should.eql([arr[2]]);

    arr.filter(p({ age: 22 })).should.eql([arr[2], arr[3]]);
    arr.filter(p({ age: 22 }, false)).should.eql([arr[0], arr[1]]);
    arr.filter(p({ name: 'Stephen' }, false)).should.eql([arr[0], arr[1], arr[2]]);
  });

  it('[ ].every', function() {
    arr.every(p('married')).should.false;

    arr.every(p({ sex: 'male' })).should.true;
    arr.every(p({ married: true })).should.false;
  });

  it('[ ].some', function() {
    arr.some(p('married')).should.true;
    arr.some(p({ married: true })).should.true;
    arr.some(p({ name: 'Barney' })).should.true;
    arr.some(p({ sex: 'female' })).should.false;
  });

});
