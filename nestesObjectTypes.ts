//Nested object types are commonly used to define complex objects



//Custom Human Type with nested object type
type Human = {
  name: string;
  age: number;
  isStudent: false;
  //*Here is the nested object types
  address: {
    street: string;
    city: string;
    country: string;
  };
};

//*We can also extract or separate the nested object type

type Address = {
  street: string;
  city: string;
  country: string;
};

//* So the nested object can look like this
// type Human = {
//   name: string;
//   age: number;
//   isStudent: false;
//   //*Here is the nested object types
//   address: Address;
// };

const human: Human = {
  name: "Windyl",
  age: 18,
  isStudent: false,
  address: {
    street: "Bundas Lupon Davao Oriental",
    city: "Davao City",
    country: "Philippines",
  },
};
