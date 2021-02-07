// two points
function solution(m, arr) {
    let lt = 0;
    let count = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum === m) count++;
        while (true) {
            if (sum >= m) sum -= arr[lt++]
            else break
            if( sum === m) count++;
        }
    }

    return count;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));