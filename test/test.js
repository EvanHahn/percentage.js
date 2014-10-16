var p = require('..');

var equal = require('assert').equal;

describe('percentage', function() {

  it('can convert whole-number percentages', function() {
    equal(p(0.12), '12%');
  });

});
