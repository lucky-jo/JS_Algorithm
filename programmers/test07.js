function solution(scores) {
    const studentLength = scores.length;
    const avgScores = [];
    const results = [];

    for (let i = 0; i < studentLength; i++) {
        let selfScore = 0;
        let maxScore = Number.MIN_SAFE_INTEGER
        let minScore = Number.MAX_SAFE_INTEGER
        const revievedScores = [];

        for (let j = 0; j < studentLength; j++) {
            if (i === j) {
                selfScore = scores[j][i]
            }

            maxScore = Math.max(maxScore, scores[j][i])
            minScore = Math.min(minScore, scores[j][i])

            revievedScores.push(scores[j][i])
        }
        let filterResult = 0;
        if (selfScore === maxScore || selfScore === minScore) {
            filterResult = revievedScores.filter(r => r === selfScore)
        }
        const sum = (revievedScores.reduce((a, b) => a + b, 0))
        if (filterResult.length === 1) {
            avgScores.push((sum - selfScore) / (studentLength - 1))
        } else {
            avgScores.push(sum / studentLength)
        }
    }
    for (const avg of avgScores) {
        if (avg >= 90) results.push(`A`)
        else if (avg >= 80) results.push(`B`)
        else if (avg >= 70) results.push(`C`)
        else if (avg >= 50) results.push(`D`)
        else results.push('F')
    }

    return results.join('');
}

// const scores = [[100, 90, 98, 88, 65], [50, 45, 99, 85, 77], [47, 88, 95, 80, 67], [61, 57, 100, 80, 65], [24, 90, 94, 75, 65]]
const scores = [[50, 90], [50, 87]]
console.log(solution(scores))