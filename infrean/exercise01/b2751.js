const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(v => Number(v))
input.shift();
input.sort((a, b) => a - b)
let answer = ''
for (const x of input) {
    answer += x + '\n'
}
console.log(answer)