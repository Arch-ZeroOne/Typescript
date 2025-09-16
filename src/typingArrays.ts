//Typing an array means that if the type of array is a number, it will only then accepts number only
const arrNum: number[] = [1, 2, 3, 4, 5];
const arrString: string[] = ["Windyl", "Parcon", "Monton"];
const boolAr: boolean[] = [true, true, false];

//creating a array of person type

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

let person1: Person = {
  name: "Windyl",
  age: 18,
  isStudent: true,
};

let person2: Person = {
  name: "John",
  age: 30,
  isStudent: false,
};

//Specifies that we are making an array of person object
let arrPerson: Person[] = [person1, person2];

//Another known syntax for arrays
let arrPerson2: Array<Person> = [person1, person2];
