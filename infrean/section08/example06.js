function solution(c, arr) {
    let answer = Number.MIN_SAFE_INTEGER
    const ch = Array.from({ length: arr.length }, (v, i) => 0)

    function dfs(v = 1, sum = 0) {
        if (sum > c) return
        if (v >= arr.length + 1) {
            if (sum <= c && sum > answer) answer = sum;
            return
        } else {
            ch[v - 1] = 1
            dfs(v + 1, sum + arr[v - 1])
            ch[v - 1] = 0
            dfs(v + 1, sum)
        }
    }

    dfs();
    return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));