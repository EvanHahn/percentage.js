export default function percentage(n, precision = 0) {
  let number;
  if (n === Infinity) {
    number = "∞";
  } else if (n === -Infinity) {
    number = "-∞";
  } else {
    number = (Number(n) * 100).toFixed(precision);
  }
  return number + "%";
}
