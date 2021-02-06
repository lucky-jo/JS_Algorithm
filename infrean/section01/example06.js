function solution(arr) {
    let answer = []
    let sum = 0;
    let odd = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
            odd.push(arr[i]);
        }
    }
    answer.push(sum);
    answer.push(Math.min(...odd))
    return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));