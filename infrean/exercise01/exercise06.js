function solution(limit, weights, goods) {
    const n = weights.length
    let visited = Array.from({ length: n }, () => 0)
    let max = Number.MIN_SAFE_INTEGER
    let count = 0

    function dfs(v = 0, weight = 0, good = 0) {
        count++;
        if( weight > limit) return
        if (v >= n) {
            if( weight <= limit) {
                max = Math.max(max,good)
            }
            return
        } else {
            visited[v] = 1
            dfs(v + 1, weight + weights[v], good + goods[v])
            visited[v] = 0
            dfs(v + 1, weight, good)
        }
    }
    dfs()
    console.log(count)
    return max

}
const weights = [6, 4, 3, 5]
const goods = [13, 8, 6, 12]

console.log(solution(7, weights, goods))