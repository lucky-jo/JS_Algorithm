// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const str = `4 11
802
743
457
539`

let input = str.split('\n')
let testcase = input.shift().split(' ')
const l = Number(testcase[1])
const t = Number(testcase[0])
let result = input.map(v => Number(v)).sort((a, b) => a - b)
let div = Math.ceil(result[result.length - 1] / Math.ceil(l / t))
console.log('div', div)
let sum = 0;
while (true) {
    sum = 0

    for (let x of result) {
        sum += Math.floor(x / div)
    }

    if (sum === l) break
    else --div
}

console.log(div)