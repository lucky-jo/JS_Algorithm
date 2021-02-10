function solution(m, ps, pt) {
    let ch = Array.from({ length: pt.length }, (v, i) => 0)
    let answer = Number.MIN_SAFE_INTEGER

    function dfs(v = 1, timeSum = 0, score = 0) {
        if (timeSum > m) return
        if (v >= pt.length + 1) {
            if (score > answer) answer = score
            return
        } else {
            ch[v - 1] = 1
            dfs(v + 1, timeSum + pt[v - 1], score + ps[v - 1])
            ch[v - 1] = 0
            dfs(v + 1, timeSum, score)
        }
    }

    dfs()

    return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4]
console.log(solution(20, ps, pt));