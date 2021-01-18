function solution(x) {
    let copyX = x
    const tempArr = String(copyX).split('');
    const result = tempArr.reduce((acc, value) => parseInt(acc) + parseInt(value), 0);
    console.log(result)
    console.log(x)
    if ( x % result === 0 ) {
        return true
    } else {
        return false
    }
}

const arr = 10;

const results = solution(arr);

console.log(results);