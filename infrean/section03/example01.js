function solution(s) {
    s = s.toLowerCase();
    const sArr = s.split('').join('');
    const reverseS = s.split('').reverse().join('');
    if (sArr === reverseS) {
        return true
    } else {
        return false
    }
}

let str = "goooG";
console.log(solution(str));