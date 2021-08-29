function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const divisor = max - min + 1;
  let upperBound = 1;

  for (let i = min; i <= max; i++){
    upperBound *= i;
  }

  for (let multi = max; multi <= upperBound; multi += max){
    let divisorCount = 0;
    for (let i = min; i <= max; i++){
      if (multi % i == 0){
        divisorCount += 1;
      }
    }
    if (divisorCount == divisor){
      return multi;
    }
  }
}


console.log(smallestCommons([1,5]))