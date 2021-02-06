function solution(arr) {
    let answer = []
    answer.push(arr[0])
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                answer.push(arr[j])
                i = j - 1
                break
            }
        }
    }
    return answer.length;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));