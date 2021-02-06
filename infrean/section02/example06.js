function solution(arr) {
    const sumArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const result = arr[i].reduce((a, c) => a + c, 0);
        sumArr.push(result);
        for (let j = 0; j < arr.length; j++) {
            sum += arr[j][i]
        }
        sumArr.push(sum);
        sum = 0;
        for (let k = 0; k < arr.length; k++) {
            if (i === k) sum += arr[i][k]
        }
        sumArr.push(sum);
        sum = 0;
        for (let l = arr.length - 1; 0 <= l; l--) {
            if (i + l === 4) sum += arr[i][l]
        }
        sumArr.push(sum);
        sum = 0;
    }

    return Math.max(...sumArr);
}

let arr = [[10, 13, 10, 12, 15],
[12, 39, 30, 23, 11],
[11, 25, 50, 53, 15],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19]];

console.log(solution(arr));