function solution(arr) {
    const copy = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        copy[i] = arr[i]
    }
    arr.sort()
    const answer = []
    for (let i = 0; i < arr.length; i++) {
        if (copy[i] !== arr[i]) answer.push(i + 1)
        if (answer.length === 2) break
    }
    return answer;
}

// let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));

const arr1 = []