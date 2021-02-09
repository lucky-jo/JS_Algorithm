function solution(arr) {
    arr.sort( (a, b)=> a[0] - b[0])
    for(let i=0; i<arr.length-1; i++) {
        for(let j=0; j<arr.length - i - 1; j++) {
            if(arr[i][0] === arr[i+1][0] && arr[i][1] > arr[i+1][1]) {
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            }
        }
    }
    return arr;
}

let arr = [[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));