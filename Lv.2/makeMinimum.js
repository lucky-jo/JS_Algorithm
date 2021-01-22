function solution(_A,_B){
    const A = _A.sort((a, b) => a - b);
    const B = _B.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < A.length; i++ ) {
        sum += A[i] * B[i];
    }

    return sum;
}

console.log(solution([1, 2, 4],[4, 4, 5]))