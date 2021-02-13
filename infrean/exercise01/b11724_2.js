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

const set1 = new Set();
answer = ''

for (const x of input) {
    if (x[0] === 'add') set1.add(x[1])
    else if (x[0] === 'remove') set1.delete(x[1])
    else if (x[0] === 'check') set1.has(x[1]) ? answer += 1 + '\n' : answer += 0 + '\n'
    else if (x[0] === 'toggle') set1.has(x[1]) ? set1.delete(x[1]) : set1.add(x[1])
    else if (x[0] === 'all') all(n)
    else if (x[0] === 'empty') empty()
}

function all(n) {
    for (let i = 1; i <= n; i++) {
        set1.add(i)
    }
}

function empty(n) {
    set1.clear();
}

console.log(answer)
