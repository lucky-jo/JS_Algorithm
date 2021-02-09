function solution(need, plan) {
    let idxs = []
    for (const x of need) {
        idxs.push(plan.indexOf(x))
    }
    for(let i = 1; i < idxs.length; i++) {
        if( idxs[i-1] >= idxs[i]) return false
    }

    return true;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));