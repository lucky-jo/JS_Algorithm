// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const str = `26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna`

const input = str.split('\n')
// const map1 = new Map();
const [n, m] = input[0].split(' ').map(Number)
const arr = Array.from({ length: n + 1 })

for (let i = 1; i <= n; i++) {
    arr[i] = input[i]
}

let answer = ''

for (let i = n + 1; i < input.length; i++) {
    if (isNaN(input[i])) answer += arr.indexOf(input[i]) + '\n'
    else answer += arr[Number(input[i])] + '\n'
}
console.log(answer)