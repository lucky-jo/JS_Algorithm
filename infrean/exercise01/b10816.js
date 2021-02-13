// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n")

const str = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`

const input = str.split('\n')

const arr1 = input[1].split(" ")
const arr2 = input[3].split(" ")

const map1 = new Map();

let answer = []

for (const x of arr1) {
    map1.set(x, (map1.get(x) || 0) + 1)
}

for (const x of arr2) {
    answer.push(map1.get(x) || 0)
}

console.log(answer.join(" "))