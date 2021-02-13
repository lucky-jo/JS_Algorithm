// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')
const tmp = `5
0 4
1 2
1 -1
2 2
3 3`
const input = tmp.split('\n')
input.shift()
// [3 4]
const result = input.map(v => v.split(' ').map(Number)).sort(((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]
    else return a[1] - b[1]
}))

let answer = ''

for (const x of result) {
    answer += x.join(' ') + '\n'
}


console.log(answer)