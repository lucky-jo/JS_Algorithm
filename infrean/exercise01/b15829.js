const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n")



let sum = 0

for (let i = 0; i < input[1].length; i++) {
    sum += (input[1][i].charCodeAt() % 96) * Math.pow(31, i)
}

console.log(sum)