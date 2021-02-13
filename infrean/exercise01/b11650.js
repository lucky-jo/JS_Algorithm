// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')
const tmp = `5
3 4
1 1
1 -1
2 2
3 3`
const input = tmp.split('\n')
input.shift()
// [3 4]
const result = input.map(v => v.split(' ').map(Number)).sort(((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]
    else return a[0] - b[0]
}))

let answer = ''

for (const x of result) {
    answer += x.join(' ') + '\n'
}


console.log(answer)