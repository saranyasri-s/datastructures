class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let removedNode;
    if (!this.head) {
      return undefined;
    } else if (this.length === 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let current = this.head;
      let prev;
      while (current.next) {
        prev = current;
        current = current.next;
      }

      prev.next = null;
      this.tail = prev;
      removedNode = current;
      this.length--;
    }
    return removedNode;
  }
}
let list = new SinglyLinkedList();
console.log(list);
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push(4));
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list);
