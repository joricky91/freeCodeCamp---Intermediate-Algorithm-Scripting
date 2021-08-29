function convertHTML(str) {
  let strChar = str.split("");

  for (let i = 0; i < strChar.length; i++){
    switch(strChar[i]){
      case "&":
        strChar[i] = "&amp;";
        break;
      case "<":
        strChar[i] = "&lt;";
        break;
      case ">":
        strChar[i] = "&gt;";
        break;
      case '"':
        strChar[i] = "&quot;";
        break;
      case "'":
        strChar[i] = "&apos;";
        break;
    }
  }

  strChar = strChar.join("");
  return strChar;
}

console.log(convertHTML("Dolce & Gabbana"))