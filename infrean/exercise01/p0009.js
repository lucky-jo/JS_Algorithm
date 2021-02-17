function solution(bridge_length, weight, truck_weights) {
    let count = 0;
    let onBridge = Array.from({ length: bridge_length }, () => 0)

    while (true) {
        onBridge.shift();
        count++;
        let sum = onBridge.reduce((acc, cur) => acc + cur, 0)
        if (!truck_weights.length && sum === 0) break;
        if (sum + truck_weights[0] <= weight) {
            onBridge.push(truck_weights.shift());
        } else {
            onBridge.push(0)
        }
    }

    return count;
}

let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6]

console.log(solution(bridge_length, weight, truck_weights));