function solution(n) {

    let arr =[]
    for(let i = 1; i <= n; i++) {
        arr.push(i)
    }
    for(let i = 1; i * i < n; i++) {
        if(arr[i]) {
            let num = arr[i]
            for(let j = num*num; j<= n; j += num ) {
                arr[j-1] = 0;
            }
        } 
        
    }

    const answer = arr.filter( value => value);
    console.log(answer)
    return answer.length-1;
}

console.log(solution(10))