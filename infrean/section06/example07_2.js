function solution(need, plan) {
    let queue = Array.from(need)
    for (const x of plan) {
        if (x === queue[0]) queue.shift();
    }
    return queue.length === 0 ? true : false;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));