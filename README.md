# Percentage.js

A simple function to convert numbers to string percentages.

```javascript
import percentage from "percentage";

percentage(0.12); // "12%"
percentage(1); // "100%"
percentage(-0.1); // "-10%"
percentage(1 / 3); // "33%"

percentage(0.1234); // "12%"
percentage(0.1234, 0); // "12%"
percentage(0.1234, 1); // "12.3%"
percentage(0.1234, 2); // "12.34%"

percentage(Infinity); // "∞%"
```
