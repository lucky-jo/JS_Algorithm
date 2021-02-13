const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n").map(Number);

stack = []

for (let i = 1; i < input.length; i++){
    if( input[i] > 0) stack.push(input[i])
    else stack.pop()
}

console.log(stack.reduce((acc, cur)=> acc + cur, 0))