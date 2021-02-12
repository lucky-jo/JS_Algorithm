function solution(m, arr) {
    let answer
    let dy = Array.from({ length: m + 1 }, () => 0)
    for (let i = 0; i < arr.length; i++) {
        for (let j = m; j >= arr[i][1]; j--) {
            dy[j] = Math.max(dy[j], arr[i][0] + dy[j - arr[i][1]])
        }
    }

    return dy[m];
}

let arr = [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
console.log(solution(20, arr));