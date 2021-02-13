// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n")

const str = `3
21 Junkyu
21 Dohyun
20 Sunyoung`

const input = str.split("\n")

input.shift()

const result = input.map(v => v.split(' '))

console.log(result)

result.sort((a, b) => {
    if (a[0] < b[0]) return a[0] - b[0]
    else if (a[0] > b[0]) return b[0] - a[0]
    else return a[1] < b[1] ? 1 : -1
})

let answer = ''
for (const x of result) {
    answer += x.join(' ') + '\n'
}

console.log(answer)