function solution(progresses, speeds) {
    let answer = [];
    let onProgress = []
    while (progresses.length) {
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i]
        }

        for (let i = 0; i < progresses.length; i++) {
            if (progresses[i] >= 100) onProgress.push(progresses[i].shift())
            else break
        }
        answer.push(onProgress.length)
        onProgress = []
    }
    return answer;
}

let progresses = [93, 30, 55]
let speeds = [1, 30, 5]

console.log(solution(progresses, speeds))