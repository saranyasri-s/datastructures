class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    } else if (this.length == 1) {
      let temp = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    } else {
      let temp = this.tail;
      this.tail = temp.prev;
      this.tail.next = null;
      this.length--;
      return temp;
    }
  }
}
let list = new DoublyLinkedList();
console.log(list);
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
