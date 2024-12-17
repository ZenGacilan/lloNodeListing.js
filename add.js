class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;

// Create a new linked list
const list = new LinkedList();

// Append items to the list
list.append("Data Structures - Array");
list.append("Variable Type - Integer");
list.append("Sorting Algorithm - Bubble Sort");

// Print the list
list.print();
