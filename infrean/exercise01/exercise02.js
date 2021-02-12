function solution(n) {
    let answer = ''

    function dfs(v = 0) {
        if (v <= 1) {
            answer += v % 2
            return
        }
        else {
            dfs(parseInt(v / 2))
            answer += v % 2
        }
    }

    dfs(n)

    return answer


}

console.log(solution(31))