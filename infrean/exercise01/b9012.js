// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const str = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`

const input = str.split("\n")

const y = 'YES'
const n = 'NO'
let answer = ''
for (let i = 1; i < input.length; i++) {
    const result = balance(input[i])
    if (result) answer += y + '\n'
    else answer += n + '\n'

}




console.log(answer)

function balance(word) {
    stack = []

    for (let i = 0; i < word.length; i++) {
        if (word[i] === '(') stack.push(word[i])
        else if (word[i] === ')') {
            if (stack.length === 0) return false
            else if (stack[stack.length - 1] === '(') stack.pop()
            else {
                return false
            }
        }
    }
    return stack.length === 0 ? true : false;

}


const str = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`

const input = str.split("\n")

const y = 'YES'
const n = 'NO'
let answer = ''
for (let i = 1; i < input.length; i++) {
    const result = balance(input[i])
    if (result) answer += y + '\n'
    else answer += n + '\n'

}




console.log(answer)

function balance(word) {
    stack = []

    for (let i = 0; i < word.length; i++) {
        if (word[i] === '(') stack.push(word[i])
        else if (word[i] === ')') {
            if (stack.length === 0) return false
            else if (stack[stack.length - 1] === '(') stack.pop()
            else {
                return false
            }
        }
    }
    return stack.length === 0 ? true : false;

}
