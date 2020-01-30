import { Sorter } from "./Sorter";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { StringCollection } from "./StringCollection";

// const numbers = new NumbersCollection([450000, -22, -4, 32]);
// numbers.sort();
// console.log(numbers.data);

// const chars = new StringCollection("Fuckyou");
// chars.sort();
// console.log(chars.data);

const linkedList = new LinkedList();
linkedList.add(6888);
linkedList.add(10);
linkedList.add(7876);
linkedList.sort();
linkedList.print();
console.log(linkedList.at(0));
