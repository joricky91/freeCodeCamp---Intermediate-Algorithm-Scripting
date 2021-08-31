function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let a = 2 * Math.PI;
  let newArr = [];

  let getOrb = function(obj){
    let c = Math.pow(earthRadius + obj.avgAlt, 3);
    let b = Math.sqrt(c / GM);
    let orbPeriod = Math.round(a * b);

    return {name: obj.name, orbitalPeriod: orbPeriod};
  };
  
  for (let element in arr){
    newArr.push(getOrb(arr[element]));
  }

  return newArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))