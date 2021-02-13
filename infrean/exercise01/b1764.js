// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const str = `3 4
ohhenrie
charlie
baesangwook
obama
ohhenrie
baesangwook
clinton`

const input = str.split('\n')
let [n, m] = input[0].split(' ').map(Number)


const set1 = new Set();

for (let i = 1; i <= n; i++) {
    set1.add(input[i]);
}

let count = 0;
let answer = ''

const p = []

for (let i = n + 1; i < input.length; i++) {
    if (set1.has(input[i])) p.push(input[i])
}

p.sort((a, b) => {
    if( a < b) return -1
})

for (const x of p) {
    answer += x + '\n'
}


console.log(p.length + '\n' + answer)