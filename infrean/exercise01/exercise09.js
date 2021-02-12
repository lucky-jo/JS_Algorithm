function solution(n, m) {
    const arr = Array.from({length: m}, (v, i) => (i + 1) * 3)
    let visited = Array.from({length: m}, () => 0)
    let tmp = Array.from({length: n}, () => 0)
    const answer = []

    function dfs(v = 0) {
        if (v >= n) {
            answer.push(tmp.slice())
            return
        } else {
            for (let i = 0; i < m; i++) {
                if (visited[i] === 0) {
                    visited[i] = 1
                    tmp[v] = arr[i]
                    dfs(v + 1)
                    visited[i] = 0
                }
            }
        }
    }
    dfs()
    for (const x of answer) {
        console.log(x)
    }
}

solution(2, 3)