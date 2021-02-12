// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')
const str = `121
1231
12421
0`
const input = str.split('\n')
input.pop()
console.log(input)
for (const x of input) {
    const copyX = x.split('').reverse().join('')
    if( x === copyX ) console.log('yes')
    else console.log('no')
}