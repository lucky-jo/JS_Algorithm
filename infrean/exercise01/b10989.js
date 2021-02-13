const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number)

const n = input.shift()

const arr = Array.from({ length: 10001 }, (v, i) => i + 1)

input.forEach(v => {
    arr[v]++
})

let answer = ''
for (let i = 1; i <= arr.length; i++) {
    while (arr[i] > 0) {
        arr[i]--
        answer += arr[i] + '\n'
    }
}

console.log(answer)