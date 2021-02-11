function solution(arr) {
    const n = arr.length
    const dy = Array.from({ length: n }, () => 0)
    dy[0] = 1
    for (let i = 1; i < arr.length; i++) {
        let tmp = -1
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] > arr[j]) {
                tmp = Math.max(tmp, dy[j])
                dy[i] = tmp + 1
            }
        }
    }
    const answer = Math.max(...dy)

    return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
// let arr = [2, 7, 5, 8, 6, 4, 7, 12, 3];
console.log(solution(arr));