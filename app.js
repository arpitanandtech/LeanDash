import _ from "./main.js";

console.log(_.map([1, 2, 3], (n) => n * 2));

console.log(_.filter([1, 2, 3, 4], (n) => n % 2 === 0));

console.log(_.reduce([1, 2, 3], (sum, n) => sum + n, 0));

console.log(_.find([1, 2, 3, 4], (n) => n > 2));

console.log(_.sortBy([1, 4, 2, 3], (n) => n));

console.log(_.merge({ 'a': 1 }, { 'b': 2 }, { 'c': 3 }));

console.log(_.intersection([1, 2, 3], [2, 3, 4]));

console.log(_.difference([1, 2, 3], [2, 3, 4]));

console.log(_.first([1, 2, 3]));

console.log(_.last([1, 2, 3]));

console.log(_.every([2, 4, 6], (n) => n % 2 === 0));

console.log(_.take([1, 2, 3], 2));

console.log(_.some([1, 2, 3], (n) => n % 2 === 0));

console.log(_.shuffle([1, 2, 3]));

console.log(_.invert({ 'a': 1, 'b': 2 }));

console.log(_.isEmpty([]));

console.log(_.uniq([1, 2, 3, 3, 4]));

console.log(_.pick({ 'a': 1, 'b': 2 }, ['a']));

console.log(_.partition([1, 2, 3, 4], (n) => n % 2 === 0));

console.log(_.omit({ 'a': 1, 'b': 2 }, ['a']));

