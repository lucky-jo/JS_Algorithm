const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const splitInput = input.split(' ')

let bignum1 = input[0].split('').map(value => Number(value) )
let bignum2 = input[1].split('').map(value => Number(value) )
let result = new Array(bignum1.length).fill(0)

for (let i = bignum1.length - 1; i >= 0; i--) {
    let temp1 = bignum1[i]
    let temp2 = bignum2[i]
    let temp3 = result[i]
    if( i === 0 ) {
        result[i] = temp1+temp2
    } else {
        if( temp1 + temp2 + temp3 > 9 ) {
            result[i] = (temp1 + temp2 + temp3) % 10
            result[i-1]++
        } else {
            result[i] = temp1 + temp2 + temp3
        }
    }
}

console.log(result.join('').toString())
18446744073709551615
18446744073709551615