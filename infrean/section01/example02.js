function solution(a, b, c) {
    let sum = a + b + c;
    let max;
    if (a > b) max = a;
    else max = b;
    if (max < c) max = c;
    if (sum - max > max) {
        return `Yes`
    } else {
        return `No`
    }
}

console.log(solution(13, 33, 17));