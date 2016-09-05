(function () {
  function percentage (n, precision) {
    var number
    if (n === Infinity) {
      number = '∞'
    } else if (n === -Infinity) {
      number = '-∞'
    } else {
      number = (Number(n) * 100).toFixed(precision || 0)
    }
    return number + '%'
  }

  if (typeof module === 'undefined') {
    this.percentage = percentage
  } else {
    module.exports = percentage
  }
})()
