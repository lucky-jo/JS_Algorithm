function solution(s, t) {
    let count = 0;
    for (const x of s) {
        if (x === t) count++;
    }
    return count;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));