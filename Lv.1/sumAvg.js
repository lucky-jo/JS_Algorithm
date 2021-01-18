function solution(arr) {
    return arr.reduce((acc, curr) => acc + curr , 0) / arr.length;
}

const arr = [1,2,3,4]

const result = solution(arr)
console.log(result)