// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('').map(Number)
let input = 10

let count = 0

while (input !== 1) {
    if (input % 3 === 0) { input /= 3 }
    else if (input % 3 === 1) { input -= 1 }
    else if (input % 2 === 0) { input /= 2 }
    else { input -= 1 }
    count++
}

console.log(count)