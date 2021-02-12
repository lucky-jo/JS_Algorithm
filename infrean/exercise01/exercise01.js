function solution(n) {
    let answer = ''
    function dfs(v = 0) {
        if (v === 0) return
        else {
            dfs(v - 1)
            answer += v + ' '
        }
    }
    dfs(n)
    return answer.trim()
}

console.log(solution(7))