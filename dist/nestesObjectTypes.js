"use strict";
//Nested object types are commonly used to define complex objects
Object.defineProperty(exports, "__esModule", { value: true });
//* So the nested object can look like this
// type Human = {
//   name: string;
//   age: number;
//   isStudent: false;
//   //*Here is the nested object types
//   address: Address;
// };
const human = {
    name: "Windyl",
    age: 18,
    isStudent: false,
    address: {
        street: "Bundas Lupon Davao Oriental",
        city: "Davao City",
        country: "Philippines",
    },
};
//# sourceMappingURL=nestesObjectTypes.js.map