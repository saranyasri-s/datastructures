function canSpell(mag, word) {
  let newMagObj = {};
  for (let i = 0; i < mag.length; i++) {
    if (!newMagObj[mag[i]]) {
      newMagObj[mag[i]] = 1;
    } else {
      newMagObj[mag[i]]++;
    }
  }
  let result = true;
  for (let letter of word) {
    if (newMagObj[letter] == 0 || !newMagObj[letter]) {
      result = false;
      break;
    } else {
      newMagObj[letter]--;
    }
  }
  return result;
}
console.log(canSpell(["a", "b", "c", "d", "e", "c", "d", "t"], "abc"));
