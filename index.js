module.exports = function(comparator, flag) {

  if (flag !== false) {
    flag = true;
  }

	if (typeof comparator === 'string') {
		return function(item) {
      if (!flag) {
        return item[comparator] === false;
      }

      return item[comparator];
    };
	}

	if (typeof comparator === 'object') {
		var key = Object.keys(comparator)[0];
		return function(item) {
      return ((item[key] === comparator[key]) === flag);
    };
	}
};
