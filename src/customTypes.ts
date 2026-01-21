// Custom types in TS forces Us to stay consistent when it comes to defining objects in our codebase
//Custom types in typescript should be in UpperCase

// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// let person: Person = {
//   name: "Joe",
//   age: 42,
//   isStudent: true,
// };

// //Typescript will warn if the created obje ct doesnt match the custom type created ex:

// // let person2: Person = {
// //   name: "Jill",
// //   age: 22,
// //   isstudent: false, //! Error will show up here
// // };

// let person2: Person = {
//   name: "Jill",
//   age: 22,
//   isStudent: false,
// };

// //Mock Custom Type
// type Car = {
//   carId: number;
//   modelName: string;
//   color: string;
//   variants: string[];
// };

// const car1: Car = {
//   carId: 1,
//   modelName: "Lamborgini",
//   color: "Blue",
//   variants: ["Automatic", "Manual"],
// };

type Person = {
  name: string;
  age: number;
  isMarried: boolean;
  address?: string;
  wife?: object;
  husband?: object;
};

const windyl: Person = {
  name: "Windyl Monton",
  age: 18,
  isMarried: true,
  address: "Bundas",
};

const peter: Person = {
  name: "Peter Olan Olan",
  age: 20,
  isMarried: true,
  address: "BH",
  wife: mekylla,
};
const mekylla: Person = {
  name: "Mekylla Taghoy",
  age: 30,
  isMarried: false,
  husband: peter,
};
