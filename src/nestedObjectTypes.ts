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

//Extended types for nested object types complexity
type Address = {
  street: string;
  city: string;
  country: string;
};

type GameInformation = {
  gameName: string;
  isPro: boolean;
  gameId?: string;
};

//* So the nested object can look like this
// type Human = {
//   name: string;
//   age: number;
//   isStudent: false;
//   //*Here is the nested object type in action
//   address: Address;
// };

type Gamer = {
  username: string;
  gameInfo: GameInformation;
};

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

const player1: Gamer = {
  username: "WIndyl Baho",
  gameInfo: {
    gameName: "Mobile Legends",
    isPro: true,
    gameId: "123456",
  },
};
