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
  keys() {
    let keyss = [];
    let ar = this.arr;
    for (let i = 0; i < ar.length; i++) {
      if (ar[i]) {
        for (let j = 0; j < ar[i].length; j++) {
          keyss.push(ar[i][j][0]);
        }
      }
    }
    return keyss;
  }
  values() {
    let valuess = [];
    let ar = this.arr;
    for (let i = 0; i < ar.length; i++) {
      if (ar[i]) {
        for (let j = 0; j < ar[i].length; j++) {
          if (!valuess.includes(ar[i][j][1])) {
            valuess.push(ar[i][j][1]);
          }
        }
      }
    }
    return valuess;
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
console.log(has.keys());
console.log(has.values());
