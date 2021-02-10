function solution(n){
    DFS(n)
}

solution(3);

function DFS(L){
    if( L === 0 ) return
    else DFS(L-1)
    console.log(L)
}