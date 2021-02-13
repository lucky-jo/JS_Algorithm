// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')
const str = `3 16`

const input = str.split(' ').map(v => Number(v))

const set1 = new Set();

for (let i = input[0]; i <= input[1]; i++) {
    if (isPrime(i)) set1.add(i)
}

const result = Array.from(set1)

for (const x of result) {
    console.log(x)
}

function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    return true;
}