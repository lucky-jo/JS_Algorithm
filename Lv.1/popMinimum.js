function solution(arr) {
    if(arr.length <= 1 ) {
        return Array.of(-1); 
    }
    const temp = arr[0];
    const min = arr.reduce( (acc, cur) => { 
        return Math.min(parseInt(acc), parseInt(cur))},parseInt(temp) );
    arr.splice( arr.indexOf(min),1);
    return arr;
}

let array = [4,3,2,1]

const result = solution(array)
console.log(result)