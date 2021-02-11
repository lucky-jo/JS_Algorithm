function solution(board) {
    let n = board.length
    const dx = [1, 1, 0, -1, -1, -1, 0, 1]
    const dy = [0, 1, 1, 1, 0, -1, -1, -1]
    let answer = 0
    let queue = []

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                answer++;
                board[i][j] = 0;
                queue.push([i, j])
                while (queue.length) {
                    let v = queue.shift()
                    for (let k = 0; k < dx.length; k++) {
                        const nx = v[0] + dx[k]
                        const ny = v[1] + dy[k]
                        if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
                            board[nx][ny] = 0
                            queue.push([nx, ny])
                        }
                    }
                }
            }
        }
    }

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