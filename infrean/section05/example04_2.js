// two points

function solution(m, arr) {
    let count = lt = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        while (sum > m) {
            sum -= arr[lt++]
        }
        count += i - lt + 1
    }
    return count;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));