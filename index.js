var simplePluck = function(comparator, negative, item) {
  if (negative) {
    return item[comparator] === false;
  }

  return item[comparator];
};

var objectPluck = function(comparator, negative, key, item) {
  if (negative) {
    return item[key] !== comparator[key];
  }

  return item[key] === comparator[key];
};

module.exports = function(comparator, flag) {
  var negative = (flag === false);

  if (typeof comparator === 'string') {
    return simplePluck.bind(this, comparator, negative);
  }

  var key = Object.keys(comparator)[0];
  return objectPluck.bind(this, comparator, negative, key);
};
