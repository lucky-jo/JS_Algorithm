// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const str = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`

const input = str.split("\n")

const y = 'yes'
const n = 'no'
let answer = ''
for (let i = 0; i < input.length - 1; i++) {
    const result = balance(input[i])
    if (result) answer += y + '\n'
    else answer += n + '\n'

}




console.log(answer)

function balance(word) {
    stack = []

    for (let i = 0; i < word.length - 1; i++) {
        if (word[word.length - 1] === '.') {
            if (word[i] === '(') stack.push(word[i])
            else if (word[i] === ')') {
                if (stack.length === 0) return false
                else if (stack[stack.length - 1] === '(') stack.pop()
                else {
                    return false
                }
            } else if (word[i] === '[') stack.push(word[i])
            else if (word[i] === ']') {
                if (stack.length === 0) return false
                else if (stack[stack.length - 1] === '[') stack.pop()
                else {
                    return false
                }
            }
        } else {
            return false
        }
    }
    return stack.length === 0 ? true : false;

}
