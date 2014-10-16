Percentage.js
=============

A simple function to convert numbers to string percentages.

```js
percentage(0.12)  // "12%"
percentage(1)     // "100%"
percentage(-0.1)  // "-10%"
percentage(1/3)   // "33%"

percentage(0.1234)     // "12%"
percentage(0.1234, 0)  // "12%"
percentage(0.1234, 1)  // "12.3%"
percentage(0.1234, 2)  // "12.34%"

percentage(Infinity)  // "∞%"
```

In Node or Browserify or Webpack:

```js
var percentage = require("percentage")
percentage(0.42)  // "42%"
```

In the browser:

```html
<script src="percentage.js"></script>
<script>
percentage(0.89)  // "89%"
</script>
```

Enjoy!
