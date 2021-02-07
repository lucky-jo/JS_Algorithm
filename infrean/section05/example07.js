function solution(str1, str2) {
    const map1 = new Map();
    for (const x of str1) {
        map1.set(x, (map1.get(x) || 0)+1);
    }
    for (const x of str2) {
        map1.set(x, (map1.get(x) || 0)-1);
    }

    for (const [k,v] of map1) {
        if( v !== 0) return false
    }
    return true;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));