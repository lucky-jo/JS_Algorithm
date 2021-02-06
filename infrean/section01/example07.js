function solution(day, arr) {
    let count = 0;
    for (const x of arr) {
        if (x % 10 === day) count++;
    }
    return count;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));