function solution(s){
    s = s.split('').reduce( (a, b) => {
        if( !a[b]) {
            a[b] = 1
        } else {
            a[b] += 1
        }
        return a
    },{})
    const result = Object.entries(s).sort((a, b) => b[1] - a[1])
    return result[0][0];
}

let str="BACBACCACCBDEDE";
console.log(solution(str));