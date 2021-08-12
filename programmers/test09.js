function solution(s) {
    const result = []
    while (s.length) {

        if (s.startsWith('zero')) {
            result.push(0)
            s = s.slice(4)
        } else if (s.startsWith('one')) {
            result.push(1)
            s = s.slice(3)
        } else if (s.startsWith('two')) {
            result.push(2)
            s = s.slice(3)
        } else if (s.startsWith('three')) {
            result.push(3)
            s = s.slice(5)

        } else if (s.startsWith('four')) {
            result.push(4)
            s = s.slice(4)

        } else if (s.startsWith('five')) {
            result.push(5)
            s = s.slice(4)

        } else if (s.startsWith('six')) {
            result.push(6)
            s = s.slice(3)

        } else if (s.startsWith('seven')) {
            result.push(7)
            s = s.slice(5)

        } else if (s.startsWith('eight')) {
            result.push(8)
            s = s.slice(5)

        } else if (s.startsWith('nine')) {
            result.push(9)
            s = s.slice(4)

        } else {
            result.push(s[0])
            s = s.slice(1)
        }
    }

    return Number(result.join(''));
}

console.log(solution('one4seveneight'))