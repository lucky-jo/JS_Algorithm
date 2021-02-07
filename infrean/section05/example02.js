function solution(arr1, arr2) {
    const set1 = new Set();
    let answer = [];
    for (const x of arr1) {
        if (set1.has(x)) answer.push(x);
        else set1.add(x);
    }
    for (const x of arr2) {
        if (set1.has(x)) answer.push(x);
        else set1.add(x);
    }
    return answer.sort((a, b)=> a - b);
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));