function canSpell(mag, word) {
  let result = false;
  for (let letter of word) {
    result = false;
    for (let i = 0; i < mag.length; i++) {
      if (letter == mag[i]) {
        result = true;
        break;
      }
    }
    if (result == false) {
      break;
    }
  }
  return result;
}
console.log(canSpell(["a", "b", "c", "d", "e"], "ctd"));
