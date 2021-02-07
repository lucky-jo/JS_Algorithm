function solution(arr1, arr2){
    let p1 = p2 = 0;
    const n = arr1.length
    const m = arr2.length
    let answer = [];
    while(true){
        if( n === p1 ) {
            answer.push(arr2[p2])
            p2++
        } else if( m === p2 ) {
            answer.push(arr1[p1])
            p1++;
        } else if( arr1[p1] >= arr2[p2] ) {
            answer.push(arr2[p2])
            p2++;
        } else {
            answer.push(arr1[p1])
            p1++;
        }
        if( n === p1 && m === p2 ) break
    }
    return answer
    // return [...arr1, ...arr2].sort((a, b)=> a - b)
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));