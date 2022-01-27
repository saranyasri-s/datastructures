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
      total = (total * strangePrime + value) % size;
    }
    return total;
  }
}
let has = new HassTables(30);
console.log(has);
