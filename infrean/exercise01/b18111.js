// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n")

const tmp = `3 4 99
0 5 0 2
0 1 0 100
8 0 0 1`


const input = tmp.split('\n')
input.shift()
const result = input.join(' ').split(' ').map(Number)
const n = result.length
const arr = Array.from({ length: n }).fill(0)

let rt = Math.max(...result)
let lt = Math.min(...result)
let middle = Math.floor((rt + lt) / 2)
let sum = 0
let min = Number.MAX_SAFE_INTEGER
let cri = 0
let answer = 0
while (lt <= rt) {
    middle = Math.floor((rt + lt) / 2)
    sum = 0
    for (let i = 0; i < result.length; i++) {
        const com = result[i] - middle
        arr[i] = com >= 0 ? com * 2 : com * 1
        sum += com >= 0 ? com * 2 : com * -1
    }
    cri = arr.reduce((acc, cur) => acc + cur, 0)
    if (cri > 0) {
        lt = middle + 1
    } else if (cri < 0) {
        rt = middle - 1
    } else {
        break
    }
    if (min > Math.abs(sum)) {
        min = Math.abs(sum)
        answer = middle
    }
}
console.log(Math.abs(min), answer)

