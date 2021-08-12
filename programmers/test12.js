let s = "{{20,111},{111}}"

s = s.replace(/{/g,'[')
s = s.replace(/}/g,']')
const answer = []
const result = JSON.parse(s).sort((a, b) => a.length - b.length)


for (const values of result) {
    for (const value of values) {
        if( !answer.find(r => r === value)) {
            answer.push(value)
            break
        }
    }
}

console.log(answer)
