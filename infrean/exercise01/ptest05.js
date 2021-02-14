function solution(n, computers) {
    let answer = 0;
    let visited = Array.from({ length: n }, () => 0)

    function dfs(i, j) {
        if (computers[i][j] === 0) return
        else {
            computers[i][j] = 0
            for (let k = 0; k < n; k++) {
                if (computers[i][k] === 1) {
                    computers[i][k] = 0
                    dfs(k, i)
                }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (computers[i][j] === 1) {
                console.log('i, j', i, j);
                dfs(i, j)
                answer++;
            }
        }
    }


    return answer;
}

const n = 3
// const computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
const computers = [[1, 1, 0], [1, 1, 1], [0, 1, 1]]

console.log(solution(n, computers))

