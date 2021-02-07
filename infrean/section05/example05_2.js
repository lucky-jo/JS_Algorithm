// slide window
function solution(k, arr) {
    let max = Number.MIN_SAFE_INTEGER
    let lt = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if( i - lt === k-1) {
            if(sum > max) max = sum
            sum -= arr[lt++]
        }
    }
    return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));