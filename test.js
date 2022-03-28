var percentage = require(".");
var assert = require("assert");

[
  [0.01, "1%"],
  [0.1, "10%"],
  [0.1, "10%"],
  [0.12, "12%"],
  [0.99, "99%"],
  [1, "100%"],
  [4.2, "420%"],
  [0, "0%"],
  [-0, "0%"],
  [-0.01, "-1%"],
  [-0.1, "-10%"],
  [-0.12, "-12%"],
  [-0.99, "-99%"],
  [-1, "-100%"],
  [-4.2, "-420%"],
  [0.002, "0%"],
  [0.008, "1%"],
  [0.102, "10%"],
  [0.106, "11%"],
  [-0.102, "-10%"],
  [-0.106, "-11%"],
  [".123", "12%"],
  ["0.123", "12%"],
  ["-0.123", "-12%"],
  [Infinity, "∞%"],
  [-Infinity, "-∞%"],
].forEach(function (testCase) {
  var input = testCase[0];
  var expected = testCase[1];
  assert.strictEqual(percentage(input), expected);
});

assert.strictEqual(percentage(0.123456789, 0), "12%");
assert.strictEqual(percentage(0.123456789, 1), "12.3%");
assert.strictEqual(percentage(0.123456789, 2), "12.35%");
assert.strictEqual(percentage(0.123456789, 5), "12.34568%");
assert.strictEqual(percentage(0.123456789, 7), "12.3456789%");
assert.strictEqual(percentage(0.123456789, 8), "12.34567890%");
assert.strictEqual(percentage(0.123456789, 10), "12.3456789000%");

var n = new Number(0.12); // eslint-disable-line no-new-wrappers
percentage(n);
assert.strictEqual(n.valueOf(), 0.12);
