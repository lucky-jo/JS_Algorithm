function solution(arr) {
    let beforeCount = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            sum += arr[i] + beforeCount
            beforeCount++;
        } else {
            beforeCount = 0
        }
    }
    return sum;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));