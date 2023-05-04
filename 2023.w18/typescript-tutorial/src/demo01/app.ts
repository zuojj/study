
class Animal {
  protected type: string[];
  private age: number;
  constructor(type: string[], age: number) {
    this.type = type;
    this.age = age;
  }

  getType() {
    return this.type;
  }

  setType(type: string[] = ['1', '2', '3']) {
    this.type = type;
  }

  getAge() {
    return this.age;
  }

  setAge(age: number) {
    this.age = age;
  }
}


const a = new Animal(['1'], 123);
console.log(a.getType());

// Array type
let name1: number[] = [1, 2, 3];
let name2: Array<string> = ["Alice", "Bob", "Eve"];

// Object type
let obj: { name: string, age: number};
obj = {
  name: 'james',
  age: 40
};

let obj2: { name: string, age?: number};
obj2 = {
  name: 'james'
};
obj2 = {
  name: 'james',
  age: 30
};

// Union Types
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

// OK
printId(101);
// OK
printId("202");
// Error
// printId({ myID: 22342 });

// Type Aliases
type Point = {
  x: number | string,
  y: number | string
}

function printPoint(point: Point) {
  return `(${point.x}, ${point.y})`;
}

printPoint({x: 1, y: '3'});

// Interfaces
interface Point2 {
  x: number | string,
  y: number | string
}

function printPoint2(point: Point2) {
  return `(${point.x}, ${point.y})`;
}

printPoint2({x: 1, y: '3'});

// Type Assertions

const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

let x: string | number = Math.random() < 0.5 ? 10 : "hello world!";

// Function Type Expressions

const sum: (a: number, b: number) => number = (a, b) => {
  return a + b;
};
console.log(sum(1, 3));

type sum2 = (a: number, b: number) => number;
const sum3 = (sum2: sum2) => {
  return sum2(1, 3);
};


// readonly
interface Person {
  readonly name: string;
  age: number;
}

// function getPerson(person: Person) {
//   person.name = 'xxx';
// }

