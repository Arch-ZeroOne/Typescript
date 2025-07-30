//Literal Types -> Means the value should be literally the actual value

let name1 = "Bob";

//We cant change the value here since it is in const and the value is not mutable

const name2 = "Bob";

//This will get an error since we declared that the "literal" value  of the name3 variable should be Bob
const name3: "Bob" = "Jason";
