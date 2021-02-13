// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const str = `3
0
1
3`

const arr = Array.from({ length: 41 }, () => Array(2).fill(0))
arr[0] = [1, 0]
arr[1] = [0, 1]

const input = str.split('\n')

let answer = ''
// for (let i = 1; i < input.length; i++) {

// }

function fiboCount(n) {
    for (let i = 2; i <= n; i++) {
        arr[i] = [arr[i - 1][0] + arr[i - 2][0], arr[i - 1][1] + arr[i - 2][1]]
    }
}

fiboCount(10);
console.log(arr)