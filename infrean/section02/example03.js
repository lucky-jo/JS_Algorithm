function solution(a, b) {
    let aCount = 0;
    let bCount = 0;
    for (let i = 0; i < a.length; i++) {
        if(a[i] === b[i]) {
            continue;
        } else if(a[i] % 3 +1 === b[i] % 3) {
            bCount++;
        } else {
            aCount++;
        }
    }
    return [aCount, bCount];
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));