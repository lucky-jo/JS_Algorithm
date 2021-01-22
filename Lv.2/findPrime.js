function solution(numbers) {
  let arr = numbers.split("");
  const set1 = new Set();

  for (let i = 1; i <= arr.length; i++) {
    let numberArr = variations(arr,i).map(v => Number( v.join("")));
    numberArr.forEach(v => set1.add(v));
  }

  const results = Array.from(set1);
  const primeArr = results.filter( value => isPrime(value))

    return primeArr.length;
}

function variations (arr, n=arr.length) {
  if(n === 0) return [[]]
  if(!(n >= 0)) return []
  let output = []
  for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) < i) {
        continue
    }
    let newArr = arr.slice()
    newArr.splice(i, 1)
    output.push(...variations(newArr, n - 1).map(e => [arr[i], ...e]))
  }
  return output
}

function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    if (n === 2 || n === 3) {
      return true;
    }
    if (n % 2 === 0) {
      return false;
    }
    let divisor = 3;
    let limit = Math.sqrt(n);
    while (limit >= divisor) {
      if (n % divisor === 0) {
        return false;
      }
      divisor += 2;
    }
    return true;
  }

  console.log(solution("17"))