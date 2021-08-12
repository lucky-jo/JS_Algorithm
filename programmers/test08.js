function solution(nums) {
    const numLength = nums.length/2
    const set = new Set()
    for (const num of nums) {
        set.add(num)
    }
    return Math.min(numLength, set.size);
}

const nums = [3,3,3,2,2,2]

console.log(solution(nums))