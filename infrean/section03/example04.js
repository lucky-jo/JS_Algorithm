function solution(s, t) {
    let answer = new Array(s.length).fill(1);
    let idx = []
    let count = 1
    s.split('').forEach((v, i) => {
        if (v === t) {
            idx.push(i)
            answer[i] = 0
        }
    })
    for (let i = idx[0]; i < answer.length; i++) {
        if (answer[i] !== 0) {
            answer[i] = count
            count++;
        } else {
            count = 1;
        }
    }
    count = 1
    for (let i = idx[idx.length - 1]; 0 <= i; i--) {
        if (answer[i] !== 0 && count < answer[i]) {
            answer[i] = count
            count++;
        } else {
            count = 1;
        }
    }

    return answer;
}

let str = "teachermode";
console.log(solution(str, 'e'));