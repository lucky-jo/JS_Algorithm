function solution(n, k, arr, m) {
    let count = 0;
    const tmp = Array.from({ length: 3 }, () => 0)

    function dfs(v = 0, s = 1, sum = 0) {
        if (v === k) {
            if (sum % m === 0) {
                count++
                console.log(tmp)
            }
        } else {
            for (let i = s; i < arr.length; i++) {
                tmp[v] = arr[i - 1]
                dfs(v + 1, i + 1, sum + arr[i - 1])
            }
        }
    }

    dfs()
    return count;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));