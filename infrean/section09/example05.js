function solution(s, e) {
    let answer = 0
    const queue = []
    queue.push(s)
    const visited = Array.from({ length: 10001 }, () => 0)
    visited[s] = 1

    while (true) {
        let v = []
        for (const x of queue) {
            v.push(x)
        }
        for (let i = 0; i < v.length; i++) {
            for (const nx of [v[i] + 1, v[i] - 1, v[i] + 5]) {
                if (nx === e) return answer + 1
                else if (nx >= 0 && nx <= 10000 && visited[nx] === 0) {
                    visited[nx] = 1
                    queue.push(nx)
                }
            }
        }
        answer++
    }
}

console.log(solution(8, 3))