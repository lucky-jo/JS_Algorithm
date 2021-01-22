function solution(numbers, _k) {
    const stack = [];
    let k = _k

    for (let i = 0; i < numbers.length; i++ ) {
        while( k > 0 && stack[stack.length -1] < numbers[i] ) {
            stack.pop();
            --k;
        }
        stack.push(numbers[i]);
    }
    stack.splice(stack.length-k,k)
    return `${stack.join('')}`
  }


  console.log(solution("4177252841",4))