class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);

    let index = this.values.length - 1;
    if (index <= 0) {
      return this.values;
    }
    this.bubbleUp(index);
    return this.values;
  }
  bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (this.values[parentIndex].priority > this.values[index].priority) {
      [this.values[parentIndex].priority, this.values[index].priority] = [
        this.values[index].priority,
        this.values[parentIndex].priority,
      ];
      index = parentIndex;
      if (index > 0) {
        this.bubbleUp(index);
      }
    }
  }
}
let pQueue = new PriorityQueue();
console.log(pQueue.enqueue(12, 4));
console.log(pQueue.enqueue(12, 3));
console.log(pQueue.enqueue(12, 2));
console.log(pQueue.enqueue(12, 1));
console.log(pQueue.enqueue(12, 5));
