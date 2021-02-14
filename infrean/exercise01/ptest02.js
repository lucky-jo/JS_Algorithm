function solution(distance, rocks, m) {
    const n = rocks.length
    rocks.sort((a, b) => a - b)
    const arr = [0,...rocks,distance]
    let lt = 0
    let rt = distance
    let answer = -1
    while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2)
        let dist = arr[0]
        let count = 1
        for (const x of arr) {
            if (x - dist >= mid) {
                dist = x
                count++
            }
        }
        if (count >= arr.length - m) {
            answer = mid
            lt = mid + 1
        } else rt = mid - 1
    }

    return answer;
}

const distance = 25;
const rocks = [2, 14, 11, 21, 17]
const n = 2

console.log(solution(distance, rocks, n))