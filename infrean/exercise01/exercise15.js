// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const str = `5
4 1 5 2 3
5
1 3 7 9 5`

const input = str.split('\n')
const n = Number(input[2])
const l = input[1].split(' ').map( v => Number(v))
const m = input[3].split(' ').map( v => Number(v))

const result = Array.from({ length: n}, () => 0)

const set1 = new Set();

for (const x of l) {
    set1.add(x)
}
for(let i = 0; i < n; i++) {
    if(set1.has(m[i])) result[i] = 1
}
for (const x of result) {
    console.log(x)
}