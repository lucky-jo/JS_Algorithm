function solution(s) {
    // return s.toUpperCase()
    let answer = '';
    for (const x of s) {
        if (x === x.toUpperCase()) answer += x.toLowerCase()
        else answer += x.toUpperCase()
    }
    return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));