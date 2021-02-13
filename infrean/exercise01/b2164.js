const input = require("fs").readFileSync("/dev/stdin").toString().trim()

// const str = `1`
// const input = Number(str)
const n = Number(input)

const arr = Array.from({ length: n }, (v, i) => i + 1)

while (arr.length !== 1) {
    arr.shift()
    const v = arr.shift()
    arr.push(v)
}

console.log(arr[0])