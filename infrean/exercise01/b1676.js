let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('')
input = Number(input)

let count = 0;

while (input >= 5) {
    count += Math.floor(input / 5)
    input = Math.floor(input / 5);
}

console.log(count)