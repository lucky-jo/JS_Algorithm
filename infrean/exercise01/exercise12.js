// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')
const str = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`
const input = str.split('\n')
input.shift();
const set1 = new Set();
for (const x of input) {
    set1.add(x)
}
let result = Array.from(set1).sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length
    else return a > b ? 1 : -1
})

console.log(result)



// i
// im
// it
// no
// but
// more
// wait
// wont
// yours
// cannot
// hesitate