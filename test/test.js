var p = require('..')

var equal = require('assert').equal

describe('percentage', function () {
  it('converts positive whole numbers', function () {
    equal(p(0.01), '1%')
    equal(p(0.10), '10%')
    equal(p(0.100), '10%')
    equal(p(0.12), '12%')
    equal(p(0.99), '99%')
    equal(p(1), '100%')
    equal(p(4.2), '420%')
  })

  it('converts zeroes', function () {
    equal(p(0), '0%')
    equal(p(-0), '0%')
  })

  it('converts negative whole numbers', function () {
    equal(p(-0.01), '-1%')
    equal(p(-0.10), '-10%')
    equal(p(-0.12), '-12%')
    equal(p(-0.99), '-99%')
    equal(p(-1), '-100%')
    equal(p(-4.2), '-420%')
  })

  it('rounds to whole numbers by default', function () {
    equal(p(0.002), '0%')
    equal(p(0.008), '1%')
    equal(p(0.102), '10%')
    equal(p(0.106), '11%')
    equal(p(-0.102), '-10%')
    equal(p(-0.106), '-11%')
  })

  it('lets you specify precision', function () {
    equal(p(0.123456789, 0), '12%')
    equal(p(0.123456789, 1), '12.3%')
    equal(p(0.123456789, 2), '12.35%')
    equal(p(0.123456789, 5), '12.34568%')
    equal(p(0.123456789, 7), '12.3456789%')
    equal(p(0.123456789, 8), '12.34567890%')
    equal(p(0.123456789, 10), '12.3456789000%')
  })

  it('converts strings', function () {
    equal(p('.123'), '12%')
    equal(p('0.123'), '12%')
    equal(p('-0.123'), '-12%')
  })

  it('converts Number objects without changing them', function () {
    var n = new Number(0.12) // eslint-disable-line no-new-wrappers
    equal(p(n), '12%')
    equal(n.valueOf(), 0.12)
  })

  it('converts infinity and negative infinity', function () {
    equal(p(Infinity), '∞%')
    equal(p(-Infinity), '-∞%')
  })
})
