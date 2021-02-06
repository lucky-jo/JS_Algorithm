function solution(arr) {
    const sum = arr.reduce((acc, cur) => acc + cur, 0)
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (sum - (arr[j] + arr[i]) === 100) {
                return arr.filter(value => value !== arr[j]).filter(value => value !== arr[i])
            }
        }
    }
    return arr
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));