class HassTables {
  constructor(size) {
    this.arr = new Array(size);
  }
  hash(key) {
    let total = 0;
    let strangePrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * strangePrime + value) % this.arr.length;
    }
    return total;
  }
  set(key, val) {
    let hashIndex = this.hash(key);
    if (this.arr[hashIndex]) {
      this.arr[hashIndex].push([key, val]);
    } else {
      this.arr[hashIndex] = [];
      this.arr[hashIndex].push([key, val]);
    }

    return this.arr;
  }
  get(key) {
    let val;
    let hashIndex = this.hash(key);

    for (let i = 0; i < this.arr[hashIndex].length; i++) {
      let element = this.arr[hashIndex];
      if (element[i][0] === key) {
        val = element[i];
        break;
      }
    }
    return val;
  }
}
let has = new HassTables(11);
console.log(has);
console.log(has.set("saran", "good"));
console.log(has.set("santhose", "gold"));
console.log(has.set("aghil", "vgood"));
console.log(has.set("ssara", "good"));
console.log(has.set("ssira", "good"));
console.log(has.set("psara", "good"));
console.log(has.set("qsara", "good"));
console.log(has.set("hsaia", "good"));
console.log(has.get("aghil"));
console.log(has.get("psara"));
console.log(has.get("hsaia"));
console.log(has.get("hsadwsia"));
