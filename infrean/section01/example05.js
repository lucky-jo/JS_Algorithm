function solution(arr) {
    let min = arr[0]; // Number.MAX_SAFE_INTEGER
    for (let index = 1; index < arr.length; index++) {
        if (min > arr[index]) min = arr[index];
    }
    return min;

}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));