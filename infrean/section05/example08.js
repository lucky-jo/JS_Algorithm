
function solution(s, t) {
    const tLen = t.length
    const map1 = new Map();
    const map2 = new Map();
    let count = 0
    for (const x of t) {
        map2.set(x, (map2.get(x) || 0) + 1)
    }
    for (let i = 0; i < tLen - 1; i++) {
        map1.set(s[i], (map1.get(s[i]) || 0) + 1)
    }
    for (let rt = tLen - 1; rt < s.length; rt++) {
        map1.set(s[rt], (map1.get(s[rt]) || 0) + 1)
        const result = toCompareMap(map1, map2)
        count = result ? count + 1 : count
        map1.set(s[rt - (tLen - 1)], (map1.get(s[rt - (tLen - 1)]) || 0) - 1)
    }

    return count;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));

function toCompareMap(map1, map2) {
    map1 = arangeMap(map1);
    if (map1.size !== map2.size) return false;
    for (const [k, v] of map2) {
        if (map1.get(k) !== map2.get(k)) return false;
    }
    return true
}

function arangeMap(map) {
    for (const [k, v] of map) {
        const value = map.get(k)
        if (value === 0) map.delete(k)
    }
    return map
}