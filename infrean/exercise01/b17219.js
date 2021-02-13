// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const str = `16 4
noj.am IU
acmicpc.net UAENA
startlink.io THEKINGOD
google.com ZEZE
nate.com VOICEMAIL
naver.com REDQUEEN
daum.net MODERNTIMES
utube.com BLACKOUT
zum.com LASTFANTASY
dreamwiz.com RAINDROP
hanyang.ac.kr SOMEDAY
dhlottery.co.kr BOO
duksoo.hs.kr HAVANA
hanyang-u.ms.kr OBLIVIATE
yd.es.kr LOVEATTACK
mcc.hanyang.ac.kr ADREAMER
startlink.io
acmicpc.net
noj.am
mcc.hanyang.ac.kr`

const input = str.split('\n')
const [n, m] = input[0].split(' ').map(Number)

const map1 = new Map();

for (let i = 1; i <= n; i++) {
    const [k, v] = input[i].split(' ')
    map1.set(k, v);
}

let answer = ''

for (let i = n + 1; i < input.length; i++) {
    answer += map1.get(input[i]) + '\n'
}

console.log(answer)