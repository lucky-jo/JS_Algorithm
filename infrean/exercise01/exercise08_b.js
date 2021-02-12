// const fs = require('fs');

// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const str = `7
pop
top
push 123
top
pop
top
pop`

let input = str.split('\n')

const testcase = input.shift()

stack = []

const answer = []

function stackX(x) {
    const copy = x.split(' ')
    if (copy[0] === 'push') {
        stack.push(copy[1])
    } else if (copy[0] === 'top') {
        if (stack.length > 0) answer.push(stack[stack.length - 1])
        else answer.push(-1)
    } else if (copy[0] === 'size') {
        answer.push(stack.length)
    } else if (copy[0] === 'empty') {
        if (stack.length > 0) answer.push(0)
        else answer.push(1)
    } else if (copy[0] === 'pop') {
        if (stack.length > 0) answer.push(stack.pop())
        else answer.push(-1)
    }
}

for (const x of input) {
    stackX(x)
}
for (const x of answer) {
    console.log(x)
}