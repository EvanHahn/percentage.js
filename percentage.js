(function() {

  function percentage(n, precision) {
    var number;
    if (n === Infinity) {
      number = '∞';
    } else if (n === -Infinity) {
      number = '-∞';
    } else {
      number = (Number(n) * 100).toFixed(precision || 0);
    }
    return number + '%';
  }

  if (typeof module !== 'undefined') {
    module.exports = percentage;
  } else {
    this.percentage = percentage;
  }

})();
