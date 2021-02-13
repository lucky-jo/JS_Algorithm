const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split(" ").map(Number)
// input = [7, 3]
const n = input[0]
const k = input[1]
const arr = Array.from({ length: n }, (v, i) => i + 1)
const result = [];
while (arr.length) {
    for (let i = 0; i < k - 1; i++) {
        arr.push(arr.shift())
    }
    result.push(arr.shift())
}
let answer = '<' + result.join(', ') + '>'
console.log(answer)