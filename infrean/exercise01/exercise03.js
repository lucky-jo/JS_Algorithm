function solution(n=1) {
    let answer = ''

    function dfs(v = 1) {
        if(v > 7) {
            return
        } else {
            dfs(v*2)
            dfs((v*2)+1)
            answer += v + ' '
        }

    }
    dfs()

    return answer
}

console.log(solution(7))