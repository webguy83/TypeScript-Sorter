import { Sorter } from "./Sorter";

export class StringCollection extends Sorter {
  data: string;
  constructor(data: string) {
    super();
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(lIndex: number, rIndex: number): boolean {
    return this.data[lIndex].toLowerCase() > this.data[rIndex].toLowerCase();
  }

  swap(lIndex: number, rIndex: number): void {
    const chars = this.data.split("");

    const rightHand = chars[rIndex];
    chars[rIndex] = chars[lIndex];
    chars[lIndex] = rightHand;

    this.data = chars.join("");
  }
}
