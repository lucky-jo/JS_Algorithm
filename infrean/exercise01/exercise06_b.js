const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// let str = `4 7
// 6 13
// 4 8
// 3 6
// 5 12`

// let input = str.trim().split('\n')

let testcase = input.shift().split(' ');
const n =  Number( testcase[0])
const limit = Number( testcase[1])
const weights = input.map(v => Number(v.split(' ')[0]))
const goods = input.map(v => Number(v.split(' ')[1]))

// const weights  = Array.from({ length: n })
// const goods  = Array.from({ length: n })

// for (let i = 0; i < input.length; i++) {
//     weights[i] = input[i][0]
//     goods[i] = input[i][2]
// }

let visited = Array.from({ length: n }, () => 0)
let max = Number.MIN_SAFE_INTEGER

function dfs(v = 0, weight = 0, good = 0) {
    if (weight > limit) return
    if (v >= n) {
        if (weight <= limit) {
            max = Math.max(max, good)
        }
        return
    } else {
        visited[v] = 1
        dfs(v + 1, weight + weights[v], good + goods[v])
        visited[v] = 0
        dfs(v + 1, weight, good)
    }
}
dfs()
console.log(max)