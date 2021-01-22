function solution(numbers) {
    const set1 = new Set();
    for (let i = 0; i < numbers.length-1; i++ ) {
        for (let j = i+1; j < numbers.length; j++) {
            set1.add(numbers[j]+numbers[i])
        }
    }
    return Array.from(set1.values()).sort((a, b) => a - b);
}

console.log(solution([2,1,3,4,1]))