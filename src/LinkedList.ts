import { Sorter } from "./Sorter";

class Node {
  data: number;
  next: Node | null = null;
  constructor(data: number) {
    this.data = data;
  }
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  add(data: number): void {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  get length(): number {
    if (this.head === null) {
      return 0;
    } else {
      let length = 1;
      let currentNode = this.head;
      while (currentNode.next !== null) {
        length++;
        currentNode = currentNode.next;
      }
      return length;
    }
  }

  at(index: number = 0): Node {
    let counter = 0;
    let currentNode = this.head;
    if (currentNode === null) {
      throw new Error("Index not here!");
    } else {
      while (currentNode !== null) {
        if (counter === index) {
          return currentNode;
        } else {
          counter++;
          currentNode = currentNode.next;
        }
      }
      throw new Error("Index not here!");
    }
  }

  compare(lIndex: number, rIndex: number): boolean {
    if (!this.head) {
      throw new Error("No list!");
    } else {
      return this.at(lIndex).data > this.at(rIndex).data;
    }
  }

  swap(lIndex: number, rIndex: number): void {
    const rightHand = this.at(rIndex).data;
    this.at(rIndex).data = this.at(lIndex).data;
    this.at(lIndex).data = rightHand;
  }

  print(): void {
    if (this.head === null) {
      return;
    } else {
      let node: Node | null = this.head;
      while (node !== null) {
        console.log(node.data);
        node = node.next;
      }
    }
  }
}
