//? Watched in https://www.youtube.com/watch?v=EcCTIExsqmI

//Generics -> Changes and modifies the removed data based on how you use and need it
// When defining a generic function we could use brackets (<>)
// Be descriptive as you can

//* Use case in function
// function getFirstElement<ElementType>(array: ElementType[]) {
//   return array[0];
// }

// const numbers = [1, 2, 3];
// const firstNum = getFirstElement(numbers);

// const strings = ["Windyl", "Monton"];
// const firstString = getFirstElement(strings);

//* When getting an HTML element
// const input = document.querySelector<HTMLInputElement>(".input");

// console.log(input.value);

//* In array.map() functon
// const a = [1, 2, 3];

// a.map(() => {
//   return "asdf";
// });

//* In Map()
// const map = new Map<string, number>();

// map.set("Number", 3);

//* In a API response (Generic Type)

type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

//* You can also provide a default  value if a response does not receive a value (Default value)
//The default value will then be used if there is nothing passed in the brackets (<>)
// type ApiResponse<{status : number}> = {
//   data: Data;
//   isError: boolean;
// };

//* Telling that a type shoule be a generic type of object
// type ApiResponse<Data extends object> = {
//   data: Data;
//   isError: boolean;
// };

type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogResponse = ApiResponse<{ title: string }>;

//* Here we are specifying what kind of data will be passed in the generic type
const response: UserResponse = {
  data: {
    name: "Khyle",
    age: 28,
  },
  isError: false,
};

const responseBlog: BlogResponse = {
  data: {
    title: "Winnie the Pooh",
  },
  isError: false,
};
