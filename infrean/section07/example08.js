function solution(meeting) {
    meeting.sort((a, b) => a[0] - b[0])
    let count = 0
    let max = 0
    let pre = 0
    for (let i = 0; i < arr.length; i++) {
        count = 1
        pre = 0
        temp = []
        for (let j = i; j < arr.length; j++) {
            if (pre === 0) {
                pre = arr[j][1]
            }
            else if (arr[j][0] >= pre) {
                pre = arr[j][1]
                count += 1;
            }
        }
        if (max < count) max = count;
    }

    return max;
}

let arr = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
// let arr = [[3, 3], [1, 3], [2, 3]];
console.log(solution(arr));