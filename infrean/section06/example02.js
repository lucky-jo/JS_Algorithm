function solution(s) {
    let idxs = []
    stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i])
            idxs.push(stack.length - 1)
        } else if (s[i] === ')') {
            stack.splice(idxs[idxs.length - 1],)
            idxs.pop()
        } else stack.push(s[i])
    }
    return stack.join('');
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));