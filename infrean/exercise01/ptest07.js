function solution(tickets) {
    const n = tickets.length;
    const tmp = Array.from({ length: n + 1 }, () => 0)
    const start = 'ICN'
    tmp[0] = start
    const visited = Array.from({ length: n }, () => 0)

    function dfs(v = 1, s) {
        tmp[v] = s[1]
        console.log('s', s)
        if (v > n || tickets.length === 0) {
            return
        } else {
            dfs(v + 1, findTickets(s[1], tickets))
        }
    }

    dfs(1, findTickets(start, tickets))
    return tmp;
}

function findTickets(target, tickets) {
    const result = tickets.filter((v, i) => {
        if ( visited[i] === 0 && v[0] === target ) {
            visited[i] = 1
            return true
        }
        return false
    }).sort((a, b) => {
            if (a[1] < b[1]) return -1
            else return 1

        })[0];
    console.log('result', result)
    // const idx = tickets.findIndex(v => v[0] === result[0] && v[1] === result[1]);
    // tickets.splice(idx, 1)
    // console.log('tickets',tickets)
    return result
}

// const tickets = [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]
const tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]

// const result = tickets.findIndex(v => v[0] === "SFO" && v[1] === "ATL")
// console.log(result)
console.log(solution(tickets))

// [ICN, ATL, ICN, SFO, ATL, SFO]