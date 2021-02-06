function solution(s) {
    // const originalLength = s.length
    // return originalLength - s.replace(/[A-Z]/g, "").length;
    return s.split('').filter(value => value === value.toUpperCase()).length
}

let str = "KoreaTimeGood";
console.log(solution(str));