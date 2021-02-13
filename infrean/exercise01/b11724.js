// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const str = `26
add 1
add 2
check 1
check 2
check 3
remove 2
check 1
check 2
toggle 3
check 1
check 2
check 3
check 4
all
check 10
check 20
toggle 10
remove 20
check 10
check 20
empty
check 1
toggle 1
check 1
toggle 1
check 1`

let input = str.split('\n').map(v => v.split(' ').map(v => isNaN(v) ? v : Number(v)))
const n = Number(input.shift())

const arr = Array.from({ length: n + 1 }, () => 0)
answer = ''

for (const x of input) {
    if (x[0] === 'add') arr[x[1]] = 1
    else if (x[0] === 'remove') arr[x[1]] = 0
    else if (x[0] === 'check') arr[x[1]] ? answer += 1 + '\n' : answer += 0 + '\n'
    else if (x[0] === 'toggle') arr[x[1]] ? arr[x[1]]-- : arr[x[1]]++
    else if (x[0] === 'all') all()
    else if (x[0] === 'empty') empty()
}

function all() {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 1
    }
}

function empty() {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0
    }
}

console.log(answer)
