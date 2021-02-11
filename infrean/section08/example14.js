function solution(n, m) {
    const arr = Array.from({ length: n }, (v, i) => (i + 1))
    const visited = Array.from({ length: n }, () => 0)
    const tmp = Array.from({ length: m }, () => 0)


    function dfs(v = 0,s = 1) {
        if (v >= m) {
            console.log(tmp)
        } else {
            for (let i = s; i <= arr.length; i++) {
                tmp[v] = arr[i-1]
                dfs(v+1,i+1)
            }
        }
    }
    dfs()

    return true;
}

console.log(solution(4, 2));