function solution(s) {
    let answer = '';
    count = 0
    word = s[0];
    for (const x of s) {
        if (x === word) {
            count++;
        } else {
            answer += word + count || 1;
            word = x;
            count = 1
        }
    }
    answer += word + count || 1;

    return answer;
}

let str = "KKHSSSSSSSEEEES";
console.log(solution(str));