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
  extractMax() {
    if (this.values.length === 0) {
      return null;
    }
    if (this.values.length === 1) {
      return this.values.pop();
    }
    let parentIndex = 0;
    let lastIndex = this.values.length - 1;
    [this.values[parentIndex], this.values[lastIndex]] = [
      this.values[lastIndex],
      this.values[parentIndex],
    ];
    let removed = this.values.pop();
    this.sinkDown(parentIndex);
    return removed;
  }
  sinkDown(pI) {
    let leftChildIndex = 2 * pI + 1;
    let rightChildIndex = 2 * pI + 2;
    if (this.values[leftChildIndex] > this.values[rightChildIndex]) {
      if (this.values[leftChildIndex] > this.values[pI]) {
        [this.values[leftChildIndex], this.values[pI]] = [
          this.values[pI],
          this.values[leftChildIndex],
        ];
        pI = leftChildIndex;
        this.sinkDown(pI);
      }
    } else {
      if (this.values[rightChildIndex] > this.values[pI]) {
        [this.values[rightChildIndex], this.values[pI]] = [
          this.values[pI],
          this.values[rightChildIndex],
        ];
        pI = rightChildIndex;
        this.sinkDown(pI);
      }
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
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
