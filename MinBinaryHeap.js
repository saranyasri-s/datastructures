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
  Dequeue() {
    let removed;
    if (this.values.length === 0) {
      return null;
    }
    if (this.values.length === 1) {
      removed = this.values.pop();
      return removed;
    }

    let lastIndex = this.values.length - 1;
    [this.values[lastIndex], this.values[0]] = [
      this.values[0],
      this.values[lastIndex],
    ];

    removed = this.values.pop();
    this.sinkDown(0);

    return removed;
  }
  sinkDown(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let lastIndex = this.values.length - 1;
    if (leftChildIndex <= lastIndex && rightChildIndex <= lastIndex) {
      if (
        this.values[leftChildIndex].priority <
        this.values[rightChildIndex].priority
      ) {
        if (
          this.values[leftChildIndex].priority < this.values[index].priority
        ) {
          [this.values[leftChildIndex].priority, this.values[index].priority] =
            [this.values[index].priority, this.values[leftChildIndex].priority];
          index = leftChildIndex;
          this.sinkDown(index);
        }
      } else {
        if (
          this.values[rightChildIndex].priority < this.values[index].priority
        ) {
          [this.values[rightChildIndex].priority, this.values[index].priority] =
            [
              this.values[index].priority,
              this.values[rightChildIndex].priority,
            ];
          index = rightChildIndex;
          this.sinkDown(index);
        }
      }
    } else if (leftChildIndex <= lastIndex && rightChildIndex > lastIndex) {
      if (this.values[leftChildIndex].priority < this.values[index].priority) {
        [this.values[leftChildIndex].priority, this.values[index].priority] = [
          this.values[index].priority,
          this.values[leftChildIndex].priority,
        ];
        index = leftChildIndex;
        this.sinkDown(index);
      }
    } else if (leftChildIndex > lastIndex && rightChildIndex <= lastIndex) {
      if (this.values[rightChildIndex].priority < this.values[index].priority) {
        [this.values[rightChildIndex].priority, this.values[index].priority] = [
          this.values[index].priority,
          this.values[rightChildIndex].priority,
        ];
        index = rightChildIndex;
        this.sinkDown(index);
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
console.log(pQueue.Dequeue());
console.log(pQueue.Dequeue());
console.log(pQueue.Dequeue());
console.log(pQueue.Dequeue());
console.log(pQueue.Dequeue());
console.log(pQueue.Dequeue());
