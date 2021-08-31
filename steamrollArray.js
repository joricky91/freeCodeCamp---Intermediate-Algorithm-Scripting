function steamrollArray(arr) {
  const flatenned = [];

  for (let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
      flatenned.push(...steamrollArray(arr[i]));
    }
    else{
      flatenned.push(arr[i]);
    }
  }
  return flatenned;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))