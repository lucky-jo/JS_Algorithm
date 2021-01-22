function solution(numbers) {
    
    const result = numbers.map(c=> c + '').
                    sort((a,b) => (b+a) - (a+b)).join('');
    console.log(result);
    
    return result[0]==='0'? '0' : result;
}