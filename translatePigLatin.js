function translatePigLatin(str) {
  let regex = /^[^aiueo]+/;
  let myStr = str.match(regex);

  return myStr != null
  ?str
    .replace(myStr, "")
    .concat(myStr)
    .concat("ay")
  :
    str.concat("way");
}

console.log(translatePigLatin("consonant"))