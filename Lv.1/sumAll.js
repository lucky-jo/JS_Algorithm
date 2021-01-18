function solution(n)
{
    return String(n).split('').reduce( (a, b) => parseInt(a)  + parseInt(b), 0);
}