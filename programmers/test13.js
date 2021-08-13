function solution(s) {
    let count = 0

    for (let i = 0; i < s.length; i++) {
        const first = s[0]
        const left = s.slice(1)
        s = left + first
        validate(s)
    }

    function validate(values) {
        const stack = []
        for (const value of values) {
            if( value === '[' || value === '(' || value === '{') {
                stack.push(value)
            } else if( stack.length) {
                if( stack[stack.length-1] === '[' && value === ']') {
                    stack.pop()
                } else if( stack[stack.length-1] === '(' && value === ')') {
                    stack.pop()
                } else if( stack[stack.length-1] === '{' && value === '}') {
                    stack.pop()
                } else {
                    return
                }
            } else {
                return;
            }
        }
        if( !stack.length ) {
            count++;
        }
    }

    return count;
}

const s = "[](){}"

console.log(solution(s))