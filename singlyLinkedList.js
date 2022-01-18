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
  shift() {
    let removedNode;
    if (!this.head) {
      return undefined;
    } else if (this.length === 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      removedNode = this.head;
      this.head = this.head.next;
    }
    this.length--;
    return removedNode;
  }
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
      this.length++;
    } else {
      newHead.next = this.head;
      this.head = newHead;
      this.length++;
    }
    return this;
  }
  get(index) {
    if (!this.head || this.length <= index || index < 0) {
      return null;
    } else {
      let current = this.head;
      let i = 0;
      while (i < index) {
        current = current.next;
        i++;
      }
      return current;
    }
  }
  set(index, value) {
    if (index < 0 || index >= this.length) {
      return false;
    } else {
      let getNode = this.get(index);
      getNode.val = value;
      return true;
    }
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    } else {
      let newNode = new Node(value);
      let nodeBeforeIndex = this.get(index - 1);
      let nodeAfterIndex = nodeBeforeIndex.next;
      nodeBeforeIndex.next = newNode;
      newNode.next = nodeAfterIndex;
      this.length++;
      return this;
    }
  }
}
let list = new SinglyLinkedList();
console.log(list);
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push(4));
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
console.log(list);
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list);
// console.log(list.unshift(5));
// console.log(list.unshift(4));
// console.log(list.unshift(3));
// console.log(list.unshift(2));
// console.log(list.unshift(1));
console.log(list.get(2));
console.log(list.get(-2));
console.log(list.get(12));
console.log(list.get(0));
console.log(list.set(0, 11));
console.log(list.set(1, 22));
console.log(list.set(-100, 11));
console.log(list);
console.log(list.insert(2, 33));
console.log(list.insert(3, 44));
console.log(list.insert(0, 99));
console.log(list.insert(7, 88));
