function solution(size, arr) {
    let queue = new Array(size).fill(0);
    for (const x of arr) {
        let idx = queue.indexOf(x)
        if (idx === 0) {
            continue
        } else if (idx > 0) {
            queue.splice(idx, 1)
        }
        queue.unshift(x)
        if (queue.length > 5) {
            queue.pop()
        }
    }

    return queue;
}

// let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
let arr = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
// let arr = [0,0,0,0,0]
// console.log(arr.includes(2))
console.log(solution(5, arr));