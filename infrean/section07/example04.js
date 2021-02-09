function solution(arr) {
    console.log(arr.length);
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > temp) arr[j + 1] = arr[j];
            else {
                arr[j + 1] = temp;
                break
            }
            arr[j] = temp
        }
    }
    return arr;
}

let arr = [11, 712, 13, 134, 4, 2, 1, 12, 14, 15, 6, 10, 9];
console.log(solution(arr));