(function() {

  function percentage(n, precision) {
    precision = precision || 0;
    return (Number(n) * 100).toFixed(precision) + '%';
  }

  if (typeof module !== 'undefined') {
    module.exports = percentage;
  } else {
    this.percentage = percentage;
  }

})();
