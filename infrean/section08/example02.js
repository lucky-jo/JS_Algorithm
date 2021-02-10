function solution(n) {
    let answer = []
    DFS(n, answer)
    return answer.join('');
}

console.log(solution(4));

function DFS(n, array) {
    if (n === 0) return
    else {
        array.unshift(n % 2)
        n = parseInt(n / 2)
        DFS(n, array)
    }
}