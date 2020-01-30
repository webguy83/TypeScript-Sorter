import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  data: number[];
  constructor(data: number[]) {
    super();
    this.data = data;
  }
  get length(): number {
    return this.data.length;
  }
  compare(lIndex: number, rIndex: number): boolean {
    return this.data[lIndex] > this.data[rIndex];
  }
  swap(lIndex: number, rIndex: number): void {
    const rightHand = this.data[rIndex];
    this.data[rIndex] = this.data[lIndex];
    this.data[lIndex] = rightHand;
  }
}
