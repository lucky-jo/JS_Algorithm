const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(v => v.split(' ').sort((a, b) => a - b))

const r = 'right'
const w = 'wrong'

let answer = ''

for (let i = 0; i < input.length - 1; i++) {
    if (Math.pow(input[i][0], 2) + Math.pow(input[i][1], 2) === Math.pow(input[i][2], 2)) answer += r + '\n'
    else answer += w + '\n'
}

console.log(answer)



