// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const str = `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`

let input = str.split('\n')
const n = input.shift()
let answer = ''
const queue = []
input = input.map(v => v.split(' '))

for (const x of input) {
    if (x[0] === 'push') queue.unshift(x[1])
    else if (x[0] === 'front') answer += (queue[queue.length - 1] || -1) + '\n'
    else if (x[0] === 'back') answer += (queue[0] || -1) + '\n'
    else if (x[0] === 'pop') {
        if (queue.length) answer += (queue.shift() + '\n')
        else answer += (-1 + '\n')
    }
    else if (x[0] === 'empty') queue.length ? (answer += 0 + '\n') : (answer += 1 + '\n')
    else if (x[0] === 'size') answer += (queue.length + '\n')
}

console.log(answer)