function solution(board) {
    let n = board.length
    const dx = [1, 1, 0, -1, -1, -1, 0, 1]
    const dy = [0, 1, 1, 1, 0, -1, -1, -1]
    let answer = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1 ) {
                answer++;
                dfs(i, j)
            }
        }
    }

    function dfs(x = 0, y = 0) {
        board[x][y] = 0
        for (let i = 0; i < dx.length; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
                board[nx][ny] = 0
                dfs(nx, ny)
            }
        }
    }
    console.log(board.toString())
    return answer;
}

let arr = [[1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0]];

console.log(solution(arr));