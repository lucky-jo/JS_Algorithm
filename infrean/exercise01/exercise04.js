function solution(n) {
    let arr = Array.from({ length: n }, (v, i) => i + 1)
    let visited = Array.from({ length: n }, () => 0)

    function dfs(v = 0) {
        if (v >= n) {
            let answer = ''
            for (let i = 0; i < n; i++) {
                if (visited[i] === 1) answer += arr[i] + ' '
            }
            if (answer.length > 0) console.log(answer)
            return
        } else {
            visited[v] = 1
            dfs(v + 1)
            visited[v] = 0
            dfs(v + 1)
        }
    }
    dfs()

    return true

}

solution(3)