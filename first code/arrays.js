"use strict";
let b = 100000000000000000;
let a = 50000000000000000;
for (let i = b; i > 1; i /= 2) {
    if (i == 3)
        continue;
    if (i == a)
        break;
    console.log(i);
}
