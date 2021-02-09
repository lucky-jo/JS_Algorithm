function solution(times) {
    const timeLine = new Array(72).fill(0);
    for (const x of times) {
        for (let i = x[0]; i < x[1]; i++) {
            timeLine[i]++
        }
    }
    console.log(timeLine)
    return Math.max(...timeLine);
}

let arr = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14], [71, 72]];
console.log(solution(arr));