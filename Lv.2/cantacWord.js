function solution(n, words) {
    let nowIndex = 0;
    let lastWord = null;
    let firstWord = null;
    const set1 = new Set();

    lastWord = words[0].charAt(words[0].length - 1);
    set1.add(words[0]);

    for (let i = 1; i < words.length; i++) {
        if( set1.has(words[i]) ) {
            nowIndex = i;
            break;
        } else {
            set1.add(words[i]);
        }

        firstWord = words[i].charAt(0);
        if( lastWord === firstWord) {
            lastWord = words[i].charAt(words[i].length - 1);
        } else {
            nowIndex = i;
            break;
        }
    }
    if( nowIndex === 0 ) {
        return [0,0]
    }
    var answer = [(nowIndex%n)+1 ,Math.floor((nowIndex/n)+1)];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다. 
    console.log('Hello Javascript')

    return answer;
}

console.log(solution(5, ['hello', 'observe', 'effect', 'take', 'either', 'recognize', 'encourage', 'ensure', 'establish', 'hang', 'gather', 'refer', 'reference', 'estimate', 'executive']))