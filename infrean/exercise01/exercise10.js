const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(v => Number(v));

const answer = input.reduce((acc, cur) => acc + Math.pow(cur, 2), 0)
console.log(answer % 10)