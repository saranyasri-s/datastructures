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
}
let has = new HassTables(30);
console.log(has);
console.log(has.set("saran", "good"));
console.log(has.set("santhose", "gold"));
console.log(has.set("aghil", "vgood"));
console.log(has.set("saran", "good"));
