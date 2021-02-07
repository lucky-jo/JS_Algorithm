function solution(s) {
    const map1 = new Map();
    for (const x of s) {
        map1.set(x, (map1.get(x) || 0) + 1)
    }
    let answer
    let max = Number.MIN_SAFE_INTEGER
    for (const [k,v] of map1) {
        if( max < v) {
            max = v
            answer = k
        }
    }
    
    // const answer = Array.from(map1).sort((a, b) => b[1] - a[1])
    return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));