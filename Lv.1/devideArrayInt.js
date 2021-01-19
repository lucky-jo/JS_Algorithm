function solution(arr, divisor) {
    let results = arr.filter( value => value % divisor === 0 );

    return results.length > 0 ? results.sort((a, b) => a - b) : [-1]

}

