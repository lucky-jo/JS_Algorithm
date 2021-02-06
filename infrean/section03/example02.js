function solution(s){
    s = s.toLowerCase().replace(/[^a-z]/g,'')
    reverseS = s.split('').reverse().join('')
    if( s === reverseS ) {
        return true
    } else {
        return false
    }
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));