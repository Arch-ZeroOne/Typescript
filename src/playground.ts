// function identity(arg: number): number {
//   return arg;
// }

function identity<Type>(arg: Type): Type {
  return arg;
}

//* Explicitly specifying the value
let output1 = identity<number>(100);
console.log(typeof output1);

//* Automatically identifies the type for us
let output2 = identity("myString");

console.log(typeof output2);

//Working with arrays
function loggingIdentity<Type>(args: Array<Type>): Array<Type> {
  console.log(args.length);

  return args;
}

let output3 = loggingIdentity([10, 20, 30]);

console.log(output3);
