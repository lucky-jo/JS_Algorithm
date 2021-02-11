function solution(board) {
    const n = board.length
    let answer = 0
    let visited = Array.from(Array(n), () => Array(n).fill(0));
    const dx = [1, 0, -1, 0]
    const dy = [0, 1, 0, -1]
    console.log(visited)

    function dfs(x = 0, y = 0) {
        if (visited[n - 1][n - 1] === 1) {
            answer++;
            return
        } else {
            for (let k = 0; k < dx.length; k++) {
                const nx = x + dx[k]
                const ny = y + dy[k]
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 0 && visited[nx][ny] === 0) {
                    visited[nx][ny] = 1
                    dfs(nx, ny)
                    visited[nx][ny] = 0
                }
            }
        }
    }

    visited[0][0] = 1
    dfs()


    return answer;
}

let arr = [[0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 1, 0],
[0, 0, 0, 1, 0, 0, 0],
[1, 1, 0, 1, 0, 1, 1],
[1, 1, 0, 0, 0, 0, 1],
[1, 1, 0, 1, 1, 0, 0],
[1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));