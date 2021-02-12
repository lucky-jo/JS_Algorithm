const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(v => Number(v));
// input = [1, 2, 3, 4, 5, 6, 7, 8]
// input = [8, 7, 6, 5, 4, 3, 2, 1]

if (input[0] === 1) {
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i] + 1 !== input[i + 1]) {
            console.log('mixed')
            return
        }
    }
    console.log('ascending')

} else if (input[0] === 8) {
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i] - 1 !== input[i + 1]) {
            console.log('mixed')
            return
        }
    }
    console.log('descending')
} else console.log('mixed')