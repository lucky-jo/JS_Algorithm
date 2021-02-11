function solution(n, arr) {
    let g = Array.from(Array(n + 1), () => [])

    let visited = Array.from({ length: n + 1 }, () => 0)
    let answer = 0;

    for (const [a, b] of arr) {
        g[a].push(b)
    }

    function dfs(v = 0) {
        if (v === n) {
            answer++;
            return
        } else {
            for (let i = 0; i < g[v].length; i++) {
                if (visited[g[v][i]] === 0) {
                    visited[g[v][i]] = 1
                    dfs(g[v][i])
                    visited[g[v][i]] = 0
                }
            }
        }
    }

    visited[1] = 1

    dfs(1)
    return answer;
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));