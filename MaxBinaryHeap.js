class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;

    this.bubbleUp(index);
    return this.values;
  }
  bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (this.values[parentIndex] < this.values[index]) {
      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];
      index = parentIndex;
      this.bubbleUp(index);
    }
  }
}
let heap = new MaxBinaryHeap();
console.log(heap);
console.log(heap.insert(3));
console.log(heap.insert(334));
console.log(heap.insert(31));
console.log(heap.insert(23));
console.log(heap.insert(378));
console.log(heap.insert(321));
console.log(heap.insert(32));
console.log(heap.insert(13));
