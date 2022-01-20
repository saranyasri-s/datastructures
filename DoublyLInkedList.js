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
      temp.prev = null;
      this.length--;
      return temp;
    }
  }
  shift() {
    if (!this.head) {
      return undefined;
    } else if (this.length == 1) {
      let temp = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    } else {
      let temp = this.head;
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
      this.length--;
      return temp;
    }
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return this;
    }
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let half = Math.floor((this.length - 1) / 2);
      if (index <= half) {
        let current = this.head;
        for (let i = 1; i <= index; i++) {
          current = current.next;
        }
        return current;
      } else {
        let current = this.tail;
        for (let i = this.length - 2; i >= index; i--) {
          current = current.prev;
        }
        return current;
      }
    }
  }
  set(index, value) {
    if (index < 0 || index >= this.length) {
      return false;
    } else {
      let gotNode = this.get(index);
      gotNode.val = value;
      return true;
    }
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }
}
let list = new DoublyLinkedList();
console.log(list);
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.unshift(1));
console.log(list.unshift(2));
console.log(list.unshift(3));
console.log(list.unshift(4));
console.log(list.unshift(5));
// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.get(3));
// console.log(list.get(4));
// console.log(list.get(5));
// console.log(list.get(-5));
console.log(list.set(0, 11));
console.log(list.set(1, 22));
console.log(list.set(2, 33));
console.log(list.set(3, 44));
console.log(list.set(4, 55));
console.log(list.set(5, 66));
console.log(list.insert(0, 111));
console.log(list.insert(1, 222));
console.log(list.insert(2, 333));
console.log(list.insert(8, 888));
console.log(list.insert(9, 999));
console.log(list.insert(100, 111));
